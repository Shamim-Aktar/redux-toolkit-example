import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addTocart } from './cartSlice'


const Cart=()=>{

  const dispatch=useDispatch()
  const addingToCart=()=>{
      dispatch(addTocart())
  }
  return (
    <>
<button className="button-3" role="button" onClick={addingToCart}>Add to cart  </button>


    </>
  )
}

export default Cart