import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const BASE_URL = import.meta.env.VITE_BASE_URL;

function UserMenu({updateMenu,active,uid}) {
    const colorState = ['#7D8184','#1E293B'];
    const nav = useNavigate();
    const { setAuth } = useAuth();
    const [error,setError] = useState();
    
    const handleLogout = async()=>{
        const res = await axios.get(`${BASE_URL}/logout/${uid}`,{
            withCredentials:true
        });
        if(!res){
            return setError('error logging out');
        }
        setAuth({});
        nav('/user');
    }

    return ( 
        <div className="pt-8 mt-8 w-72 border-2 h-fit border-secondary shadow-md rounded-lg text-secondary1">
            <h1 className='mb-8 px-8 text-2xl font-semibold'>Account</h1>
            <div className='flex flex-col text-sm'>
                
                <div onClick={()=>updateMenu('Dashboard')} className='hover:bg-secondary items-center flex gap-4 py-6 pl-8 w-full cursor-pointer'>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group">
                        <path id="Vector" d="M18 18H10V12H18V18ZM8 18H0V8H8V18ZM18 10H10V0H18V10ZM8 6H0V0H8V6Z" 
                        fill={active==='Dashboard'? colorState[1]:colorState[0]}/>
                        </g>
                    </svg>
                    <span className={'tracking-wide' && active==='Dashboard'? 'text-secondary1 font-medium':`text-text1`}>Dashboard</span>
                </div>
                
                <div onClick={()=>updateMenu('OrderHistory')} className='hover:bg-secondary items-center flex gap-4 py-6 pl-8 w-full  cursor-pointer'>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group">
                        <path id="Vector" d="M0 16V9.00004H7L3.783 12.22C4.33247 12.7819 4.98837 13.2287 5.71241 13.5343C6.43644 13.8399 7.21411 13.9983 8 14C9.23925 13.9982 10.4475 13.6127 11.4589 12.8965C12.4702 12.1802 13.2349 11.1684 13.648 10H13.666C13.78 9.67504 13.867 9.34004 13.925 9.00004H15.937C15.6934 10.9333 14.7527 12.7111 13.2913 14C11.83 15.2888 9.9485 16 8 16H7.99C6.93982 16.0032 5.89944 15.798 4.9291 15.3963C3.95876 14.9946 3.07772 14.4045 2.337 13.66L0 16ZM2.074 7.00004H0.0619998C0.305476 5.06751 1.24564 3.29019 2.70616 2.00145C4.16667 0.712703 6.04719 0.00107558 7.995 3.98088e-05H8C9.05036 -0.00328613 10.0909 0.201826 11.0615 0.603496C12.032 1.00517 12.9132 1.59541 13.654 2.34004L16 3.98088e-05V7.00004H9L12.222 3.78004C11.672 3.21752 11.0153 2.77035 10.2903 2.46471C9.56537 2.15907 8.78674 2.0011 8 2.00004C6.76074 2.00187 5.55246 2.38738 4.54114 3.10361C3.52982 3.81985 2.76508 4.83166 2.352 6.00004H2.334C2.219 6.32504 2.132 6.66004 2.075 7.00004H2.074Z" 
                        fill={active==='OrderHistory'? colorState[1]:colorState[0]}/>
                        </g>
                    </svg>
                    <span className={'tracking-wide'&& active==='OrderHistory'? `font-medium text-secondary1`:`text-text1`}>Order History</span>
                </div>
                
                <div onClick={()=>updateMenu('Cart')} className='hover:bg-secondary items-center flex gap-4 py-6 pl-8 w-full  cursor-pointer'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 10H5L3 21H21L19 10H16M8 10V7C8 4.79086 9.79086 3 12 3V3C14.2091 3 16 4.79086 16 7V10M8 10H16M8 10V13M16 10V13" stroke={active==='Cart'? colorState[1]:colorState[0]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className={'tracking-wide'&& active==='Cart'? `font-medium text-secondary1`:`text-text1`}>Shopping Cart</span>
                </div>
                
                <div onClick={()=>updateMenu('Setting')} className='hover:bg-secondary items-center flex gap-4 py-6 pl-8 w-full  cursor-pointer'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group">
                        <path id="Vector" d="M11.82 20H8.18001C7.95194 20 7.73071 19.9221 7.55301 19.7792C7.37531 19.6362 7.25181 19.4368 7.20301 19.214L6.79601 17.33C6.25306 17.0921 5.73824 16.7946 5.26101 16.443L3.42401 17.028C3.20657 17.0973 2.97196 17.0902 2.75913 17.0078C2.5463 16.9254 2.36806 16.7727 2.25401 16.575L0.430006 13.424C0.317152 13.2261 0.274789 12.9958 0.309849 12.7708C0.344909 12.5457 0.455315 12.3392 0.623006 12.185L2.04801 10.885C1.9832 10.2961 1.9832 9.70189 2.04801 9.113L0.623006 7.816C0.455078 7.66177 0.344521 7.45507 0.309455 7.22978C0.27439 7.00449 0.316896 6.77397 0.430006 6.576L2.25001 3.423C2.36406 3.22532 2.5423 3.07259 2.75513 2.99019C2.96796 2.90778 3.20257 2.90066 3.42001 2.97L5.25701 3.555C5.50101 
                        3.375 5.75501 3.207 6.01801 3.055C6.27001 2.913 6.53001 2.784 6.79601 2.669L7.20401 0.787C7.25258 0.564198 7.37584 0.364688 7.55335 0.221549C7.73087 0.0784098 7.95197 0.000239966 8.18001 0H11.82C12.048 0.000239966 12.2691 0.0784098 12.4467 0.221549C12.6242 0.364688 12.7474 0.564198 12.796 0.787L13.208 2.67C13.7506 2.9079 14.2651 3.20539 14.742 3.557L16.58 2.972C16.7973 2.90292 17.0317 2.91017 17.2443 2.99256C17.4569 3.07495 17.635 3.22753 17.749 3.425L19.569 6.578C19.802 6.985 19.721 7.5 19.376 7.817L17.951 9.117C18.0158 9.70589 18.0158 10.3001 17.951 10.889L19.376 12.189C19.721 12.507 19.801 13.021 19.569 13.428L17.749 16.581C17.635 16.7785 17.4569 16.931 17.2443 17.0134C17.0317 17.0958 16.7973 17.1031 16.58 
                        17.034L14.742 16.449C14.2652 16.8004 13.7507 17.0976 13.208 17.335L12.796 19.214C12.7472 19.4366 12.6239 19.6359 12.4464 19.7788C12.2689 19.9218 12.0479 19.9998 11.82 20ZM5.62001 14.229L6.44001 14.829C6.62501 14.965 6.81801 15.09 7.01701 15.204C7.20501 15.313 7.39801 15.411 7.59601 15.5L8.52901 15.909L8.98601 18H11.016L11.473 15.908L12.406 15.499C12.813 15.319 13.2 15.096 13.559 14.833L14.38 14.233L16.421 14.883L17.436 13.125L15.853 11.682L15.965 10.67C16.015 10.227 16.015 9.78 15.965 9.338L15.853 8.326L17.437 6.88L16.421 5.121L14.38 5.771L13.559 5.171C13.1998 4.90669 12.8133 4.68173 12.406 4.5L11.473 4.091L11.016 2H8.98601L8.52701 4.092L7.59601 4.5C7.18819 4.67861 6.80149 4.90198 6.44301 5.166L5.62201 5.766L3.58201 
                        5.116L2.56501 6.88L4.14801 8.321L4.03601 9.334C3.98601 9.777 3.98601 10.224 4.03601 10.666L4.14801 11.678L2.56501 13.121L3.58001 14.879L5.62001 14.229ZM9.99601 14C8.93514 14 7.91772 13.5786 7.16758 12.8284C6.41743 12.0783 5.99601 11.0609 5.99601 10C5.99601 8.93913 6.41743 7.92172 7.16758 7.17157C7.91772 6.42143 8.93514 6 9.99601 6C11.0569 6 12.0743 6.42143 12.8244 7.17157C13.5746 7.92172 13.996 8.93913 13.996 10C13.996 11.0609 13.5746 12.0783 12.8244 12.8284C12.0743 13.5786 11.0569 14 9.99601 14ZM9.99601 8C9.60436 8.0004 9.22146 8.11577 8.89479 8.33181C8.56812 8.54785 8.31207 8.85505 8.15841 9.21528C8.00474 9.57552 7.96023 9.97295 8.03038 10.3583C8.10054 10.7436 8.28227 11.0998 8.55305 11.3828C8.82382 11.6657 9.17172 
                        11.863 9.55357 11.95C9.93542 12.037 10.3344 12.01 10.7011 11.8724C11.0677 11.7347 11.3859 11.4924 11.6161 11.1756C11.8463 10.8587 11.9784 10.4812 11.996 10.09V10.49V10C11.996 9.46957 11.7853 8.96086 11.4102 8.58579C11.0351 8.21071 10.5264 8 9.99601 8Z" 
                        fill={active==='Setting'? colorState[1]:colorState[0]}/>
                        </g>
                    </svg>

                    <span className={'tracking-wide'&& active==='Setting'? `font-medium text-secondary1`:`text-text1`}>Setting</span>
                </div>
                
                <div className='flex gap-4 py-6 pl-8 w-full  cursor-pointer hover:bg-secondary'>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group">
                        <path className='hover:fill-secondary1' id="Vector" d="M16 18H7C6.46957 18 5.96086 17.7893 5.58579 17.4142C5.21071 17.0391 5 16.5304 5 16V12H7V16H16V2H7V6H5V2C5 1.46957 5.21071 0.960859 5.58579 0.585786C5.96086 0.210714 6.46957 0 7 0H16C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18ZM9 13V10H0V8H9V5L14 9L9 13Z" 
                        fill={colorState[0]}/>
                        </g>
                    </svg>
                    <span onClick={()=>handleLogout()} className='relative tracking-wide text-text1'>Logout {error?<p className='absolute right-0 text-sm text-red-500'>{error}</p>:null}</span>
                </div>
            </div>
        </div>
     );
}

export default UserMenu;