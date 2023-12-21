import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import Productimage from '../components/productdetail/productimage';
import Price from '../components/small/price';
import AddCard from '../components/small/addCard';
import Card from '../components/small/Card';
import Description from '../components/productdetail/description';
import Review from '../components/productdetail/Review';
import gold_star from '../assets/icons/gold_star.svg';
import gray_star from '../assets/icons/gray_star.svg';

function ProductDetail() {
    const [isReview,setIsReview] = useState(false);
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
        return setProduct({
            category:'Gamepads',
            name:'Xbox Elite Wireless Controller Series 2',
            price:1050,
            discount:26,
            color:['black','white','orange'],
            star_rating:4.1,
            qty:99990,
            image:[
                'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2XP73?ver=7371',
                'https://m.media-amazon.com/images/I/61H321AbQuL.jpg',
                'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6537/6537448_sd.jpg',
                'https://assets.xboxservices.com/assets/e6/65/e6655ce8-3974-4849-8a7a-320941a9d976.jpg?n=320089_Custom-Hero-1400_1920x1237.jpg',
                'https://xxboxnews.blob.core.windows.net/prod/sites/2/2022/09/hero_image_price-3865d1e8eb5920e163c5.jpg',
                'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2XP73?ver=7371',
                'https://m.media-amazon.com/images/I/61H321AbQuL.jpg',
                
            ],
            small_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat accusamus, quis iure modi molestiae, cupiditate dolores laboriosam perspiciatis voluptates ab possimus facilis ut rerum, eligendi pariatur consequuntur minus distinctio incidunt! Ea cum laboriosam dolor nulla velit tempora autem, doloremque, incidunt vitae quae, neque quod mollitia recusandae deserunt dolore? Eius reiciendis facere iste temporibus fuga aliquam, totam molestiae asperiores aliquid veniam.",
        });
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
                <Link to="/categories/Gamepads">{product.category}</Link>
                <span>{'>'}</span>
                <p className='font-semibold'>{product.name}</p>
            </div>

            {/* product image and the detail */}
            <div className='flex gap-16'>
                <Productimage prop={product.image}/>
                <div className='w-2/4 flex flex-col gap-4'>
                    <h1 className='w-fit font-medium text-xl'>{product.name}</h1>
                    {/* star rating */}
                    <div className='flex gap-2 center'>
                        {star}
                        <p className='text-sm font-light'>({product.star_rating})</p>
                    </div>
                    <div className='xl:scale-150 xl:left-8 scale-125 left-4 self-start relative '>
                        <Price price={product.price} discount={product.discount} />
                    </div>
                    <div className='font-light text-sm max-w-[70ch] flex flex-wrap'>{product.small_desc}<hr className='mt-4 border-px border-secondary1 opacity-50'/></div>
                    {/* only render this part when there is data in color */}
                    {product.color&&(
                        <div className='flex place-items-center'>
                            <p className='mr-6'>Colours:</p>
                            {product.color.map((col,i)=>(
                                <div className='w-4 h-4 mx-1 border-2 border-solid border-slate-900 rounded-full cursor-pointer opacity-80' key={i}
                                style={{backgroundColor:col}}></div>
                            ))}
                        </div>
                    )}
                    {/* logic to change to out of stock if product quantity is smaller than 1 */}
                    {(product.qty>0)&& <div className='flex gap-4 items-center'>
                        <AddCard/>
                        <h1 className='font-normal text-sm'>( {product.qty} in stock )</h1>
                    </div>}
                    {(product.qty===0)&&<h1 className='text-red-500 text-lg font-semibold'>Out of Stock</h1>}

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
                    <button className='py-2 px-8 text-sm' onClick={toggleOff}>Description</button>
                    <button className='py-2 px-8 text-sm border-solid border-l-2 border-secondary1' onClick={toggleOn}>Reviews</button>
                </div>
                {/* logic for component swapping */}
                {!isReview && <Description/>}
                {isReview && <Review review={{
                    star_rating:product.star_rating,
                }}/>}
            </div>
        </div>
     );
}

export default ProductDetail;