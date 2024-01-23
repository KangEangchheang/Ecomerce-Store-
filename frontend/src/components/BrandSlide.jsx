import { useState,useEffect } from "react";
const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;
const STATIC_URL = import.meta.env.VITE_STATIC_URL;
import axios from 'axios';

function BrandSlide() {
    const [list,setList] = useState([]);
    useEffect(() => {
        // This will run after the component has mounted to webpage to avoid infinite loop
        const fetchData = async ()=>{
            try {
                const res = await axios.get(`${IMAGE_URL}/suppliers`);
                setList(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);//empty array to make the setlist run only one time
    return ( 
        <div className="flex gap-24 justify-center items-center overflow-clip w-full my-8" style={{scrollbarWidth:'none'}}>
            {list.map((e,index)=>(
                <img key={index} src={`${STATIC_URL+e.image}`} className="h-20" />
            ))}
        </div>
     );
}

export default BrandSlide;