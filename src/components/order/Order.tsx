import React from 'react'
import { deleteOrderTC, ItemType } from '../../bll/productsReducer'
import { FaTrash } from "react-icons/fa";
import s from './Order.module.css'
import { useDispatch } from 'react-redux';

type OrderPropsType ={
  item:ItemType
}

export const Order:React.FC<OrderPropsType>=({item})=> {

const dispatch = useDispatch()

const deleteOrder = (id:number)=>{
  dispatch(deleteOrderTC(id))
}

  return (
    <div className={s.order}>
{
    <div className={s.item} key={item.id}>
      <img src={'./img/'+item.img}  />
      <h2>{item.title}</h2>
      <p>{item.price}$</p>
      <FaTrash className={s.deleteIcon} onClick={()=>deleteOrder(item.id)}/>
    </div>   
}
    </div>
  )
}
