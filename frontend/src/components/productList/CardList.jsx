import {useNavigate} from 'react-router-dom';
import gold_star from '../../assets/icons/gold_star.svg';
import gray_star from '../../assets/icons/gray_star.svg';
import Price from '../small/Price';
import './CardList.css';
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
        <div className="bigaddcart h-fit w-full py-6 pr-4  items-start flex gap-6 hover:bg-secondary rounded-lg relative">
            <div onClick={()=>handleClick()} className='cursor-pointer h-40 relative w-1/4 min-w-[8rem] rounded-md bg-white flex justify-center overflow-clip'>
                <img className='h-full object-cover bg-white' src={prod.img} alt="loading"/>
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
            <div className='gap-2 h-full flex flex-col py-2 max-w-[42rem]'>
                <p onClick={()=>handleClick()} className='cursor-pointer w-fit break-normal font-semibold text-lg hover:underline'>{prod.name}</p>
                <div className='flex gap-1'>
                    <div className='h-3 w-fit flex gap-2'>
                        {star}
                    </div>
                    <p className='text-xs font-light'>({prod.star_rating})</p>
                </div>
                <div className='w-fit'><Price price={prod.price} discount={prod.discount_id !=null?prod.discount.percent:null}/></div>
                <p className='max-w-[80ch] max-h-[4rem] w-fit flex overflow-clip text-sm font-normal'>{prod.description.length>textLimit?prod.description.slice(0,textLimit)+'...':prod.description}</p>
            </div>
            {/* add to cart */}
            <div className='addcart flex items-center gap-2 absolute opacity-0 shadow-md shadow-secondary1 rounded-md cursor-pointer top-0 right-0 whitespace-nowrap py-2 px-4 bg-secondary1 text-white'>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                ><path
                d="M12.0793 7.50879H5.20872L5.36212 8.25879H11.6532C12.0141 8.25879 12.2817 8.59397 12.2017 8.94595L12.0724 9.51492C12.5104 9.72757 12.8125 10.1766 12.8125 10.6963C12.8125 11.4276 12.2144 12.0192 11.4807 12.0086C10.7817 11.9986 10.2069 11.4314 10.188 10.7325C10.1777 10.3508 10.3306 10.0048 10.5818 9.75876H5.66819C5.9114 9.99703 6.0625 10.3289 6.0625 10.6963C6.0625 11.4419 5.44075 12.0423 4.68742 12.0073C4.01852 11.9763 3.47451 11.4358 3.43935 10.7671C3.41221 10.2507 3.68394 9.79549 4.0968 9.55805L2.45038 1.50879H0.8125C0.501836 1.50879 0.25 1.25695 0.25 0.946289V0.571289C0.25 0.260625 0.501836 0.00878906 0.8125 0.00878906H3.21552C3.48273 0.00878906 3.71305 0.196781 3.76661 0.458555L3.98144 1.50879H13.1873C13.5482 1.50879 13.8158 1.84397 13.7358 2.19595L12.6278 7.07095C12.5696 7.32705 12.3419 7.50879 12.0793 7.50879ZM9.8125 3.94629H8.6875V3.00879C8.6875 2.80167 8.51962 2.63379 8.3125 2.63379H7.9375C7.73038 2.63379 7.5625 2.80167 7.5625 3.00879V3.94629H6.4375C6.23038 3.94629 6.0625 4.11417 6.0625 4.32129V4.69629C6.0625 4.90341 6.23038 5.07129 6.4375 5.07129H7.5625V6.00879C7.5625 6.21591 7.73038 6.38379 7.9375 6.38379H8.3125C8.51962 6.38379 8.6875 6.21591 8.6875 6.00879V5.07129H9.8125C10.0196 5.07129 10.1875 4.90341 10.1875 4.69629V4.32129C10.1875 4.11417 10.0196 3.94629 9.8125 3.94629Z"
                fill="white"
                /></svg>
                <p className='text-sm font-semibold'>Add</p>
            </div>
        </div>
     );
}

export default CardList;