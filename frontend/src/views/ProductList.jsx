import {useLocation} from 'react-router-dom'   
import SideMenu from '../components/productList/SideMenu';
import ListContent from '../components/productList/ListContent';
import { useState,useEffect} from 'react';
import  axios  from 'axios';
import NavigationTab from '../components/productList/NavigationTab';
const BASE_URL = import.meta.env.VITE_BASE_URL;
const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;
const STATIC_URL = import.meta.env.VITE_STATIC_URL;


function ProductList() {
    const location = useLocation();
    const param = location.pathname.split('/');
    const [productList,setProductList] = useState([]);
    
    //sort
    const [sort,setSort]=useState({
        price:null,
        date:'newest',
        discountOnly:false,
    })
    const handleSort = (s) =>{
        setSort({...sort,...s});
    }
    const sortPrice = (list,type) =>{
        const sortType = ['lowhigh','highlow'];
        switch(type){
            case sortType[0]:
                list.sort((a,b)=>a.price-b.price);
                break;
            case sortType[1]:
                list.sort((a,b)=>b.price-a.price);
                break;
            default:
                console.log("unknown sort type");
                break;
        }
        return list;
    }

    const handleSortDate= async() =>{
        //query data by newest, since default is sort by default we dont need to add another condition
        if(sort.date === 'newest'){
            if(param.length<3){
                if(param[1] === 'products'){
                    return await axios.get(`${BASE_URL}/products/newestproduct`);
                }else{
                    return await axios.get(`${BASE_URL}/products/newestfeature`);
                }
            }else{
                return await axios.get(`${BASE_URL}/products/newestcategory/${param[2]}`);
            }
        }else{
            if(param.length<3){
                if(param[1] === 'products'){
                    return await axios.get(`${BASE_URL}/products`);
                }else{
                   return await axios.get(`${BASE_URL}/products/feature`);
                }
            }else{
                return await axios.get(`${BASE_URL}/products/category/${param[2]}`);
            }
        }
    }

    useEffect(()=>{
        const fetchData = async () => {
            try {
                //too many line of condition so i move it elsewhere
                var res = await handleSortDate();
                var products = res.data;
                
                res = await axios.get(`${BASE_URL}/discount/`);
                var discounts = res.data;
                res = await axios.get(`${IMAGE_URL}/products`);
                var image = res.data;
                //hard coded instead of using database relationship lmao
                for (let i = 0; i < products.length; i++) {
                    let product = products[i];

                    // Find the corresponding discount in the discounts array
                    const discount = discounts.find(d => d.id === product.discount_id);
                    const img = image.find(img=>img.product_id === product.id);
                    
                    if(img){
                        product = {
                            ...product,img:`${STATIC_URL+img.selected_image}`
                        }
                    }
                    // If a discount is found, add its data to the product
                    if (discount) {
                        products[i] = {
                            ...product,
                            discount: { ...discount } // Using spread operator to add discount data
                        };
                    }else{
                        products[i] = { ...product };
                    }
                    
                }
                //apply sort by price
                if(sort.price !=null && sort.price != 'norange'){
                    products = sortPrice(products,sort.price);
                }

                setProductList(products);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    },[location.pathname, sort]);
    
    return ( 
        <>
            <div className="flex gap-6 px-16 my-8 w-full">
            {/* this the acutal content of this page separate by 2 container for menu and product list */}
                <div className='flex flex-col gap-6 w-[14rem]'>
                    {/* product mini navigation above the product image */}
                    <NavigationTab param={param}/>
                    <SideMenu updateSort={handleSort}/>
                </div>
                {productList.length>0?<ListContent List={productList}/>:
                <div className='mt-16 w-full text-center'>This category has no product</div>}
            </div>
            
        </>
        
     );
}
export default ProductList;