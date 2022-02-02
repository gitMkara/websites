const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const e = require('express');

//REGISTER
router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        });

        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(409).json(err);
    }
});

let refreshTokens = [];
//LOGIN
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({
            username: req.body.username,
        });
        const isPassTrue = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (isPassTrue) {
            const { password, ...others } = user._doc;
            const accessToken = jwt.sign(
                { usename: user.username, id: user._id },
                process.env.JWT_TOKEN,
                {
                    expiresIn: '20s',
                }
            );
            const refreshToken = jwt.sign(
                { usename: user.username, id: user._id },
                process.env.JWT_REFRESH_TOKEN
            );

            refreshTokens.push(refreshToken);
            res.json({
                id: user._id,
                username: user.username,
                accessToken,
                refreshToken,
            });
        } else {
            res.status(400).json('WRONG PASSWORD.');
        }
    } catch (error) {
        console.log(error);
        res.status(505).json('err');
    }
});

//JWT REFRRESH TOKEN
router.post('/refresh', (req, res) => {
    const refreshToken = req.body.token;
    if (!refreshToken) return res.status(401).json('You did not authenticate.');
    if (!refreshTokens.includes(refreshToken))
        return res.status(402).json('Refresh token`s not valid.');

    jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN, (err, user) => {
        if (err) return res.status(401).json('There is some error.');

        refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

        const newAccessToken = jwt.sign(
            { usename: user.username, id: user.id },
            process.env.JWT_TOKEN,
            {
                expiresIn: '20s',
            }
        );
        const newRefreshToken = jwt.sign(
            { usename: user.username, id: user.id },
            process.env.JWT_REFRESH_TOKEN
        );
        refreshTokens.push(newRefreshToken);
        res.status(200).json({
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
        });
    });
});
const verify = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader;

        jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
            if (err) {
                res.status(401).json('TOKEN IS INVALID');
            } else {
                req.user = user;
                next();
            }
        });
    } else {
        res.status(402).json('You are not authenticated.');
    }
};
//LOGOUT
router.post('/logout', verify, (req, res) => {
    try {
        const refreshToken = req.body.token;
        refreshTokens = refreshTokens.filter((key) => key != refreshToken);
        res.status(200).json(req.user);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
