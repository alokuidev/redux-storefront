import React from 'react'
import { createSlice } from '@reduxjs/toolkit'


const TodoSlice = createSlice({
    name:'Todo',
    initialState:[],
    reducers:{
        addCart:(state,action) => {
            
            const itemIndex = state.findIndex((item) => item.id === action.payload.id);
            if (itemIndex !== -1) {
                // Product exists, increase quantity
                state[itemIndex].quantity += 1;
              } else {
                // New product, set quantity to 1
                state.push({ ...action.payload, quantity: 1 });
              }
              //console.log(JSON.parse(JSON.stringify(state)));
        } 
    }
})

export const {addCart} = TodoSlice.actions;

export default TodoSlice.reducer;