
import Card from './small/Card';
import HomeFeatureProductScroll from './small/HomeFeatureProductScroll';
import SectionTitle from "./small/SectionTitle";

function FeatureProduct() {
    return ( 
        <div>
            <SectionTitle text="Feature Products" isbg={true}/>
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

export default FeatureProduct;