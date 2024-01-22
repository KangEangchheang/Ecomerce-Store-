import {useLocation,useNavigate} from 'react-router-dom'   
import SideMenu from '../components/productList/SideMenu';
import ListContent from '../components/productList/ListContent';
import { useState,useEffect, useRef } from 'react';
import  axios  from 'axios';
import NavigationTab from '../components/productList/NavigationTab';

function ProductList() {
    const Categories=['Keyboard','Mouse','Monitor','Gamepad'];
    const location = useLocation();
    const param = location.pathname.split('/');
    const [productList,setProductList] = useState([]);
    const [sort,setSort]=useState({
        price:'',
        discountOnly:false,
    })
    const handleSort = (s) =>{
        setSort({...sort,...s});
    }
    
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:5555/products/feature');
                setProductList(res.data);
                
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    },[])

    
    return ( 
        <>
            <div className="flex gap-6 px-16 my-8 w-full">
            {/* this the acutal content of this page separate by 2 container for menu and product list */}
                <div className='flex flex-col gap-6 w-[14rem]'>
                    {/* product mini navigation above the product image */}
                    <NavigationTab param={param}/>
                    <SideMenu Category={Categories} updateSort={handleSort}/>
                </div>
                <ListContent List={productList}/>
            </div>
        </>
        
     );
}
export default ProductList;