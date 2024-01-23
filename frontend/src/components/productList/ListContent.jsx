import { useEffect, useState} from "react";
import thlist from '../../assets/icons/th-list.svg';
import th from '../../assets/icons/th.svg';
import thlistdisable from '../../assets/icons/th-list-disable.svg';
import thdisable from '../../assets/icons/th-disable.svg';
import Card from "../small/Card";
import CardList from "./CardList";
import Pagination from './Pagination';

function ListContent({List}) {
    const [view,setView]=useState(true);
    const ProductList = List;
    //pagination
    const [currentPage,setCurrentpage] = useState(1);
    const [itemPerPage] = useState(12);
     //pagination
    //get current prods
    const indexLast = currentPage * itemPerPage;
    const indexFirst = indexLast - itemPerPage;
    const currentProductList = ProductList.slice(indexFirst,indexLast);
    const handlePaginate = (pageNumber)=>{
        window.scrollTo(0,0);
        setCurrentpage(pageNumber)
    };
    
    function handleView(x){
        if(x !== view){
            setView(x);
        }
    }
    useEffect(()=>{
        
    },[currentPage])

    return (
        <div className="flex grow flex-col">
            {/* sorting view for the content part */}
            <div className='mb-9 flex gap-1 items-center justify-end'>
                <p className="mr-2">View</p>
                <div className='flex gap-4 ml-1'>
                    <img onClick={()=>handleView(true)} className='w-6 cursor-pointer' src={view?thlist:thlistdisable} alt='loading'/>
                    <img onClick={()=>handleView(false)} className='w-6 cursor-pointer' src={view?thdisable:th} alt='loading'/>
                </div>
            </div>
            {view?(
                //this is list view
                <ul className="flex flex-col">
                    {
                        currentProductList.length > 0 ? (
                            currentProductList.map((e, i) => (
                                <li key={i}>
                                    <CardList prod={e} />
                                </li>
                            ))
                        ) : (
                        <div>loading</div>
                        )
                    }
                </ul>
            ):(
                //this is grid view
                <ul className="flex flex-wrap w-full gap-16 gap-y-4 justify-start">
                    {
                        currentProductList.length > 0 ? (
                            currentProductList.map((e, i) => (
                                <li key={i}>
                                    <Card prod={e}/>
                                </li>
                            ))
                        ) : (
                        <div>loading</div>
                        )
                    }
                </ul>
            )
            }
            <Pagination total={ProductList.length} itemPerPage={itemPerPage} paginate={handlePaginate} currentPage={currentPage}/>
        </div>
    )
}

export default ListContent;