import { useEffect, useState } from "react";
import {useLocation,useNavigate} from 'react-router-dom'
import UserNavigationTab from "../components/user/UserNavigationTab";
import UserMenu from "../components/user/UserMenu";
import Dashboard from '../components/user/Dashboard';
import Cart from '../components/user/Cart';
import Setting from '../components/user/Setting';
import OrderHistory from '../components/user/OrderHistory'
import useAuth from "../hooks/useAuth";
import useInterceptor from "../hooks/useInterceptor";
function User() {
    const location = useLocation();
    const nav = useNavigate();
    const [ActiveNav,setNav]= useState('Dashboard');
    const [isLoading,setLoading] = useState(true);
    const { auth } = useAuth();
    const interceptor = useInterceptor();
    //user state
    const [user,setUser] = useState({});

    useEffect(() =>{
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
                console.log(error?.message);
            }
        }
        getUser();

        return () => {
            isMounted = false;
            controller.abort();
        }
    },[]);

    useEffect(()=>{
        const param = location.pathname.split('/');
        if(param[2] === 'cart'){
            setNav('Cart');
            nav('/user/')
        }
        
    },[location.pathname]);


    function getDate() {
        const currentDate = new Date();
        // Use toLocaleDateString with options to get day, month name, and two-digit year
        const options = { day: '2-digit', month: 'long', year: '2-digit' };
        const formattedDate = currentDate.toLocaleDateString('en-GB', options);

        // Remove commas and spaces from the formatted date
        const cleanedDate = formattedDate.replace(/[/\\]+/g, '');

        return cleanedDate;
    }
    const RecentOrderHistory = [
        {
        orderId:'JK12313901',
        createAt:getDate(),
        totalPrice:100,
        status:'Processing'
        },
        {
        orderId:'JK12300001',
        createAt:getDate(),
        totalPrice:800,
        status:'On The Way'
        },
        {
        orderId:'JK1200000',
        createAt:getDate(),
        totalPrice:200,
        status:'Completed'
        },
        {
        orderId:'JK1300001',
        createAt:getDate(),
        totalPrice:20,
        status:'Completed'
        },
        {
        orderId:'JK3100001',
        createAt:getDate(),
        totalPrice:1000,
        status:'Completed'
        }
    ]
    const menuComponent = {
        Dashboard:<Dashboard user={user} order={RecentOrderHistory}/>,
        OrderHistory:<OrderHistory/>,
        Cart:<Cart/>,
        Setting:<Setting/>
    };
    function getMenu(m){
        setNav(m);
    }
    return ( 
        <div className="flex flex-col gap-2 py-4 px-16 pb-16">
            <UserNavigationTab param={ActiveNav}/>
            {/* container of menu and it's content */}
            <div className="flex gap-4 justify-between">
                <UserMenu active={ActiveNav} updateMenu={getMenu} uid={auth.user?.id}/>
                {
                isLoading? 
                    <div>loading...</div>
                    :menuComponent[ActiveNav]
                }
            </div>
        </div>
     );
}

export default User;