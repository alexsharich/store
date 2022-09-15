import React from 'react'
import { useDispatch } from 'react-redux'

import { addToOrderTC, ItemType } from '../../bll/productsReducer'
import s from './Item.module.css'

type ItemPropsType = {
  item:ItemType
}

export const Item:React.FC<ItemPropsType>=({item})=> {

  const dispatch = useDispatch()

  const addToOrder = (item:ItemType)=>{
    dispatch(addToOrderTC(item))
  }

  return (
    <div className={s.item}>
      <img src={'./img/'+item.img}  />
      <h1>{item.title}</h1>
      <p>{item.desc}</p>
      <b>{item.price}$</b>
      <div className={s.addToCart} onClick={()=>addToOrder(item)}>+</div>
    </div>
  
  )
}
