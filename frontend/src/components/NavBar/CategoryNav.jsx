import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;

function CategoryNav() {
    const nav = useNavigate();
    const [categories,setCategories] = useState([]);

    useEffect(()=>{
        const fetch=async()=>{
            const res = await axios.get(`${BASE_URL}/category`);
            setCategories([{name:'All Products'},...res.data]); 
        }
        fetch();
    },[]);
    
    function handleRoute(e,i){
        if(e==='All Products'){
            nav('/products');
        }
        else{
            const temp = categories[i].name
            nav(`/products/${temp}`)
        }
    }
    return (
            <div className="absolute top-full w-full bg-neutral-200 px-16 py-4 text-xs flex gap-3 overflow-scroll border-b-2 border-neutral-200 scroll no-scrollbar flex-wrap">
            {
                categories.map((e,i)=>(
                   <div onClick={()=>handleRoute(e.name,i)} className="relative tracking-wide px-4 py-2 cursor-pointer hover:bg-secondary1 hover:text-primary min-w-max bg-neutral-200 text-secondary1 rounded-full font-semibold" key={i}>{e.name}</div> 
                ))
            }
            </div>
     );
}

export default CategoryNav;