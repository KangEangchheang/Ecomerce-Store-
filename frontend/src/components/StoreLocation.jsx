import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import map from '../assets/icons/Map Pin.svg'
import useAuth from '../hooks/useAuth.jsx';

function StoreLocation() {
    const { auth }= useAuth();
    const [isLogin,setLogin] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        const check = ()=>{
            if(auth?.accessToken){
                setLogin(true);
            }else{
                setLogin(false);
            }
        }
        check();

        return ()=>{
            setLogin(false);
        }

    },[auth]);

    return ( 
        <div className="w-screen left-0 absolute flex justify-between text-xs px-16 py-2 font-light text-secondary bg-secondary1">
            <span className='flex gap-2 items-center'>
                <img className='h-4' src={map} alt='loading'/>
                <a href='/contact'>street 368 Toul Kork Phnom Penh, Cambodia</a>
            </span>
            <div>
                {isLogin?
                <span>Welcome</span>
                :<span className='flex cursor-pointer'><p onClick={()=>navigate('/auth/signup')}>Sign up</p> / <p onClick={()=>navigate('/auth/login')}>Log in</p></span>}
            </div>
        </div>
     );
}

export default StoreLocation;