import Category from "../components/Category";
import Card from "../components/small/card";


export default function Home(){
    
    return(
        <div className="flex flex-col gap-16 mt-2">
            {/* Header Banner Section */}
            {/* <div className="ml-[-7vw] w-[100vw] bg-[#0A0A0A] h-[80vh]"></div> */}
            <Category></Category>
            <Card bg='red'></Card>
        </div>
    )
}