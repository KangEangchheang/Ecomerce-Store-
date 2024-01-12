
import { useState } from "react";
import icon from "../../assets/icons/angle-left.svg";
import './HomeFeatureProduct.css';
function HomeFeatureProductScroll({ click }) {
    function left(){
        click(true);
    }
    function right(){
        click(false);
    }
    return ( 
        <>
            <div className="flex gap-6 absolute bottom-0 right-10 overflow-clip">
                <img alt='cli' className="rotate-180 cursor-pointer ishover"  src={icon} onClick={left}/>
                <img alt='cli' className="cursor-pointer ishover"src={icon} onClick={right}/>
            </div>
        </>
     );
}

export default HomeFeatureProductScroll;