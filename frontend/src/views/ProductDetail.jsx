import {Link,useLocation} from 'react-router-dom'
import { useEffect, useState } from 'react';
import Productimage from '../components/productdetail/productimage';
import Price from '../components/small/price';
import AddCard from '../components/small/addCard';
import Card from '../components/small/Card';
import Description from '../components/productdetail/description';
import Review from '../components/productdetail/Review';
import gold_star from '../assets/icons/gold_star.svg';
import gray_star from '../assets/icons/gray_star.svg';
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;
const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;

function ProductDetail() {
    const param = useLocation().pathname.split('/');
    const [isReview,setIsReview] = useState(false);
    const [category,setCategory] = useState({name:''});
    const [image,setImage] = useState([]);
    const [product,setProduct] = useState({
        image:[]
    })
    function toggleOn(){
        setIsReview(true);
    }
    function toggleOff(){
        setIsReview(false);
    }
    useEffect(()=>{
        const fetchData = async () =>{
           try {
                let res = await axios.get(`${BASE_URL}/products/${param[2]}`);
                var product = res.data;
                product = product[0];
                res = await axios.get(`${BASE_URL}/discount/${product.discount_id}`);
                var discounts = res.data;
                discounts = discounts[0];
                if(discounts != null || discounts != undefined){
                    product= {...product,discount: { ...discounts }}
                }
                
                setProduct(product);
                res = await axios.get(`${BASE_URL}/category/${product.category_id}`);
                const cat = res.data;
                setCategory(cat[0]);

                res = await axios.get(`${IMAGE_URL}/${product.id}`)
                setImage(res.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    },[])
    const star = [];
    for(let i=0;i<Math.round(product.star_rating);i++){
        star.push(<img key={i} className='h-4' src={gold_star}></img>)
    }
    for(let i=5;i>(Math.round(product.star_rating));i--){
        star.push(<img key={i} className='h-4' src={gray_star}></img>)
    }

    return ( 
        <div className="px-16 flex-wrap">
            {/* product mini navigation above the product image */}
            <div className='flex gap-1 items-baseline text-sm my-8'>
                <Link to="/products">Products</Link>
                <span>{'>'}</span>
                <Link to={`/products/${(category.name).toLowerCase()}`}>{category.name}</Link>
                <span>{'>'}</span>
                <p className='font-semibold'>{product.name}</p>
            </div>

            {/* product image and the detail */}
            <div className='flex gap-16'>
                <Productimage prop={image}/>
                <div className='w-2/4 flex flex-col gap-4'>
                    <h1 className='w-fit font-medium text-xl'>{product.name}</h1>
                    {/* star rating */}
                    <div className='flex gap-2 center'>
                        {star}
                        <p className='text-sm font-light'>({product.star_rating})</p>
                    </div>
                    <div className='xl:scale-150 xl:left-8 scale-125 left-4 self-start relative '>
                        <Price price={product.price} discount={product.discount_id != null?product.discount.percent:null} />
                    </div>
                    <div className='font-light text-sm max-w-[70ch] flex flex-wrap'>{product.description}<hr className='mt-4 border-px border-secondary1 opacity-50'/></div>
                    
                    {/* logic to change to out of stock if product quantity is smaller than 1 */}
                    {(product.quantity>0)&& <div className='flex gap-4 items-center'>
                        <AddCard/>
                        <h1 className='font-normal text-sm'>( {product.quantity} in stock )</h1>
                    </div>}
                    {(product.quantity===0)&&<h1 className='text-red-500 text-lg font-semibold'>Out of Stock</h1>}

                </div>
            </div>

            {/* related product */}
            <div className='my-12'>  
                <h1 className='font-semibold text-lg mb-4'>Related products</h1>
                <div className='flex gap-4 justify-between'>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
            {/* description and review */}
            <div className='flex flex-col w-full items-center'>
                <div className='grid grid-cols-2 border-2 border-solid border-secondary1 rounded-sm'>
                    <button className='py-2 px-8 text-sm active:bg-slate-300' onClick={toggleOff} style={{backgroundColor:isReview?'transparent':'#F5F5F5'}} >Description</button>
                    <button className='py-2 px-8 text-sm border-solid border-l-2 border-secondary1 active:bg-slate-300' onClick={toggleOn} style={{backgroundColor:isReview?'#F5F5F5':'transparent'}} >Reviews</button>
                </div>
                {/* logic for component swapping */}
                {!isReview && <Description desc={product.description}/>}
                {isReview && <Review review={{
                    star_rating:product.star_rating,
                }}/>}
            </div>
        </div>
     );
}

export default ProductDetail;