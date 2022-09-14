import React, { useState } from 'react'
import s from './Header.module.css'
import { FaShoppingCart } from "react-icons/fa";

export const Header=()=> {

  let [cartOpen,setCartOpen]= useState(false)

  return (
    <header>
      <div>
        <span className={s.logo}>Store</span>
        <ul className={s.nav}>
          <li>Contacts</li>
          <li>About us</li>
          <li>Profile</li>
        </ul>
        <FaShoppingCart onClick={()=>{setCartOpen(!cartOpen)}} className={cartOpen ? `${s.shopCartButton} ${s.active}` : s.shopCartButton }/>
      {
        cartOpen &&
        <div className={s.shopCart}>

        </div>
      }
      </div>
      <div className={s.presentation}>

      </div>
    </header>
  )
}
