import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToOrderTC, ItemType, onShowFullItemTC } from '../../bll/productsReducer'
import { AppRootStateType } from '../../bll/store'
import s from './ShowFullItem.module.css'

export const ShowFullItem=()=> {
  const fullItem = useSelector<AppRootStateType, ItemType>(state=>state.productsReducer.fullItem)
  const dispatch = useDispatch()
const emptyObject = {
  id:0,
    title:'',
    img:'',
    desc:'',
    category:'',
    price:''
}
  return (
    <div className={s.fullItem}>
      <div>
        <h1 className={s.closeModal} onClick={()=>dispatch(onShowFullItemTC(false,emptyObject))}>x</h1>
        <img src={'./img/'+fullItem.img}  />
        <h1>{fullItem.title}</h1>
        <p>{fullItem.desc}</p>
        <b>{fullItem.price}$</b>
        <div className={s.addToCart} onClick={()=>dispatch(addToOrderTC(fullItem))}>+</div>
      </div>
    </div>
  )
}
