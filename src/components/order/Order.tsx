import React from 'react'
import { useSelector } from 'react-redux'
import { ItemType } from '../../bll/productsReducer'
import { AppRootStateType } from '../../bll/store'
import s from './Order.module.css'

type OrderPropsType ={
  item:ItemType
}

export const Order:React.FC<OrderPropsType>=({item})=> {

  return (
    <div className={s.order}>
{
    <div className={s.item} key={item.id}>
      <img src={'./img/'+item.img}  />
      <h2>{item.title}</h2>
      <p>{item.price}$</p>
    </div>   
}
    </div>
  )
}
