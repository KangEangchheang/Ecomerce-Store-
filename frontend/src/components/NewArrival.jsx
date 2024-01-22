import {useRef} from 'react'
import Card from './small/Card';
import HomeFeatureProductScroll from './small/HomeFeatureProductScroll';
import SectionTitle from "./small/SectionTitle";

function NewArrival({productList}) {
    const sliderRef = useRef(null);
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
    return ( 
        <div className='relative'>
            <SectionTitle text="New Arrival" isbg={false} />
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

export default NewArrival;