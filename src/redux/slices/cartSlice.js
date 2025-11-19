import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        //addtocart
        addToCart:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload.id)
            if(existingProduct){
                //increment quantity
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
                const remaingProducts = state.filter(item=>item.id!=existingProduct.id)
                state = [...remaingProducts,existingProduct]
            }else{
                //insert product
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }
        },
        //removecart
        removeCartItem:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        },
        //increment quantity
        incrementCartItem:(state,action)=>{
             const existingProduct = state.find(item=>item.id==action.payload)
             existingProduct.quantity++
             existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
             const remaingProducts = state.filter(item=>item.id!=action.payload)
             state = [...remaingProducts,existingProduct]
        },
        //decrement quantity
        decrementCartItem:(state,action)=>{
             const existingProduct = state.find(item=>item.id==action.payload)
             existingProduct.quantity--
             existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
             const remaingProducts = state.filter(item=>item.id!=action.payload)
             state = [...remaingProducts,existingProduct]
        },
        //empty
        emptyCart: ()=>{
            return []
        }
    }
})

export const {addToCart,removeCartItem,incrementCartItem,decrementCartItem,emptyCart} = cartSlice.actions
export default cartSlice.reducer