import {useLocation} from 'react-router-dom'   
import SideMenu from '../components/productList/SideMenu';
import ListContent from '../components/productList/ListContent';
import { useState,useEffect} from 'react';
import  axios  from 'axios';
import NavigationTab from '../components/productList/NavigationTab';
const BASE_URL = import.meta.env.VITE_BASE_URL;


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
                let res = await axios.get(`${BASE_URL}/products`);
                var products = res.data;
                res = await axios.get(`${BASE_URL}/discount/`);
                var discounts = res.data;
                //hard coded instead of using database relationship lmao
                for (let i = 0; i < products.length; i++) {
                    const product = products[i];

                    // Find the corresponding discount in the discounts array
                    const discount = discounts.find(d => d.id === product.discount_id);

                    // If a discount is found, add its data to the product
                    if (discount) {
                        products[i] = {
                            ...product,
                            discount: { ...discount }, // Using spread operator to add discount data
                        };
                    }
                }
                setProductList(products);
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