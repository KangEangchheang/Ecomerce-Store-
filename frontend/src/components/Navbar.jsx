import cart from '../assets/icons/cart.svg'
import userpfp from '../assets/icons/user.svg';
import { useLocation,useNavigate,Link } from "react-router-dom"
import arrowdown from '../assets/icons/arrowdown.svg';
import phone from '../assets/icons/PhoneCall 1.svg';
import { useEffect, useState } from 'react';
import CategoryNav from './NavBar/CategoryNav';
import SupportNav from './NavBar/SupportNav';
import Search from './NavBar/Search';
import useAuth from '../hooks/useAuth';
import useInterceptor from '../hooks/useInterceptor';
export default function Navbar(){
    const [user,setUser] = useState([]);
    const [isLoading,setLoading]= useState(true);
    const nav = useNavigate();
    const [isMenuOpen,setMenuOpen] = useState([]);
    const MenuComponent = [<CategoryNav key={1}/>,
                            <SupportNav key={3}/>
                        ]
    const location = useLocation(); //get the param of current url locaiton
    const { auth }= useAuth();
    const interceptor = useInterceptor();

    useEffect(()=>{
        setMenuOpen([false,false]);
    },[location.pathname]);

    useEffect(()=>{
        const controller = new AbortController();
        //mounted mean that we can see the component in the website
        let isMounted = true;

        const getUser = async () =>{
            try {
                //signal is for cancelling requests for uncessary requests from the same route
                const res = await interceptor.get(`/user/id/${auth.user.id}`,{
                    signal: controller.signal
                })
                isMounted && setUser(res.data);
                setLoading(false);
            } catch (error) {
                //if its a cancel error dont be alarms, its becuz the request got cancelled but the first one did made it through
                if(error.message === "canceled"){
                    return;
                }
                // console.log(error?.message);
            }
        }
        getUser();

        return () => {
            setLoading(true);
            isMounted = false;
            controller.abort();
        }
    },[auth]);
    function handleMenu(m){
        const array = [false,false]
        const toggleValue = !isMenuOpen[m];
        array[m] = toggleValue;
        setMenuOpen(array);
    }

    return(
        // i use mt-8 because of storelocation is positioned absolute
        <nav className='flex flex-col relative mt-8'> 
            {/* search and account cart */}
            <div className="flex justify-between items-center gap-4 px-16 py-4">
                <h1 className="text-xl font-semibold font-serif">iFour</h1>
                <Search/>
                <div className='flex gap-6 items-center'>
                    <div onClick={()=>nav("/user/cart")}><img className='cursor-pointer w-8' src={cart}/></div>
                    {!isLoading && user?
                    <div className='flex gap-3 items-center' onClick={()=>nav("/user/")}>
                        <img className='cursor-pointer w-8' src={userpfp}/>
                        <span className='text-sm'>{user?.username}</span>
                    </div>
                    :<div onClick={()=>nav("/user/")}><img className='cursor-pointer w-8' src={userpfp}/></div>}
                </div>
            </div>
            {/* homepage menu */}
            <div className='px-16 text-sm flex justify-between text-primary1 font-medium border-2 border-neutral-200'>
                <div className='flex cursor-pointer text-center'>
                    <Link className='py-4 px-8 flex items-center hover:bg-neutral-200' to="/">Home</Link>
                    <Link className='py-4 px-8 flex items-center hover:bg-neutral-200' to="/feature">Feature Products</Link>
                    
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
            <div className='relative z-10 w-full shadow-md'>
                    {
                        isMenuOpen.map((e,i)=>(
                            e? MenuComponent[i]:null
                        ))
                    }
            </div>
        </nav>
    )
}