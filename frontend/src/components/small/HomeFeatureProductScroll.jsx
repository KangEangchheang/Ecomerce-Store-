
import icon from "../../assets/icons/angle-left.svg";
import './HomeFeatureProduct.css';
function HomeFeatureProductScroll() {
    return ( 
        <>
            <div className="flex gap-6 absolute bottom-0 right-10 overflow-clip">
                <img alt='cli' className="rotate-180 cursor-pointer ishover"  src={icon}/>
                <img alt='cli' className="cursor-pointer ishover"src={icon}/>
            </div>
        </>
     );
}

export default HomeFeatureProductScroll;