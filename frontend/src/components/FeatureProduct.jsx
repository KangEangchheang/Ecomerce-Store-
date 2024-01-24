import { useState, useRef, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import Card from './small/Card';
import HomeFeatureProductScroll from './small/HomeFeatureProductScroll';
import SectionTitle from "./small/SectionTitle";

function FeatureProduct({ productList }) {
  const [isHover, setHover] = useState(false);
  const sliderRef = useRef(null);
  const nav = useNavigate();

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  useEffect(() => {

    const intervalId = setInterval(() => {
      if (!isHover) {
        requestAnimationFrame(() => handleClick(false));
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, [isHover]);

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
        <SectionTitle text="Feature Products" isbg={true} />
      </div>
      <ul
        ref={sliderRef}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        id='slider'
        className="mt-8 pb-8 flex overflow-x-scroll scroll scroll-smooth gap-10 no-scrollbar"
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

export default FeatureProduct;