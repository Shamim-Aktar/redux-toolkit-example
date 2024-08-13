
import {createSlice} from '@reduxjs/toolkit'

const cartSlice=createSlice({
  name:'cart',
  initialState:{
      itemCount:0
  },
  reducers:{
      addTocart:(state)=>{
        state.itemCount=state.itemCount+1
      }
  }
})

export const { addTocart } = cartSlice.actions
export default cartSlice.reducer