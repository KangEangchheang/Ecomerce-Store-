function Price({price,discount}) {
    return ( 
        <div className="flex gap-[10px] justify-center items-center mt-1">
            <div className="h-[18px] w-[40px] bg-secondary1 text-white text-[12px] rounded-[5px] flex justify-center items-center ">-{discount}$</div>
            <div className="price text-seconbg-secondary1 font-[600] text-[14px]">${price-(price*(discount/100)).toFixed(2)}</div>
            <div className="text-[#363738] font-[500] text-[14px] opacity-50 line-through">${price}</div>
        </div>
    );
}

export default Price;