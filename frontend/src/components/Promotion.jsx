import {useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import Card from './small/Card';
import HomeFeatureProductScroll from './small/HomeFeatureProductScroll';
import SectionTitle from "./small/SectionTitle";

function Promotion({productList}) {
    const sliderRef = useRef(null);
    const nav = useNavigate();
    const handleClick = (click) => {
        const slider = sliderRef.current;
        if (click) {
            slider.scrollLeft = slider.scrollLeft - (16 * 16);
        } else {
            if (slider.scrollLeft + slider.clientWidth === slider.scrollWidth) {
                slider.scrollLeft = 0;
            }else{
                slider.scrollLeft = slider.scrollLeft + (16 * 16);
            }
        }
    };
    function goToFeature(){
        nav('/feature');
    }

    return ( 
        <div className='relative'>
            <div className='cursor-pointer' onClick={()=>goToFeature()}>
                <SectionTitle text="Promotion" isbg={false} />
            </div>
            <ul
                ref={sliderRef}
                id='slider'
                className="mt-8 pb-8 flex justify-between overflow-x-scroll scroll whitespace-nowrap scroll-smooth gap-10 no-scrollbar"
            >
                {productList.length > 0 ? (
                productList.map((e, i) => (
                    <li key={i}>
                    <Card prod={e} />
                    </li>
                ))
                ) : (
                <div>loading</div>
                )}
            </ul>
            <HomeFeatureProductScroll click={handleClick} />
        </div>
     );
}

export default Promotion;