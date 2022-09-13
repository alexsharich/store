import React from 'react'
import { ItemType } from '../../bll/productsReducer'
import s from './Item.module.css'

type ItemPropsType = {
  item:ItemType
}

export const Item:React.FC<ItemPropsType>=({item})=> {
  return (
    <div className={s.item}>
      <img src={'./img/'+item.img}  />
      <h1>{item.title}</h1>
      <p>{item.desc}</p>
      <b>{item.price}$</b>
      <div className={s.addToCart}>+</div>
    </div>
  
  )
}
