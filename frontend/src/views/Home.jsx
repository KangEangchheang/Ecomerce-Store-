import BrandSlide from "../components/BrandSlide";
import Category from "../components/Category";
import Service from "../components/Service";
import Btn from "../components/small/Btn";
import FeatureBar from "../components/FeatureBar";
import Card from "../components/small/card";


export default function Home(){
    
    return(
        <>
            {/* Header Banner Section */}  
            <div className="mt-2 h-[70vh]">
                <div className="bg-[#0A0A0A] w-screen h-[70vh] absolute left-0">
                </div>
            </div>
            <div className="flex flex-col gap-16 mt-16 px-16">
                <Category/>
                <Btn text="View all product"/>
                <Btn text="View All Products"/>
                <Service/>
                <BrandSlide/>
            </div>
        </>
        
    )
}