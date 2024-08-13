import React from 'react'

import {useSelector} from 'react-redux'


const Navbar=()=>{

  const count=useSelector(state=>state.cart.itemCount)
  return (
    <div>Cart <span>{count}</span></div>
  )
}

export default Navbar