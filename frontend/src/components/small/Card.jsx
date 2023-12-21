import { useState } from "react";
import "./Card.css";
import Price from "./price";
function Card() {
  const [product,setProduct] = useState({});

  return (
    <div className="Card-wrapper h-[264px] w-[200px] flex">
      <div className="w-[200px] h-[200px] bg-[#F5F5F5] relative box-border group " id='cardContainer'>
        <div className="w-[80px] h-[20px] flex items-center justify-center top-1 left-1 opacity-80 rounded-r-[12px] shadow-xl bg-[#394673] absolute text-[12px] font-[Poppins] text-white font-[400]">
          Restocked   
          {/* ------------------- */}
        </div>
        <div className=" w-[150px] h-[200px] m-auto flex flex-col items-center justify-between ">
          <img
            className="w-11/12 mt-4"
            src="https://s3-alpha-sig.figma.com/img/5d5c/2e52/50752d55f8b60f2aa2923183dadbc135?Expires=1701648000&Signature=o~TeErHFtmTG0LyTzf6~go1k2NrhKtL6rsIXpF2Pu5CiwZinTewgxoJt3u6FUNkncQn4tnZdLZTLCuQiUHFbC8wdEWgyXgStbEtBVioPYbwi4Htw2mLBJtEMOOEZLCzmOrlPCyUowY5J1-e9VHep3gKuktHTkOdKdBPzzpO~ZeoAM65kQ6eZ1PVdsLY5OxsRHMzW49fU8NCjIEb2xzLyvPuNyUnlcvwhYLOh71s47VgWEshxf7kBvxLUrjdsVG36nq5~b31~afivzemgYo8pAFu76PMTlqWuynCGqNxQQ4D8-5m38CJSSDGgL6n~OnQqbA5QgHB2Azu68I7FEx~UxQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
          <div className="addCart w-[200px] h-[30px] bg-secondary1 rounded-[3px] flex gap-[10px] justify-center items-center invisible cursor-pointer group-hover:visible">
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
        <div className="w-full mt-2">
          <div className="txt text-center font-[500] text-[14px] leading-[15px]">HAVIT HV-G92 Gamepad</div>
          <Price price={300} discount={20}/>
        </div>
      </div>
    </div>
  );
}

export default Card;
