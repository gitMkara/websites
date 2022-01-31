const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//UPDATE
router.put('/:id', async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            );

            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(401).json('Invalid UserID');
    }
});

//DELETE
// router.delete("/:id", async (req, res) => {
//   if (req.body.userId === req.params.id) {
//     try {
//       await User.findOneAndDelete(req.params.id);
//       res.status(200).json("User's been deleted.");
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   } else {
//     res.status(401).json("Invalid UserID");
//   }
// });

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

router.delete('/:id', verify, async (req, res) => {
    try {
        console.log(req.user._id);

        if (req.user._id === req.params.id) {
            try {
                //await User.findOneAndDelete({_id: req.params.id});
                res.status(200).json("User's been deleted.");
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(405).json('INVALID REQUEST');
        }
    } catch (error) {
        res.status(403).json(error);
    }
});

//GET
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
