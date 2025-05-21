import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.css';

export default function layout(){
    return(
        <div className='layout-container'>
            <div className='layout-topbar'>
                <h1>Authentication App</h1>
            </div>
            <div className='layout-content'>
                <Outlet/>
            </div>
        </div>
    )
};