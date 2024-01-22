import { useState } from 'react';
import {useNavigate,useLocation} from 'react-router-dom';   
function UserNavigationTab({param}) {
    const nav = useNavigate();
    const Navigate=(r)=>{
        nav(r);
    }
    return ( 
        <div className='flex gap-1 items-baseline text-sm mt-8' >
            <span className='text-text1 cursor-pointer' onClick={()=>Navigate('/')}>Home</span>
            <span>{'>'}</span>
            <span className='text-text1'>Account</span>
            <span>{'>'}</span>
            <span className='text-secondary1 font-semibold'>{param}</span>
            
        </div>
     );
}

export default UserNavigationTab;