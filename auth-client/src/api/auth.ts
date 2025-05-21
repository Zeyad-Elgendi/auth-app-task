import axios from "axios"

const API = axios.create({
    baseURL: process.env.BASE_URL || 'http://localhost:5000',
})

API.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token');
    if(token && config.headers){
        config.headers.Authorization =`Bearer ${token}`;
    }
    return config;
});

export const signup =( data:{
    email: string;
    name: string;
    password: string;
})=> API.post('/auth/signup',data);

export const signin =( data:{
    email: string;
    password: string;
})=> API.post('/auth/signin',data);

export const getProfile =()=> API.get('/auth/me');
