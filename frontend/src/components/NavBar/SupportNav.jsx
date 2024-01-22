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
                nav('/about');
        }
    }
    return ( 
        <div className="relative">
            <div className="absolute -bottom-1/2 w-full bg-neutral-200 px-16 py-4 text-xs flex gap-6 overflow-scroll border-b-2 border-neutral-200 scroll no-scrollbar flex-wrap">
            {
                categories.map((e,i)=>(
                   <div className="relative tracking-wide px-4 py-2 cursor-pointer hover:bg-secondary1 hover:text-primary min-w-max bg-neutral-200 text-secondary1 rounded-full font-semibold" key={i}>
                        <p onClick={()=>handleRoute(e)}>{e}</p>
                   </div> 
                ))
            }
            </div>
        </div>
     );
}

export default SupportNav;