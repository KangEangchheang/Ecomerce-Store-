import {useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom"


function SideMenu({Category,updateSort}) {
    const [sortPrice,setSortPrice] = useState('');
    const [sortDate,setSortDate] = useState('');
    // const [Categories,setCategory] = useState(Category);
    const location = useLocation();
    const nav = useNavigate();
    const [URL,setURL] = useState(location.pathname.split('/'));
    const [isDiscountOnly,setDiscountOnly] = useState(false);
    useEffect(()=>{
        
    },[location.pathname]);

    function handleURL(cat){
        if(cat === 'products'){
            const array = ["",'products'];
            setURL(array);
            nav('/products');
            return;
        }

        cat = cat.toLowerCase();
        const array = ["",cat];
        setURL(array);
        nav(`/products/${cat}`);
    }
    const toggleDiscount = () =>{
        if(!isDiscountOnly){
            updateSort({discountOnly:true})  
            setDiscountOnly(true);
        }else{ 
            updateSort({discountOnly:false})
            setDiscountOnly(false);
        }
    }
    //!********** this part is for select sorting function

    const handlePrice = (event)=>{
        //need to set condition that if its the same value no need to rerender, api call waste
        if(sortPrice !== event.target.value){
            updateSort({price:event.target.value});
            setSortPrice(event.target.value);
        }
    }
    const handleDate = (event)=>{
        //need to set condition that if its the same value no need to rerender, api call waste
        if(sortDate !== event.target.value){
            updateSort({date:event.target.value});
            setSortDate(event.target.value);
        }
    }
    return ( 
        <div className='flex flex-col gap-4 min-w-[12rem] pt-4 pr-4'>
            {/* this is sort container */}
            <div className='flex flex-col gap-4'>
                <p className='mb-4 font-semibold'>Sort by</p>
                <div className='flex items-center'>
                    <p>Price:</p>
                    <select id='selectPrice' onChange={handlePrice} value={sortPrice} className='pl-2 bg-transparent text-sm'>
                        <option value='norange'>No Range</option>
                        <option value='lowhigh'>low to high</option>
                        <option value='highlow'>high to low</option>
                    </select>
                </div>
                <div className='flex items-center'>
                    <p>Date:</p>
                    <select id='selectDate' onChange={handleDate} value={sortDate} className='pl-2 bg-transparent text-sm'>
                        <option value='newest'>Newest</option>
                        <option value='oldest'>Oldest</option>
                    </select>
                </div>
            </div>
            {/* sorting by popular or discount*/}
            <div className='flex flex-col gap-1'>
                {/* <label htmlFor='discount'><input className='mr-2 cursor-pointer' id='discount' type='checkbox' checked={isDiscountOnly} onChange={()=>toggleDiscount()}/>Discount</label> */}
                
            </div>


            {/* category sorting part */}
            <div className='mt-4'>
                {/* <p className='mb-4 font-semibold'>Category</p> */}
                <ul className='flex flex-col gap-1'>
                    {/* i know this code is ugly but its work and i dont want to fix this thing anymore,
                     this code make sure to highlight all product depend on the number of path at the url without conflicting with /products and /feature*/}      
                    {/* {   
                        URL.length<3 && URL[1]==='products'|| URL[1]==='products/'?(
                                <li className='cursor-pointer tracking-widest font-medium text-secondary1 pl-2'>All Products</li>
                        ):(
                            <li onClick={()=> handleURL('products')} className='font-light text-text1 cursor-pointer'>All Products</li>
                        )
                    }
                    {   
                        URL[1]==='feature'|| URL[1]==='feature/'?(
                                <li className='cursor-pointer tracking-widest font-medium text-secondary1 pl-2'>Feature Products</li>
                        ):(
                            <li onClick={()=> handleURL('feature')} className='font-light text-text1 cursor-pointer'>Feature Products</li>
                        )
                    } */}
                    {/* {Categories.map((e,i)=>(
                        URL[1] == e.toLowerCase() ?(
                            <li key={i} className='cursor-pointer tracking-widest font-medium text-secondary1 pl-2'>{e}</li>
                        ):(
                            <li key={i} onClick={()=> handleURL(e)} className='font-light text-text1 cursor-pointer'>{e}</li>
                        )
                    ))} */}
                </ul>
            </div> 
        </div>
    );
}
export default SideMenu;