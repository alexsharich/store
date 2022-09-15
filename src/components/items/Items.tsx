import React from 'react'
import { ItemType } from '../../bll/productsReducer'
import { Item } from '../item/Item'
import s from './Items.module.css'

type ItemsPropsType={
  items:Array<ItemType>
}

export const Items:React.FC<ItemsPropsType>=({items})=> {

  return (
    <main className={s.main}>
{
  items.map(item=>(
    <Item key={item.id} item={item}/>
  ))
}
    </main>
  )
}
