import { useState } from "react";

function Productimage({prop}) {
    const [image,setImage] = useState(0) 
    if(!Array.isArray(prop)){
        console.error('image prop must be array');
        return null;
    }
    const handleImage = (i)=>{
        setImage(i);
    }
    return ( 
        <div className='flex-1 h-[28rem] overflow-clip flex gap-8 justify-between'>
            <div className='flex flex-col gap-4 overflow-y-auto scroll-m-4 pr-2'>
                {
                    prop.map((imgurl,i)=>(
                        <img onClick={()=>handleImage(i)} className='cursor-pointer overflow-clip border-2 border-solid object-center border-text1 w-24 rounded-lg py-1 h-24' key={i}  src={imgurl} alt={`Img ${i + 1}`}/>
                    ))
                }
            </div>
            <div className='relative w-4/5 py-8 rounded-lg border-2 overflow-clip border-neutral-200 place-items-center flex'>
                <img className="cursor-zoom-in bg-white object-contain w-full h-full py-2" src={prop[image]}/>
                <p className="absolute top-2 right-2 px-2 font-bold text-4xl border-2 border-solid border-text1 rounded-2xl opacity-80 cursor-pointer">♡</p>
            </div>
        </div>
     );
}

export default Productimage;