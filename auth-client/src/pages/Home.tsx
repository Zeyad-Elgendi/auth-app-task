import { useEffect, useState } from "react";
import { getProfile } from "../api/auth";
import { useNavigate } from "react-router-dom";
import './Home.css'
export default function Home(){
    const [user,setUser]=useState<any>(null);
    const navigate = useNavigate();

    useEffect(() =>{
            getProfile()
            .then((res)=> setUser(res.data.user))
            .catch(()=>{
                localStorage.removeItem('token');
                navigate('/signin');
            });
    },[navigate]);

    const handleLogout = ()=>{
        localStorage.removeItem('token');
        navigate('/signin')
    }

    return(
        <div>
            <h2> Welcome to Mr. Magorium's Authentication Emporium</h2>
            {user && (
                <div>
                    <p>Hello {user.name}, did you know your id is: {user.id}</p>
                    <button onClick={handleLogout} className="logout-btn">Log out</button>
                </div>
            )}
        </div>
    );

}