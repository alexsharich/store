import React, { useState } from 'react'
import s from './Header.module.css'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../bll/store';
import { ItemType } from '../../bll/productsReducer';
import { Order } from '../order/Order';

export const Header=()=> {

  let [cartOpen,setCartOpen]= useState(false)
  const orders = useSelector<AppRootStateType,Array<ItemType>>(state=>state.productsReducer.orders)
  let totalPrice = 0
  orders.forEach(item=>totalPrice += Number.parseFloat(item.price))

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
          {
            orders.length 
            ?  orders.map((el)=>(
              <Order key={el.id} item={el}/>))
            :  <div className={s.emptyCart}>Cart is empty</div>
          }
          {orders.length>0 && <p className={s.totalPrice}>Total: {new Intl.NumberFormat().format(totalPrice)}$</p>}
        </div>
      }
      </div>
      <div className={s.presentation}>

      </div>
    </header>
  )
}
