import { useEffect, useState } from "react";
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;
function Dashboard() {
    const [productCart,setProductCart] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            try {
               const res = await axios.get(`${BASE_URL}/category/`);
               setTimeout(() => {
                setProductCart(res.data);
               }, 10000);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    },[]);
    return ( 
        <div>
            {productCart.length > 0 ?
                productCart.map((e,i)=>(
                    <div key={i}>
                        <h1>{e.name}</h1>
                    </div>
                )):
                <div>is loading</div>
            }
        </div> 
    );
}

export default Dashboard;