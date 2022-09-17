import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToOrderTC, ItemType, onShowFullItemTC } from '../../bll/productsReducer'
import { AppRootStateType } from '../../bll/store'
import s from './Item.module.css'

type ItemPropsType = {
  item:ItemType
}

export const Item:React.FC<ItemPropsType>=({item})=> {

  const dispatch = useDispatch()
const isShowFullItem = useSelector<AppRootStateType,boolean>(state=>state.productsReducer.isShowFullItem)

  const addToOrder = (item:ItemType)=>{
    dispatch(addToOrderTC(item))
  }
  const changeIsShowFullItem = (item:ItemType)=>{
    dispatch(onShowFullItemTC(true,item))
  }

  return (
    <div className={s.item}>
      <img src={'./img/'+item.img} onClick={()=>changeIsShowFullItem(item)} />
      <h1>{item.title}</h1>
      <p>{item.desc}</p>
      <b>{item.price}$</b>
      <div className={s.addToCart} onClick={()=>addToOrder(item)}>+</div>
    </div>
  
  )
}
