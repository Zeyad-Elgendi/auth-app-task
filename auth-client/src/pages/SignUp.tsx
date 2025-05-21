import React, { useState } from "react";
import { signup } from "../api/auth";
import { useNavigate } from "react-router-dom";
import './AuthForm.css';
export default function SignUp(){
    const [form,setForm]=useState({name:'',email:'',password:''});
    const [errorMsg,setErrorMsg] = useState("");
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setForm({...form,[e.target.name]:e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent)=>{
        e.preventDefault();
        try{
            await signup(form);
            navigate('/signin');
        }catch (err: any){
            const messages = err.response?.data?.message;
            setErrorMsg(messages.join('\n'));
        }
    };

    return(
        <div className="auth-container">
            <div className="auth-card">
                <form onSubmit={handleSubmit} className="auth-form">
                    <h2>Sign Up</h2>
                    <input name= "name" placeholder="Name" onChange={handleChange} required/>
                    <input name= "email" placeholder="bigMan@example.com" onChange={handleChange} required/>
                    <input name= "password" placeholder="Password" onChange={handleChange} required/>
                    <button type ="submit">Sign Up</button>
                    {errorMsg && <p className="error">{errorMsg}</p>}
                </form>
            </div>
        </div>
    );

}