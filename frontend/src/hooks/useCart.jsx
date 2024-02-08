import {useEffect, useState} from 'react';

let key = 'mycart';
const storedCart = sessionStorage.getItem(key);

const useCart = () => {
  // Use the stored value if it exists, otherwise use the initialValue
    const [cartProduct, setCartProduct] = useState(storedCart ? JSON.parse(storedCart) : []);

    const addProductCart = (product) =>{
        const newCart = [...cartProduct,{quantity:1,product:product}];
        setCartProduct(newCart);
        sessionStorage.setItem(key,JSON.stringify(newCart));
    }
  // Define a function to update the value in session storage
    function updateCart(index,qty){
        if(qty<1){
            removeProduct(index);
            return;
        }
        let array = [...cartProduct];
        array[index] = {...array[index],quantity:qty};
        setCartProduct(array);
        sessionStorage.setItem(key, JSON.stringify(array));
    }

    const removeProduct = (index)=>{
        var newArray = [...cartProduct];
        newArray.splice(index, 1);
        setCartProduct(newArray);
        sessionStorage.setItem(key,JSON.stringify(newArray));
    }

  return {cartProduct, updateCart,removeProduct,addProductCart};
}

export default useCart;