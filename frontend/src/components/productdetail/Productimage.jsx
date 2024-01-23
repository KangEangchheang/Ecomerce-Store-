
function Productimage({prop}) {
    if(!Array.isArray(prop)){
        console.error('image prop must be array');
        return null;
    }
    return ( 
        <div className='flex-1 h-[28rem] overflow-clip flex gap-8 justify-between'>
            <div className='flex flex-col gap-4 overflow-y-auto scroll-m-4 pr-2'>
                {
                    prop.map((imgurl,i)=>(
                        <img className='border-2 border-solid object-center border-text1 w-24 rounded-lg py-1 h-24' key={i}  src={imgurl} alt={`Img ${i + 1}`}/>
                        
                    ))
                }
            </div>
            <div className='relative w-4/5 py-8 rounded-lg border-2 border-neutral-200 place-items-center flex'>
                <img className="cursor-zoom-in bg-white " src={prop[0]}/>
                <p className="absolute top-2 right-2 px-2 font-bold text-4xl border-2 border-solid border-text1 rounded-2xl opacity-80 cursor-pointer">♡</p>
            </div>
        </div>
     );
}

export default Productimage;