import BrandSlide from "../components/BrandSlide";
import Category from "../components/Category";
import FeatureProduct from "../components/FeatureProduct";
import NewArrival from "../components/NewArrival";
import Promotion from "../components/Promotion";
import Service from "../components/Service";
import Btn from "../components/small/Btn";


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
                <FeatureProduct/>
                <NewArrival/>
                <Promotion/>
                <Btn text="View All Products"/>
                <Service/>
                <BrandSlide/>
            </div>
        </>
        
    )
}