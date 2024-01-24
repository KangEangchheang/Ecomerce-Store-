import BrandSlide from "../components/BrandSlide";
// import Category from "../components/Category";
import FeatureProduct from "../components/FeatureProduct";
import NewArrival from "../components/NewArrival";
import Promotion from "../components/Promotion";
import Service from "../components/Service";
import Btn from "../components/small/Btn";
import {useNavigate} from 'react-router-dom'

import axios from 'axios';
import { useEffect, useState } from 'react';
import PromotionBanner from "../components/small/PromotionBanner";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;
const STATIC_URL = import.meta.env.VITE_STATIC_URL;

export default function Home(){
    const [productList,setProductList] = useState([]);
    const [banners,setBanner] = useState([]);
    const nav = useNavigate();

    useEffect(()=>{
        const fetchData = async () => {
            try {
                //get banner
                var res = await axios.get(`${BASE_URL}/banner`);
                setBanner(res.data);

                res = await axios.get(`${BASE_URL}/products/feature`);
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
                
                setProductList([...product,...product]);
                
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    },[])
    function goToProduct(){
        nav('/products')
    }
    return(
        <>
            {/* Header Banner Section */}  
            <div className="h-[70vh]">
                <PromotionBanner banners={banners}/>
            </div>
            <div className="flex flex-col gap-10 mt-16 px-16">
                {/* <Category/> */}
                <FeatureProduct productList={productList}/>
                <NewArrival productList={productList}/>
                <Promotion productList={productList}/>
                <div onClick={()=>goToProduct()} className="w-fit self-center">
                    <Btn text="View All Products"/>
                </div>
                <Service/>
                <BrandSlide/>
            </div>
        </>
        
    )
}