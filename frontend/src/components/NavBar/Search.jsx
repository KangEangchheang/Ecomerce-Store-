
import { useEffect, useState, useRef } from 'react';
import search from '../../assets/icons/Search.svg';
import axios from 'axios';
import SearchProductCard from './SearchProductCard';
const BASE_URL = import.meta.env.VITE_BASE_URL;
const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;
const STATIC_URL = import.meta.env.VITE_STATIC_URL;

function Search() {
    const [input,setInput] = useState('');
    const [product,setProduct] = useState([]);
    const [isVisible,setVisible] = useState(false);
    let timerRef = useRef(null);

    function handleSearch(input){
        
    }
    const handleAutoSearch = (event)=>{
        setInput(event.target.value);
    }
    const handleFocus = (event)=>{
        event.preventDefault();
        setVisible(true);
    }
    const handleNotFocus = ()=>{
        //set timeout so that it doesnt lose focus too early and we cant click anything lmao
        setTimeout(() => {
           setVisible(false); 
        }, 150);
    }

    useEffect(()=>{
        const fetch = async()=>{
            try {
                
                if(input !=''){
                    var res = await axios.get(`${BASE_URL}/products/name/${input}`);
                    var product = res.data;
                    res = await axios.get(`${BASE_URL}/discount`);
                    var discounts = res.data;
                    
                    //looping a reqeust is not good but since im lazy and this only loop for 5 time so its fine i think
                    for(let i = 0;i<product.length ;i++){
                        res = await axios.get(`${IMAGE_URL+'/products/' + product[i].id}`);
                        var image = res.data;
                        image.map((e,i)=>(image[i] = `${STATIC_URL+image[i].image}` ))

                        const discount = discounts.find(d => d.id === product[i].discount_id);
                        if (discount) {
                            product[i] = {
                                ...product[i],
                                img:image[0],
                                discount: { ...discount } // Using spread operator to add discount data
                            };
                        }
                        else{
                            product[i] = {
                                ...product[i],
                                img:image[0]
                            };
                        }
                    }
                    setProduct([...product]);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        // there is timeout because to stop query every letter we type and user can spam request

         // Clear the previous timer
        clearTimeout(timerRef.current);
        // Set a new timer to trigger data fetching after 1000 milliseconds (1 second)
        timerRef.current = setTimeout(() => {
            fetch();
        }, 1000);

        // Cleanup function to cancel any ongoing data fetching when the component unmounts or when a new input value is initiated
        return () => {
            clearTimeout(timerRef.current);
        };
    },[input]);

    return ( 
        <div className='flex relative'>
            <div className='border-neutral-200 border-2 rounded-l-full border-r-0'>
                <img className='h-4 left-4 top-1/2 -translate-y-2/4 absolute' src={search} alt='search'/>
            <input type='text' value={input} onFocus={handleFocus} onBlur={handleNotFocus} onChange={handleAutoSearch} className="text-xs  text-primary1 py-2 px-10 rounded-full flex w-[60ch] outline-none border-none" placeholder="what are you looking for?"/>
            </div>
            <button onClick={()=>handleSearch()} className='border-2 border-secondary1 text-xs font-medium bg-secondary1 text-primary px-6 py-2 rounded-r-full active:scale-105'>Search</button>
            {/* i could've use useRef for better component rerender life cycle */}
            { isVisible &&
                <ul onMouseEnter={handleFocus} className='absolute flex w-fit overflow-y-auto max-h-96 flex-col top-[110%] rounded-lg p-2 z-10 border-2 border-neutral-200 bg-white shadow-md'>
                    {
                    product.length !=0?
                    product.map((e,i)=>(
                        <li key={i}>
                            <SearchProductCard product={e}/>
                        </li>
                    )):<div className='px-16 text-sm'>0 result</div>
                    }
                </ul>
            }
        </div>
     );
}

export default Search;