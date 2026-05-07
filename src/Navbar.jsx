import React, { useContext,useState } from 'react'
import { Link } from 'react-router-dom';
import { HelloContext } from './App';

function Navbar() {
  const {cart,setCart}=useContext(HelloContext)
  return (
    <>
    <h1> Navbar </h1>
    <Link to ="/"> Home </Link>
    <Link to ='/products'id="two"> Products </Link>
    <Link to ='/contact'id="three"> Contact  </Link>
    <Link to ='/cart'id="four"> Cart ({cart.length}) </Link>
    </>
  )
}

export default Navbar