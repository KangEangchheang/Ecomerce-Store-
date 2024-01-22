import { useEffect, useState } from "react";
import {useLocation,useNavigate} from 'react-router-dom'
import UserNavigationTab from "../components/user/UserNavigationTab";
import UserMenu from "../components/user/UserMenu";
import Dashboard from '../components/user/Dashboard';
import Cart from '../components/user/Cart';
import Setting from '../components/user/Setting';
import OrderHistory from '../components/user/OrderHistory'
function User() {
    const location = useLocation();
    const nav = useNavigate();
    const [ActiveNav,setNav]= useState('Dashboard');
    useEffect(()=>{
        const param = location.pathname.split('/');
        if(param[3] === 'cart'){
            setNav('Cart');
            nav('/user/1')
        }
    },[location.pathname])
    const user = {
        role:'customer',
        username:'Tom Cruise',
        email:'TCruise@gmail.com',
        profile_image:'https://depor.com/resizer/tilTJ9AnxA_aqg-_fXPvrLYiL30=/580x330/smart/filters:format(jpeg):quality(90)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/CWKGFLSLYBFKXI2QNCAECPZN2I.jpg',
        phonenumber:'+855 15989871'
    }
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
        <div className="flex flex-col gap-2 py-4 px-16">
            <UserNavigationTab param={ActiveNav}/>
            {/* container of menu and it's content */}
            <div className="flex gap-4 justify-between">
                <UserMenu active={ActiveNav} updateMenu={getMenu}/>
                {menuComponent[ActiveNav]}
            </div>
        </div>
     );
}

export default User;