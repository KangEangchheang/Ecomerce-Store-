import {useRef, useState,useEffect} from 'react';
import axios from 'axios';	

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9 ]{0,18}[a-zA-Z0-9]$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[!@#$%]?).{8,}$/;
const EMAIL_REGEX = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
const BASE_URL = import.meta.env.VITE_BASE_URL;
function Register() {
    const errRef = useRef(null);
    //user
    const [user,setUser] = useState('');
    const [validName,setValidName] = useState(false);

    const [email,setEmail] = useState('');
    const [validEmail,setValidEmail] = useState(false);
    //password
    const [pwd, setpwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);

    //confirm password
    const [matchPwd, setmatchPwd] = useState(false);
    const [validMatch, setvalidMatch] = useState(false);

    //error handling
    const [error,setError] = useState('');
    const [sucess, setSucess] = useState(false);

    //validation
    useEffect(()=>{
        const result = USER_REGEX.test(user);
        setValidName(result);
    },[user]);

    useEffect(()=>{
        const result = PASSWORD_REGEX.test(pwd);
        setValidPwd(result);
        //test match to see if confirm password matches
        const match = pwd === matchPwd;
        setvalidMatch(match);
    },[pwd,matchPwd]);

    useEffect(()=>{
        let result = EMAIL_REGEX.test(email) && email.length < 100;
        setValidEmail(result);
    },[email]);

    //error handling 
    useEffect(()=>{
        setError('');

    },[user,pwd,matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(user);
        const v2 = PASSWORD_REGEX.test(pwd);
        const v3 = EMAIL_REGEX.test(email);
        if(!v1 || !v2 || !v3){
            setError('invalid entry');
            return;
        }
        //backend stuff
        try {
            const response = await axios.post(`${BASE_URL}/auth/register`,
                JSON.stringify({username:user, password:pwd,email:email}),
                {
                    headers:{
                        'Content-Type':'application/json'
                    },
                    withCredentials:true
                }
            );

            setSucess(true);
            //clear input fields
            setUser('');
            setpwd('');
            setmatchPwd('');
            setEmail('');
        } catch (error) {
            if(!error?.response){
                setError('no server response');
            }
            else if(error.response?.status === 409){
                setError('Username is taken');
            }
            else{
                setError('Registeration failed');
            }
            errRef.current.focus();
        }
    }
    return ( 
        <section className="flex justify-center py-8 h-fit">
            {!sucess&&<div className="rounded-xl w-fit h-fit bg-white shadow-md flex-col flex gap-6 px-8 py-14 tracking-wide items-center border-2 border-gray-300">
                <h1 className="font-medium text-2xl">Sign up</h1>
                <h1 ref={errRef} className={`font-medium text-lg opacity-0 ${Error?"opacity-100":'absolute'}`} aria-live='assertive'>{error}</h1>
                <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                    <label htmlFor="username" className={`${validName || user.length==0?'text-text2':'text-red-500'}`}>Username:</label>
                    <input className="peer border-[1px] mb-6 border-gray-300 outline-none px-2 py-3 rounded-md w-[25rem] shadow-secondary1 focus:shadow-lg focus:border-secondary1" 
                    autoComplete="off"
                    placeholder="Enter username" 
                    aria-invalid ={validName?'false':'true'}
                    aria-describedby='userInputId'
                    onChange={(e)=>setUser(e.target.value)}
                    type="text" id="username" required/>
                    <p id='userInputId' className={`hidden relative -top-4 text-text1 ${user.length>0? 'peer-focus:block':''}`}>
                        4 to 20 characters.<br/>
                        Must Begin with a letter.<br/>
                    </p>

                    <label htmlFor="email" className={`${validEmail || email.length==0?'text-text2':'text-red-500'}`}>Email:</label>
                    <input className={`peer border-[1px] mb-6 border-gray-300 outline-none px-2 py-3 rounded-md w-[25rem] shadow-secondary1 focus:shadow-lg focus:border-secondary1`}
                    autoComplete="off" placeholder="Enter email address" type="email"
                    id="email" required
                    onChange={(e)=>setEmail(e.target.value)}/>

                    <label htmlFor="password" className={`${validPwd || pwd.length==0?'text-text2':'text-red-500'}`}>Password:</label>
                    <input className="peer border-[1px] mb-6 border-gray-300 outline-none px-2 py-3 rounded-md w-[25rem] shadow-secondary1 focus:shadow-lg focus:border-secondary1" 
                    autoComplete="off" placeholder="Enter password" type="password" 
                    id="password" required
                    onChange={(e)=>setpwd(e.target.value)}
                    aria-invalid={validPwd?'false':'true'}
                    aria-describedby='pwdInputId'/>
                    <p id='pwdInputId' className={`relative -top-4 hidden text-text1 ${pwd.length>0? 'peer-focus:block':''}`}>
                        Atleast 8 characters.<br/>
                        Must contain a number <br/>
                        Only ! @ # $ % symbols can be used.<br/>
                    </p>

                    <label htmlFor="cfmpassword" className={`${!validMatch && matchPwd.length>0?'text-red-500':'text-text2'}`}>Confirm Password:</label>
                    <input className="peer border-[1px] mb-6 border-gray-300 outline-none px-2 py-3 rounded-md w-[25rem] shadow-secondary1 focus:shadow-lg focus:border-secondary1" 
                    autoComplete="off" placeholder="Enter confirm password" 
                    type="password" id="cfmpassword" required
                    onChange={(e)=>setmatchPwd(e.target.value)}
                    aria-invalid={validMatch?'false':'true'}
                    aria-describedby='cfmId'/>
                    
                    <p id='cfmId' className={`relative -top-4 hidden text-text1 ${matchPwd.length>0? 'peer-focus:block':''}`}>
                        Must match password.<br/>
                    </p>
                    
                    <button disabled={!validName || !validMatch || !validPwd || !validEmail? true:false} className="disabled:opacity-60 enabled:active:scale-95 enabled:cursor-pointer shadow-secondary1 shadow-lg bg-secondary1 px-2 py-2 text-white font-medium rounded-full" type="submit">Sign up</button>
                </form>
                <span className="text-left w-full text-sm text-text1">Already have an account?<a href="/auth/login" className="ml-2 text-secondary1 font-medium underline">Login</a></span>
            </div>}
            {
                sucess&&<div className='py-32 text-2xl text-text1 text-center'>
                    Register Success<br/>
                    <a href="/auth/login" className="text-secondary1 font-medium underline">Login</a>
                </div>
            }
        </section>
     );
}

export default Register;