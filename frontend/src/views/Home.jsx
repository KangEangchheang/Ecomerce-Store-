import Category from "../components/Category";
import FeatureBar from "../components/FeatureBar";
import Card from "../components/small/card";


export default function Home(){
    
    return(
        <>
            {/* Header Banner Section */}  
            <div className="mt-2 h-[70vh]">
                <div className="bg-[#0A0A0A] w-screen h-[70vh] absolute left-0"></div>
            </div>
            <div className="flex flex-col gap-16 mt-16">
                <FeatureBar />
                {/* Header Banner Section */}
                <><Category></Category><FeatureBar /><div data-te-perfect-scrollbar-init className="w-[1375px] m-auto bg-slate-000 flex justify-between">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div></>
                
                
            </div>
        </>
        
    )
}