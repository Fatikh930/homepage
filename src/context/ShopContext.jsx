import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const dilivery_fee = '10';
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false)
    const [cartItem, setCartItem] = useState({})
    const navigate = useNavigate()



// addtoadd login 

// const addToCart = async (itemId, size) => {

//     if(!size){
//         toast.error("Select the product size")
//         return;
//     }

//     let cartData = structuredClone(cartItem);

//     if (!cartData[itemId]) {
//         cartData[itemId] = {}; 
//     }

//     // Now, check if the size exists within the item

//     if (cartData[itemId][size]) {
//         cartData[itemId][size] += 1; 
//         toast.success("Successfull Add Products")
//         return;
//     } else {
//         cartData[itemId][size] = 1; // Initialize size quantity to 1 if it doesn't exist
//     }

//     // Update the state with the modified cart data
//     setCartItem(cartData);
// };
const addToCart = async (itemId, size) => {

    if (!size) {
        toast.error("Select the product size");
        return;
    }

    let cartData = structuredClone(cartItem);

    if (!cartData[itemId]) {
        cartData[itemId] = {}; 
    }

    if (cartData[itemId][size]) {
        cartData[itemId][size] += 1; 
    } else {
        cartData[itemId][size] = 1; 
    }

    setCartItem(cartData)
  
};


// getCartCount 

const getCartCount = ()=> {
    let  totalCount = 0;

    for(const items in cartItem){ // first in loop item the execute
        for(const item in cartItem[items]){ // second in loop are excute the item size
            try {
               if( cartItem[items][item] > 0){
                totalCount += cartItem[items][item]
               } 
            } catch (error) {
                error
            }
        }
    }
    return totalCount;
}

// update logic

const upDateProduct = async (itemid,size,quantites)=>{

    let cartData = structuredClone(cartItem)

    cartData[itemid][size] = quantites

    setCartItem(cartData)
}


 // all total count 
const getAllCount = () =>{
    let totalAmount = 0;
    for(const items in cartItem){
        let itemInfo = products.find((product) => product._id === items)
        for(const item in cartItem[items]){
           try {
            if(cartItem[items][item] >0){
                totalAmount += itemInfo.price * cartItem[items][item] 
            }
           } catch (error) {
            error
           }
        }
    }
    return totalAmount;
}



    const value = {

        products, currency, dilivery_fee,
        search,setSearch,showSearch,setShowSearch,
        cartItem,addToCart,
        getCartCount,
        upDateProduct,
        getAllCount,
        navigate
    }
     return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
     )
   
}

export default ShopContextProvider;
