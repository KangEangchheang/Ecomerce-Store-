import {useNavigate} from 'react-router-dom'
function SupportNav() {
    const nav = useNavigate();
    const categories = ['Contact','Privacy Policy / Term Of Use','About','Subscribe']
    function handleRoute(e){
        switch(e){
            case 'Contact':
                nav('/contact');
                break;
            case 'Privacy Policy / Term Of Use':
                nav('/about/#privacy')
                break;
            case 'About':
                nav('/about')
                break;
            case 'Subscribe':
                nav('/about/#subscribe');
        }
    }
    return ( 
        <div className="absolute flex-col z-[100] top-full w-full bg-neutral-200 text-xs flex overflow-scroll border-b-2 border-neutral-200 scroll no-scrollbar flex-wrap">
        {
            categories.map((e,i)=>(
                <div onClick={()=>handleRoute(e)} className="relative tracking-wide px-4 py-5 cursor-pointer hover:bg-secondary1 hover:text-primary min-w-max bg-neutral-200 text-secondary1 font-semibold" key={i}>
                    <p>{e}</p>
                </div> 
            ))
        }
        </div>
     );
}

export default SupportNav;