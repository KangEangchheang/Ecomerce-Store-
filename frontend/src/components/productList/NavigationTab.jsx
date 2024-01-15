import {useNavigate} from 'react-router-dom';   
function NavigationTab({param}) {
    const nav = useNavigate();
    const Navigate=(r)=>{
        nav(r);
    }
    return ( 
        <div className='flex gap-1 items-baseline text-sm mt-8 px-16 cursor-pointer' >
            <span onClick={()=>Navigate("/products")}>Products</span>
            <span>{'>'}</span>
            {param[1]!='products' && param[1] != 'products/'?<div><span onClick={()=>Navigate("/"+param[1])}>{param[1]}</span>
            <span>{'>'}</span></div>
            :<div></div>}
            {param.length === 3 && param[2]!==""?(
                <div>
                    <span>{param[2]}</span>
                    <span>{'>'}</span>
                </div>
            ):(<div></div>)}
        </div>
     );
}

export default NavigationTab;