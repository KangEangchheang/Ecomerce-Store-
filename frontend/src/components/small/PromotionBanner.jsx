import { useEffect, useState } from "react";
function PromotionBanner({banners}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideInterval = 6000;
    useEffect(()=>{
        
        const timer = setInterval(() => {
            // Increment the index, and reset to 0 if it exceeds the length of the images array
            setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
        }, slideInterval);

        return () => {
            // Clear the interval when the component unmounts
            clearInterval(timer);
        };

    },[currentIndex,banners]);
    return ( 
        <div className="bg-[#0A0A0A] w-screen h-[70vh] flex justify-center absolute left-0 overflow-hidden">
           {banners[0] != undefined && 
           <img className={`h-full object-fill bannerAnimation`} 
           src={`http://localhost:5000/banners/${banners[currentIndex].image}`} alt=''/>}
        </div>
    );
}

export default PromotionBanner;