import { useEffect, useState } from 'react';
import Card from '../small/Card';
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;
const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;
const STATIC_URL = import.meta.env.VITE_STATIC_URL;

function Related({catName,currentProductId}) {
    const [list,setList] = useState([]);

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                var res = await axios.get(`${BASE_URL}/products/related/${catName}`);
                var product = res.data;
                res = await axios.get(`${BASE_URL}/discount`);
                var discounts = res.data;
                
                //looping a reqeust is not good but since im lazy and this only loop for 5 time so its fine i think
                for(let i = 0;i<product.length ;i++){
                    res = await axios.get(`${IMAGE_URL+'/products/' + product[i].id}`);
                    var image = res.data;
                    image.map((e,i)=>(image[i] = `${STATIC_URL+image[i].image}` ))

                    const discount = discounts.find(d => d.id === product[i].discount_id);
                    if (discount) {
                        product[i] = {
                            ...product[i],
                            img:image[0],
                            discount: { ...discount } // Using spread operator to add discount data
                        };
                    }
                    else{
                        product[i] = {
                            ...product[i],
                            img:image[0]
                        };
                    }
                }
                //this filter out the product alr in the detail page incase it query the alrd existing product
                // product = product.filter(item=>item.id !=currentProductId);

                setList([...product,...product,...product,...product,...product]);
            }catch(e){
                console.log(e);
            }
        }
        fetchData();
    },[])
    return ( 
        <div className='my-12'>  
            <h1 className='font-semibold text-lg mb-4'>Related products</h1>
            <ul className='flex justify-between'>
                {list.map((e,i)=>(
                    <li className='scale-90' key={i}>
                        <Card prod={e}/>
                    </li>
                ))}
            </ul>
        </div>
     );
}

export default Related;