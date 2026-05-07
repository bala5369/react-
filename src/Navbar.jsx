import React, { useContext,useState } from 'react'
import { Link } from 'react-router-dom';
import { HelloContext } from './App';

function Navbar() {
  const {cart,setCart}=useContext(HelloContext)
  return (
    <>
    < nav id="navbar" >
    <Link to ="/"id="one"> Home </Link>
    <Link to ='/products'id="one"> Products </Link>
    <Link to ='/contact'id="one"> Contact  </Link>
    <Link to ='/cart'id="one"> Cart ({cart.length}) </Link>
    </nav>
    </>
  )
}

export default Navbar