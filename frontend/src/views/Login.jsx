import { useState } from "react";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

function Login() {
    const [email,setEmail]= useState('');
    const [pwd,setPwd]= useState('');
    const [sucess,setSucess]= useState(false);
    const [error,setError]= useState('');
    
    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(email.length === 0 || pwd.length === 0){
            return setError('Please enter a valid email and password')
        }
        try {
            await axios.post(`${BASE_URL}/auth`,
                JSON.stringify({email:email,password:pwd}),
                {
                    headers:{
                        'Content-Type':'application/json'
                    },
                    withCredentials:true
                }
            );

            setSucess(true);
            //clear input fields
            setPwd('');
            setEmail('');
            setError('');
        } catch (error) {
            setError(error);
        }
    }

    return ( 
        <div className="flex justify-center py-8 h-fit text-sm">
            {!sucess&&<div className="rounded-xl w-fit h-fit bg-white shadow-md flex-col flex gap-6 px-8 py-14 tracking-wide items-center border-2 border-gray-300">
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
                        <input type="checkbox"/>
                        <label className="text-sm">Remember me</label>
                    </div>
                    <button className="active:scale-95 shadow-secondary1 shadow-lg bg-secondary1 px-2 py-2 text-white font-medium rounded-full" type="submit">Login</button>
                </form>
                <span className="text-left w-full text-sm text-text1">create an account.<a href="/auth/signup" className="ml-2 text-secondary1 font-medium underline">Sign up</a></span>
            </div>}
            {
                sucess&&<div className='py-32 text-2xl text-text1 text-center'>
                    Login Success<br/>
                    <a href="/" className="text-secondary1 font-medium underline">Go to homepage</a>
                </div>
            }
        </div>
     );
}

export default Login;