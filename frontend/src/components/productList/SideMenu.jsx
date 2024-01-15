import {useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom"


function SideMenu({Categories,updateSort}) {
    const [sortPrice,setSortPrice] = useState('');
    const [sortDate,setSortDate] = useState('');

    const location = useLocation();
    const nav = useNavigate();
    const [URL,setURL] = useState(location.pathname.split('/'));
    const [isFeatureOnly,setFeatureOnly] = useState(false);
    const [isDiscountOnly,setDiscountOnly] = useState(false);

    useEffect(()=>{
        if(URL[1]==='feature'||URL[1]==='feature/'){
        setFeatureOnly(true);
    }
    },[]);

    function handleURL(cat){
        cat = cat.toLowerCase();
        //for products list
        if(URL[1] !=='feature'){
            const array = ["",cat];
            setURL(array);
            nav(`/${cat}`);
        }
        //for feature product
        else if (URL[1] ==='feature'){
            if(cat === 'products'){
                const array = ["",cat];
                setURL(array);
                nav(`/${URL[1]}`);
            }
            else{
                const array = ["",URL[1],cat];
                setURL(array);
                nav(`/${URL[1]}/${cat}`);
            }
        }
    }
    const toggleFeature = () =>{
        if(!isFeatureOnly){
           if(URL.length<3){
                nav(`/feature`)
            }else{
                nav(`/feature/${URL[2]}`)
            } 
            setFeatureOnly(true);  
        }else{
            if(URL.length<3){
                nav(`/products`)
            }else{
                nav(`/products/${URL[2]}`)
            } 
            setFeatureOnly(false);
        }
    }
    const toggleDiscount = () =>{
        if(!isDiscountOnly){
            setDiscountOnly(true);
            updateSort({discountOnly:true})  
        }else{ 
            setDiscountOnly(false);
            updateSort({discountOnly:false})
        }
    }
    //!********** this part is for select sorting function

    const handlePrice = (event)=>{
        //need to set condition that if its the same value no need to rerender, api call waste
        if(sortPrice !== event.target.value){
            setSortPrice(event.target.value);
            updateSort({price:event.target.value});
        }
    }
    const handleDate = (event)=>{
        //need to set condition that if its the same value no need to rerender, api call waste
        if(sortDate !== event.target.value){
            setSortDate(event.target.value);
            updateSort({date:event.target.value});
        }
    }

    return ( 
        <div className='flex flex-col gap-4 w-44 p-4'>
            {/* this is sort container */}
            <div className='flex flex-col gap-1'>
                <p className='mb-4 font-semibold'>Sort by</p>
                <div className='flex items-center'>
                    <p>Price:</p>
                    <select id='selectPrice' onChange={handlePrice} value={sortPrice} className='pl-2 bg-transparent text-sm'>
                        <option value='norange'>No Range</option>
                        <option value='lowhight'>low to high</option>
                        <option value='hightlow'>high to low</option>
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
                <label htmlFor='discount'><input className='mr-2 cursor-pointer' id='discount' type='checkbox' checked={isDiscountOnly} onChange={()=>toggleDiscount()}/>Discount only</label>
                <label htmlFor='feature'><input className='mr-2 cursor-pointer' id='feature' type='checkbox' checked={isFeatureOnly} onChange={()=>toggleFeature()}/>Feature only</label>
            </div>


            {/* category sorting part */}
            <div className='mt-4'>
                <p className='mb-4 font-semibold'>Category</p>
                <ul className='flex flex-col gap-1'>
                    {/* i know this code is ugly but its work and i dont want to fix this thing anymore,
                     this code make sure to highlight all product depend on the number of path at the url without conflicting with /products and /feature*/}
                    { URL[1]==='products'|| URL[1]==='products/'?
                        (   
                            URL.length<3?(
                                <li className='cursor-pointer tracking-widest font-medium text-secondary1 pl-2'>All Products</li>
                            ):(
                                <li onClick={()=> handleURL('products')} className='font-light text-text1 cursor-pointer'>All Products</li>
                            )
                        ):
                        ('')
                    }
                    { URL[1]==='feature'|| URL[1]==='feature/'?
                        (   
                            URL.length<3?(
                                <li className='cursor-pointer tracking-widest font-medium text-secondary1 pl-2'>All Products</li>
                            ):(
                                <li onClick={()=> handleURL('products')} className='font-light text-text1 cursor-pointer'>All Products</li>
                            )
                        ):
                        ('')
                    }

                    {Categories.map((e,i)=>(
                        URL[1] == e.toLowerCase() || URL[2] == e.toLowerCase() ?(
                            <li key={i} className='cursor-pointer tracking-widest font-medium text-secondary1 pl-2'>{e}</li>
                        ):(
                            <li key={i} onClick={()=> handleURL(e)} className='font-light text-text1 cursor-pointer'>{e}</li>
                        )
                    ))}
                </ul>
            </div> 
        </div>
    );
}
export default SideMenu;