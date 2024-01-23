import Price from '../small/Price';
import {useNavigate} from 'react-router-dom';

function SearchProductCard({product}) {
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate(`/product/${product.id}`);
        window.scrollTo(0, 0);
    }
    return ( 
        <div onClick={()=>handleClick()} className="flex w-full py-3 gap-4 hover:bg-secondary rounded-lg pr-4">
            <img src={product.img} className="object-cover w-20 h-10 cursor-pointer"/>
            <div className=" flex flex-col">
                <p className="font-medium text-sm w-fit hover:underline cursor-pointer">{product.name}</p>
                <div className='flex justify-start'>
                    <Price price={product.price} discount={product.discount_id != null?product.discount.percent:null}/>
                </div>
            </div>
        </div>
     );
}

export default SearchProductCard;