<<<<<<< HEAD
function Cart() {
    const productCart = [
        {
            name: 'headset',
            price: 100,
            quantity: 40,
        },
        {
            name: 'earpad',
            price: 50,
            quantity:30,
        }
    ]
    return ( 
        <div className="w-full flex gap-2">
           <div className="">
            <h1>My Shopping Cart</h1>
            <table className="w-fit">
                <tr className="border-2 w-fit bg-slate-100 ">
                    <th className="p-4 ">Product</th>
                    <th className="p-4 ">Price</th>
                    <th className="p-4 ">Quantity</th>
                    <th className="p-4 ">Total</th>  
                </tr>
                {productCart.map((product, i)=>(
                    <tr key={i}>
                        <td className="p-9">{product.name}</td>
                        <td className="p-9">${product.price}</td>
                        <td className="p-9">{product.quantity}</td>
                        <td className="p-9">${product.price*product.quantity}
                        </td>
                    </tr>
                    )
                )
                }
            </table>
=======
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
>>>>>>> a4dadee731fe1c6ae274294475364f9c32beea7b
        </div> 
        <div className="border-2 bg-slate-300 p-8 h-fit m-6">
            <h1 className="text-lg">cart Total</h1>
        </div> 

    </div>
        
        
    );
}

export default Cart;