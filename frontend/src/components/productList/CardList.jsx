import {useNavigate} from 'react-router-dom';
import gold_star from '../../assets/icons/gold_star.svg';
import gray_star from '../../assets/icons/gray_star.svg';
import Price from '../small/price';
function CardList({prod}) {
    const navigate = useNavigate();
    const textLimit = 260;
    if (!prod) {
    return <div>no data</div>;
  }
    const handleClick = () =>{
        navigate(`/product/${prod.id}`);
        window.scrollTo(0, 0);
    }
    
    const star = [];
    for(let i=0;i<Math.round(prod.star_rating);i++){
        star.push(<img key={i} className='object-contain' src={gold_star}></img>)
    }
    for(let i=5;i>(Math.round(prod.star_rating));i--){
        star.push(<img key={i} className='object-contain' src={gray_star}></img>)
    }
    return ( 
        <div className="h-fit w-full py-6 pr-4 items-start flex gap-6 border-2 border-white hover:bg-secondary rounded-lg">
            <div onClick={()=>handleClick()} className='cursor-pointer h-40 relative'>
                <img className='h-full object-cover ' src={prod.img} alt="loading"/>
                {
                    prod.quantity < 1 ? (
                        <div className="w-[80px] h-[20px] flex items-center justify-center top-1 left-1 opacity-80 rounded-r-[12px] shadow-xl bg-restock absolute text-[12px] font-[Poppins] text-white font-[400]">out of stock</div>
                    ): 
                    (
                    prod.discount_id != null &&
                        <div className="w-[80px] h-[20px] flex items-center justify-center top-1 left-1 opacity-80 rounded-r-[12px] shadow-xl bg-discount absolute text-[12px] font-[Poppins] text-white font-[400]">{prod.discount.percent}%</div>
                    ) 
                }
            </div>
            <div className='gap-2 h-full flex flex-col flex-grow py-2'>
                <p onClick={()=>handleClick()} className='cursor-pointer w-fit font-semibold text-lg hover:underline'>{prod.name}</p>
                <div className='flex gap-1'>
                    <div className='h-3 w-fit flex gap-2'>
                        {star}
                    </div>
                    <p className='text-xs font-light'>({prod.star_rating})</p>
                </div>
                <div className='w-fit'><Price price={prod.price} discount={prod.discount_id !=null?prod.discount.percent:null}/></div>
                <p className='max-w-[65%] w-fit flex overflow-clip text-sm font-normal'>{prod.description.length>textLimit?prod.description.slice(0,textLimit)+'...':prod.description}</p>
            </div>
        </div>
     );
}

export default CardList;