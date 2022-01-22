import './login.scss';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useRef } from 'react';
import axios from 'axios';
import { Context } from '../../context/Context';

export default function Login() {
    const userRef = useRef(null);
    const passwordRef = useRef(null);
    const { dispatch, isFetching } = useContext(Context);



    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: `LOGIN_START` });
        const userLogin = async () => {
            await axios
                .post(`auth/login`, {
                    username: userRef.current.value,
                    password: passwordRef.current.value,
                })
                .then((res) => {
                    console.log(res);
                    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
                })
                .catch((err) => {
                    console.log(err);
                    dispatch({ type: `LOGIN_FAILURE` });
                });
        };
        userLogin();
    };
    return (
        <div className='login'>
            <form className='loginForm' onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label>Username</label>
                <input
                    type='test'
                    placeholder='Enter Your Username'
                    ref={userRef}
                />
                <label>Password</label>
                <input
                    type='password'
                    placeholder='Enter password'
                    ref={passwordRef}
                />
                <button className='loginBtn' type='submit' disabled={isFetching}>
                    Login
                </button>
                <button className='registerBtn'>
                    <Link className='routerLink' to='/register'>
                        REGISTER
                    </Link>
                </button>
            </form>
        </div>
    );
}
