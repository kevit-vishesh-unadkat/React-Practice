import {createSlice} from '@reduxjs/toolkit';


const initialState = {
  products: [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 },
    { id: 4, name: "Keyboard", price: 1500 },
  ],
};

const productSlice=createSlice({
    name:"products",
    initialState,

    reducers:{},
})

export default productSlice.reducer;