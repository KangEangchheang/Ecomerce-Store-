import { useEffect, useState} from "react";
import thlist from '../../assets/icons/th-list.svg';
import th from '../../assets/icons/th.svg';
import thlistdisable from '../../assets/icons/th-list-disable.svg';
import thdisable from '../../assets/icons/th-disable.svg';

function ListContent() {
    const [view,setView]=useState(false);

    function handleView(x){
        if(x !== view){
            setView(x);
        }
    }
    useEffect(()=>{

    },[])

    return (
        <div className="flex grow flex-col">
            {/* sorting view for the content part */}
            <div className='flex gap-1 items-center justify-end'>
                <p className="mr-2">View</p>
                <div className='flex gap-4 ml-1'>
                    <img onClick={()=>handleView(true)} className='w-6 cursor-pointer' src={view?thlist:thlistdisable} alt='loading'/>
                    <img onClick={()=>handleView(false)} className='w-6 cursor-pointer' src={view?thdisable:th} alt='loading'/>
                </div>
            </div>
            {view?(
                <div>list</div>
            ):(
                <div>grid</div>
            )
            }
        </div>
    )
}

export default ListContent;