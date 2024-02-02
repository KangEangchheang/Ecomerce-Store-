import { useEffect, useState } from "react";
import {useLocation,useNavigate} from 'react-router-dom'
import useAuth from "../hooks/useAuth";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

function Login() {
    //use global state or context
    const { setAuth, remember,setRemember} = useAuth();
    
    //auto sent user to their destination instead of dumb founded in the login page
    const location = useLocation();
    const navigate = useNavigate();
    const fromLocation = location.state?.from?.pathname || '/';

    
    const [email,setEmail]= useState('');
    const [pwd,setPwd]= useState('');
    const [error,setError]= useState('');

    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(email.length === 0 || pwd.length === 0){
            return setError('Please enter a valid email and password')
        }
        try {
            const response = await axios.post(`${BASE_URL}/auth`,
                JSON.stringify({email:email,password:pwd}),
                {
                    headers:{
                        'Content-Type':'application/json'
                    },
                    withCredentials:true
                }
            );
            
            const accessToken = response?.data?.accessToken;
            const user = response?.data?.user;
            
            
            setAuth({user,accessToken});
            //clear input fields
            setPwd('');
            setEmail('');
            setError('');

            //navigate the user to their actual destination back
            navigate(fromLocation,{replace:true});

        } catch (error) {
            if (!error?.response){
                setError('no response from server')
            }
            else if(error.response?.status === 400){
                setError('missing credentials');
            }
            else if(error.response?.status === 401){
                setError('Email or password is incorrect');
            }else{
                setError('something went wrong');
            }
        }
    }

    const handleCheck = () =>{
        setRemember(prev => !prev);
    }
    useEffect(()=>{
        localStorage.setItem('remember',remember);
        if(!remember){
            sessionStorage.setItem('remember',true);
        }
    },[remember]);

    return ( 
        <div className="flex justify-center py-8 h-fit text-sm">
            <div className="rounded-xl w-fit h-fit bg-white shadow-md flex-col flex gap-6 px-8 py-14 tracking-wide items-center border-2 border-gray-300">
                <h1 className="font-medium text-2xl">Login</h1>
                {error.length>0&&<span className="text-red-500">{error}</span>}
                <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                    <label htmlFor="username">Email:</label>
                    <input className="border-[1px] mb-6 border-gray-300 outline-none px-2 py-3 rounded-md w-[25rem] shadow-secondary1 focus:shadow-lg focus:border-secondary1" 
                    autoComplete="off" placeholder="Enter email address" 
                    type="text" id="username" name="username" 
                    required onChange={(e)=>setEmail(e.target.value)}/>

                    <label htmlFor="password">Password:</label>
                    <input className="border-[1px] mb-6 border-gray-300 outline-none px-2 py-3 rounded-md w-[25rem] shadow-secondary1 focus:shadow-lg focus:border-secondary1" 
                    autoComplete="off" placeholder="Enter password" 
                    type="password" id="password" name="password" 
                    required onChange={(e)=>setPwd(e.target.value)}/>

                    <div className="flex gap-2 mb-2">
                        <input type="checkbox" id="remember" onChange={()=>handleCheck()} checked={remember}/>
                        <label htmlFor="remember" className="text-sm">Remember me</label>
                    </div>
                    <button className="active:scale-95 shadow-secondary1 shadow-lg bg-secondary1 px-2 py-2 text-white font-medium rounded-full" type="submit">Login</button>
                </form>
                <span className="text-left w-full text-sm text-text1">create an account.<a href="/auth/signup" className="ml-2 text-secondary1 font-medium underline">Sign up</a></span>
            </div>
        </div>
     );
}

export default Login;