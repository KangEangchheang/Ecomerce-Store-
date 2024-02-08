import useCart from "../../hooks/useCart";
import { useEffect} from "react";
function Cart() {
    const {cartProduct,updateCart,removeProduct}  = useCart();
    let count = 0;
    let delivery = 0.25;
    let tax = 0;
    const subtotal = cartProduct.reduce((a,e)=>{
        count += (e.quantity * e.product.price);
        return count;
    },0);

    useEffect(()=>{
    },[cartProduct]);

    return ( 
        <div className="flex flex-col gap-4 flex-wrap text-center w-full">
            <h1 className="text-secondary1 font-semibold text-xl">My Shopping Cart</h1>
            {cartProduct.length >0?<div className="flex gap-6 flex-wrap">
                <div className="border-2 border-gray-200 rounded-lg grow flex h-fit">
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th className="font-medium px-6 text-start py-3 text-text1 tracking-wide">ITEM</th>
                                <th className="font-medium px-6 text-start py-3 text-text1 tracking-wide">PRICE</th>
                                <th className="font-medium px-6 text-start py-3 text-text1 tracking-wide">QUANTITY</th>
                                <th className="font-medium px-6 text-start py-3 text-text1 tracking-wide">TOTAL</th>
                            </tr>
                        </thead>
                        <tbody  className="border-y-2 border-gray-200 text-start">
                            {cartProduct.length > 0 &&
                                cartProduct.map((e,i)=>(
                                    <tr className="border-y-2 border-gray-200" key={i}>
                                        <td className="px-6 py-4">
                                            <div className="flex gap-4 w-fit items-center">
                                                <img className='object-contain w-14 rounded-md' src={e.product.img} alt='image'/>
                                                <p className="w-[18ch] truncate overflow-clip">{e.product.name}</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">${e.product.price}</td>
                                        <td className="px-6 py-4 select-none">
                                            <div className="text-center w-fit flex group items-center p-1 border-2 border-white hover:border-gray-200 rounded-full">
                                                <div onClick={()=>updateCart(i,e.quantity-1)} className="px-2 bg-gray-300 rounded-full group-hover:visible invisible hover:text-white hover:bg-secondary1 cursor-pointer transition-colors ease-linear">
                                                    -
                                                </div>
                                                <p className="w-10">
                                                    {e.quantity}
                                                </p>
                                                <div  onClick={()=>updateCart(i,e.quantity+1)} className="px-2 bg-gray-300 rounded-full group-hover:visible invisible hover:text-white hover:bg-secondary1 cursor-pointer transition-colors ease-linear">
                                                    +
                                                </div>
                                            </div>
                                            
                                        </td>
                                        <td className="pl-6 pr-3 py-4">
                                            <div className="font-medium w-[10rem] flex justify-between items-center">
                                                <p>${e.product.price*e.quantity}</p>
                                                <div className="font-sans hover:bg-secondary1 hover:text-white rounded-full cursor-pointer transition-colors bg-gray-200 px-3 py-1 items-center">
                                                    <p onClick={()=>removeProduct(i)} className="relative bottom-[0.2rem]">remove</p>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

                {/* total and make order */}
                <div className="px-6 py-8 flex flex-col gap-2 w-[20rem] text-start border-2 border-gray-200 rounded-lg">
                    <p className="font-medium text-lg mb-4">Cart Total</p>
                    <span className="border-b-2 py-2 relative">Subtotal: <p className="absolute right-0 top-1/2 -translate-y-1/2">${subtotal}</p></span>
                    <span className="border-b-2 py-2 relative">Delivery: <p className="absolute right-0 top-1/2 -translate-y-1/2">{delivery===0?'Free':`$${delivery}`}</p></span>
                    <span className="border-b-2 py-2 relative">Tax: <p className="absolute right-0 top-1/2 -translate-y-1/2">${tax}</p></span>
                    <span className="py-2 relative">Total:<p className="absolute right-0 top-1/2 -translate-y-1/2">${subtotal+delivery+tax}</p></span>
                    <button className="px-6 py-2 mt-4 bg-secondary1 w-fit self-center text-white text-sm font-medium active:scale-95 rounded-full">Make order</button>
                </div>
            </div>:
            <div className="">Your cart is empty</div>}
        </div> 
    );
}

export default Cart;