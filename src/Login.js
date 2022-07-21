import React, { useState } from 'react';
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { create } from '@mui/material/styles/createTransitions';
import app from './firebase';

function Login() {
    const authentication = getAuth();
    let navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Register =()=>
    {
        
        createUserWithEmailAndPassword(authentication,email,password)
        .then(()=>{
            alert("User Created Sucessfully")
            navigate('/')
        })
        .catch(()=>{
            alert("Email alredy in use")
        })
    }    
    const Login =()=>
    {
        console.log("auth")
        // signInWithEmailAndPassword(authentication,email,password)
        // .then(()=>{
        //     alert("User Created Sucessfully")
        //     navigate('/');
        // })
        // .catch((err)=>{
        //     console.log(err)
        // })
    }    

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login_logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            </Link>

            <div className='Login_container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button  className='Login_signin_Button' onClick={Login} >Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='register_button' onClick={Register}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login