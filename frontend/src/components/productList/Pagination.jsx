function Pagination({total,itemPerPage,paginate,currentPage}) {
    const pageNumber = [];
    for(let i=1;i<=Math.ceil(total/itemPerPage);i++){
        pageNumber.push(i);
    }
    return ( 
        <div className="w-full flex justify-center mt-16 items-center">
            <ul className="flex w-fit gap-1 flex-wrap">
            {pageNumber.map((e,i)=>(
                <li className={`text-center w-8 py-1 cursor-pointer border-2  ${currentPage===e?'border-secondary1 text-white bg-secondary1':'border-text1 hover:bg-gray-200'}`} key={i}>
                    <button onClick={()=>paginate(e)}>{e}</button>
                </li>
            ))}
            </ul>
        </div>
     );
}

export default Pagination;