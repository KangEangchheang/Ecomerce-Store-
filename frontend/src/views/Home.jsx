import Category from "../components/Category";
import Card from "../components/small/card";


export default function Home(){
    
    return(
        <>
            <div className="mt-2 h-[70vh]">
                <div className="bg-[#0A0A0A] w-screen h-[70vh] absolute left-0"></div>
            </div>
            <div className="flex flex-col gap-16 mt-16">
                {/* Header Banner Section */}
                <Category></Category>
                {/* <Card bg={'red'}></Card> */}
            </div>
        </>
        
    )
}