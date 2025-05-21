import React, { useState } from "react";
import { signin } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";
import './AuthForm.css';

export default function SignIn(){
    const [form,setForm]=useState({email:'',password:''});
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setForm({...form,[e.target.name]:e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent)=>{
        e.preventDefault();
        try{
            const res = await signin(form);
            localStorage.setItem('token',res.data.access_token);
            navigate('/');
        }catch (err){
            alert('Sign in failed');
        }
    };

    return(
        <div className="auth-container" > 
            <div className="auth-card">
                <form onSubmit={handleSubmit} className="auth-form">
                    <h2>Sign In</h2>
                    <input name= "email" placeholder="bigMan@example.com" onChange={handleChange} required/>
                    <input name= "password" placeholder="Password" onChange={handleChange} required/>
                    <button type ="submit">Sign In</button>
                    <div className="signup-link">
                        <span> Don't have an account?</span>
                        <Link to="/">Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>
    );

}