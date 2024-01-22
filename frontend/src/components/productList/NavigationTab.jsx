import {useNavigate} from 'react-router-dom';   
function NavigationTab({param}) {
    const nav = useNavigate();
    const Navigate=(r)=>{
        nav(r);
    }
    return ( 
        <div className='flex gap-1 items-baseline text-sm'>
            <span onClick={()=>Navigate('/')} className='text-text1  cursor-pointer' >Home</span>
            <span>{'>'}</span>
            <span className='text-text1'>Products</span>
            <span>{'>'}</span>
            {param[1]!='products' && param[1] != 'products/'?<div><span className='text-text1' onClick={()=>Navigate("/"+param[1])}>{param[1]}</span>
            <span>{'>'}</span></div>
            :<div></div>}
            {param.length === 3 && param[2]!==""?(
                <div>
                    <span className='text-secondary1 font-semibold'>{param[2]}</span>
                </div>
            ):(<div></div>)}
        </div>
     );
}

export default NavigationTab;