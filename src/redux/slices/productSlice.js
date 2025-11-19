import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//getAllProducts call inside home useeffect
export const getAllProducts = createAsyncThunk('products/getAllProducts',async()=>{
   const result = await axios.get("https://dummyjson.com/products")
//    save allproducts into session storage
    sessionStorage.setItem("produts",JSON.stringify(result.data.products))
   return result.data.products
})

const productSlice = createSlice({
    name:'products',
    initialState:{
        allProducts:[],
        dummyAllProducts:[],
        loading:true,
        error:""
    },
    reducers:{
        //synchronus actions
        search:(state,action)=>{            
           state.allProducts = state.dummyAllProducts.filter(item=>item.title.toLowerCase().includes(action.payload.toLowerCase()))
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllProducts.fulfilled,(state,action)=>{
            state.allProducts = action.payload
            state.dummyAllProducts = action.payload
            state.loading = false
            state.error=""
        }),
        builder.addCase(getAllProducts.pending,(state,action)=>{
            state.allProducts = []
            state.dummyAllProducts = []
            state.loading = true
            state.error = ""
        }),
        builder.addCase(getAllProducts.rejected,(state,action)=>{
            state.allProducts = []
            state.dummyAllProducts = []
            state.loading = false
            state.error = "API Call failed!!! Something went wrong"
        })
    }
})

export const {search} = productSlice.actions
export default productSlice.reducer