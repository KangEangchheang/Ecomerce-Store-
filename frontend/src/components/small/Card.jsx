/* eslint-disable react/prop-types */
import "./Card.css";
import Price from "./price";
import { useNavigate} from 'react-router-dom'

function Card({prod}) {
  const navigate = useNavigate();
  if (!prod) {
    return <div>no data</div>;
  }
  const handleClick = () =>{

    navigate(`/product/${prod.id}`);

  }
  return (
      <div className="w-[13rem] pb-4">
        <div className= "h-[200px] bg-white relative box-border group" id='cardContainer'>
          {
              prod.quantity < 1 ? (
                <div className="w-[80px] h-[20px] flex items-center justify-center z-10 top-1 left-1 opacity-80 rounded-r-[12px] shadow-xl bg-restock absolute text-[12px] font-[Poppins] text-white font-[400]">out of stock</div>
              ): 
              (
              prod.discount_id != null &&
              <div className="w-[80px] h-[20px] flex items-center justify-center z-10 top-1 left-1 opacity-80 rounded-r-[12px] shadow-xl bg-discount absolute text-[12px] font-[Poppins] text-white font-[400]">{prod.discount.percent}%</div>
              ) 
            }
          
          <div className="w-full h-full flex items-center justify-center relative overflow-clip">
            <img
              className="object-cover cursor-pointer bg-white"
              src={prod.img}
              alt=""
              onClick={()=>handleClick()}
            />
            <div className="addCart absolute bottom-0 w-full h-[30px] bg-secondary1 rounded-[3px] flex gap-[10px] justify-center items-center invisible cursor-pointer group-hover:visible">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
              >
                <path
                  d="M12.0793 7.50879H5.20872L5.36212 8.25879H11.6532C12.0141 8.25879 12.2817 8.59397 12.2017 8.94595L12.0724 9.51492C12.5104 9.72757 12.8125 10.1766 12.8125 10.6963C12.8125 11.4276 12.2144 12.0192 11.4807 12.0086C10.7817 11.9986 10.2069 11.4314 10.188 10.7325C10.1777 10.3508 10.3306 10.0048 10.5818 9.75876H5.66819C5.9114 9.99703 6.0625 10.3289 6.0625 10.6963C6.0625 11.4419 5.44075 12.0423 4.68742 12.0073C4.01852 11.9763 3.47451 11.4358 3.43935 10.7671C3.41221 10.2507 3.68394 9.79549 4.0968 9.55805L2.45038 1.50879H0.8125C0.501836 1.50879 0.25 1.25695 0.25 0.946289V0.571289C0.25 0.260625 0.501836 0.00878906 0.8125 0.00878906H3.21552C3.48273 0.00878906 3.71305 0.196781 3.76661 0.458555L3.98144 1.50879H13.1873C13.5482 1.50879 13.8158 1.84397 13.7358 2.19595L12.6278 7.07095C12.5696 7.32705 12.3419 7.50879 12.0793 7.50879ZM9.8125 3.94629H8.6875V3.00879C8.6875 2.80167 8.51962 2.63379 8.3125 2.63379H7.9375C7.73038 2.63379 7.5625 2.80167 7.5625 3.00879V3.94629H6.4375C6.23038 3.94629 6.0625 4.11417 6.0625 4.32129V4.69629C6.0625 4.90341 6.23038 5.07129 6.4375 5.07129H7.5625V6.00879C7.5625 6.21591 7.73038 6.38379 7.9375 6.38379H8.3125C8.51962 6.38379 8.6875 6.21591 8.6875 6.00879V5.07129H9.8125C10.0196 5.07129 10.1875 4.90341 10.1875 4.69629V4.32129C10.1875 4.11417 10.0196 3.94629 9.8125 3.94629Z"
                  fill="white"
                />
              </svg>
              <span className="text-secondary text-[12px] font-[500] " id='addCart'>Add To Cart</span>
            </div>
          </div>
        </div>
        <div className="mt-2 cursor-pointer flex flex-col grow justify-between" onClick={handleClick}>
          <div className="txt text-center font-[500] text-[14px] leading-[15px] hover:underline">{prod.name}</div>
          <Price price={prod.price} discount={prod.discount_id !=null?prod.discount.percent:null}/>
        </div>
      </div>
  );
}

export default Card;
