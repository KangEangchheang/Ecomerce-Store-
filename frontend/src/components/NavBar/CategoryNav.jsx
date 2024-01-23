import {useNavigate} from 'react-router-dom'
function CategoryNav() {
    const nav = useNavigate();
    const categories = ['All Products','Keyboard','Monitor','Mouse',
    'Gamepad','Gaming_Chair','Laptop','Headphones','Drawing_Tablet'];
    function handleRoute(e,i){
        if(e==='All Products'){
            nav('/products');
        }
        else{
            const temp = categories[i]
            nav(`/products/${temp}`)
        }
    }
    return ( 
        <div className="relative">
            <div className="absolute -bottom-1/2 w-full bg-neutral-200 px-16 py-4 text-xs flex gap-6 overflow-scroll border-b-2 border-neutral-200 scroll no-scrollbar flex-wrap">
            {
                categories.map((e,i)=>(
                   <div onClick={()=>handleRoute(e,i)} className="relative tracking-wide px-4 py-2 cursor-pointer hover:bg-secondary1 hover:text-primary min-w-max bg-neutral-200 text-secondary1 rounded-full font-semibold" key={i}>{e}</div> 
                ))
            }
            </div>
        </div>
     );
}

export default CategoryNav;