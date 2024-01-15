import {Link,useLocation} from 'react-router-dom'   
import SideMenu from '../components/productList/SideMenu';
import ListContent from '../components/productList/ListContent';
import { useState } from 'react';
function ProductList() {
    const Categories=['Keyboard','Mouse','Monitor','Gamepad'];
    const location = useLocation();
    const param = location.pathname.split('/');
    const [sort,setSort]=useState({
        price:'',
        discountOnly:false,
    })
    const handleSort = (s) =>{
        setSort({...sort,...s});
    }
    return ( 
        <>
            {/* product mini navigation above the product image */}
            <div className='flex gap-1 items-baseline text-sm mt-8 px-16'>
                <Link to="/products">Products</Link>
                <span>{'>'}</span>
                {param[1]!='products' && param[1] != 'products/'?<div><Link to={"/"+param[1]}>{param[1]}</Link>
                <span>{'>'}</span></div>
                :<div></div>}
                {param.length === 3?(
                    <div>
                        <Link to={"/"+param[2]}>{param[2]}</Link>
                        <span>{'>'}</span>
                    </div>
                ):(<div></div>)}
            </div>

            <div className="flex gap-6 px-16 my-8 w-full">
            {/* this the acutal content of this page separate by 2 container for menu and product list */}
                <SideMenu Categories={Categories} updateSort={handleSort}/>
                <ListContent/>
            </div>
        </>
        
     );
}
export default ProductList;