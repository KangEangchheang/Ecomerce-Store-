import Price from '../small/Price';
import {useNavigate} from 'react-router-dom';

function SearchProductCard({product}) {
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate(`/product/${product.id}`);
        window.scrollTo(0, 0);
    }
    return ( 
        <div onClick={()=>handleClick()} className="flex w-full gap-4 items-center hover:bg-gray-200 rounded-lg pr-4">
            <img src={product.img} className="object-contain w-20 py-1 h-20 cursor-pointer"/>
            <div className=" flex flex-col py-3">
                <p className="font-medium text-sm whitespace-nowrap w-[24rem] overflow-clip hover:underline cursor-pointer">{product.name}</p>
                <div className='flex justify-start'>
                    <Price price={product.price} discount={product.discount_id != null?product.discount.percent:null}/>
                </div>
            </div>
        </div>
     );
}

export default SearchProductCard;