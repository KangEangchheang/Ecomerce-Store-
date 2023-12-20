
import Card from './small/Card';
import HomeFeatureProductScroll from './small/HomeFeatureProductScroll';
import SectionTitle from "./small/SectionTitle";

function NewArrival() {
    return ( 
        <div>
            <SectionTitle text="New Arrivals" isbg={false} text2="New" text2_bg="#397367"/>
            <div className="my-8 pb-8 flex justify-evenly overflow-x-scroll gap-6 relative">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <HomeFeatureProductScroll/>
            </div>
        </div>
     );
}

export default NewArrival;