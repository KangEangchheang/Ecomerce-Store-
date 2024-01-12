import BrandSlide from "../components/BrandSlide";
import Category from "../components/Category";
import FeatureProduct from "../components/FeatureProduct";
import NewArrival from "../components/NewArrival";
import Promotion from "../components/Promotion";
import Service from "../components/Service";
import Btn from "../components/small/Btn";

import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home(){
    const [productList,setProductList] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:5555/products/feature');
                setProductList(res.data);
                
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    },[])
    return(
        <>
            {/* Header Banner Section */}  
            <div className="mt-2 h-[70vh]">
                <div className="bg-[#0A0A0A] w-screen h-[70vh] absolute left-0">
                </div>
            </div>
            <div className="flex flex-col gap-16 mt-16 px-16">
                <Category/>
                <FeatureProduct productList={productList}/>
                <NewArrival/>
                <Promotion/>
                <Btn text="View All Products"/>
                <Service/>
                <BrandSlide/>
            </div>
        </>
        
    )
}