import {ADD_TO_CART} from '../Constant'
export const addToCart = (data) =>{
    console.log("action", data);
    return{
        type:ADD_TO_CART,
        data:data
    }
}
// export const removeToCart = (data) =>{
//     return{
//         type:'Remove_to_Cart',
//         data:data
//     }
// }    