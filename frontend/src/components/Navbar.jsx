import cart from '../assets/icons/cart.svg'
import user from '../assets/icons/user.svg';
import { useLocation,useNavigate,Link } from "react-router-dom"
import arrowdown from '../assets/icons/arrowdown.svg';
import phone from '../assets/icons/PhoneCall 1.svg';
import { useEffect, useState } from 'react';
import CategoryNav from './NavBar/CategoryNav';
import SupportNav from './NavBar/SupportNav';
import Search from './NavBar/Search';
export default function Navbar(){
    const nav = useNavigate();
    const [isMenuOpen,setMenuOpen] = useState([]);
    const MenuComponent = [<CategoryNav key={1}/>,
                            <SupportNav key={3}/>
                        ]
    const location = useLocation(); //get the param of current url locaiton
    useEffect(()=>{
        setMenuOpen([false,false]);
    },[location.pathname]);
    function routeUser(){
        nav('/user/1');
    }
    function routeCart(){
        nav('/user/1/cart');
    }

    function handleMenu(m){
        const array = [false,false]
        const toggleValue = !isMenuOpen[m];
        array[m] = toggleValue;
        setMenuOpen(array);
    }

    return(
        <nav className='flex flex-col relative'>
            {/* search and account cart */}
            <div className="flex justify-between items-center px-16 py-4">
                <h1 className="text-xl font-semibold font-serif">iFour</h1>
                <Search/>
                <div className='flex gap-6'>
                    <img className='cursor-pointer w-8' onClick={()=>routeCart()} src={cart}/>
                    <img className='cursor-pointer w-8' onClick={()=>routeUser()} src={user}/>
                </div>
            </div>
            {/* homepage menu */}
            <div className='px-16 text-sm flex justify-between text-primary1 font-medium border-y-2 border-neutral-200'>
                <div className='flex cursor-pointer'>
                    <Link className='py-4 px-8 hover:bg-neutral-200' to="/">Home</Link>
                    <Link className='py-4 px-8 hover:bg-neutral-200' to="/feature">Feature Products</Link>
                    
                    <div onClick={()=>handleMenu(0)} className={`flex items-center gap-2 hover:bg-neutral-200 
                    ${isMenuOpen[0]?'bg-neutral-200 border-x-2': ''}`}>
                        <p className='py-4 px-10'>Shop by Category</p>
                        <div className='h-full flex items-center'>
                            <img className='cursor-pointer pr-4 flex flex-grow rounded-full' src={arrowdown}/>
                        </div>
                    </div>
                    
                    
                    <div onClick={()=>handleMenu(1)} className={` flex items-center gap-2 hover:bg-neutral-200 
                    ${isMenuOpen[1]?'bg-neutral-200 border-x-2': ''}`}>
                        <p className='py-4 px-10'>Support</p>
                        <div className='h-full flex items-center'>
                            <img className='cursor-pointer pr-4 flex flex-grow rounded-full' src={arrowdown}/>
                        </div>
                    </div>

                </div>
                <div className='flex gap-2 items-center'>
                    <img className='h-6' src={phone} alt='loading'/>
                    <p>+855 15-987-990</p>
                </div>
            </div>
            <div className='absolute z-10 -bottom-1/2 w-full'>
                    {
                        isMenuOpen.map((e,i)=>(
                            e? MenuComponent[i]:null
                        ))
                    }
            </div>
        </nav>
    )
}