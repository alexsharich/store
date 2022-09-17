import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CategoryType, KeyCategoryType } from '../../bll/categoriesReducer'
import { chooseCategoryTC } from '../../bll/productsReducer'
import { AppRootStateType } from '../../bll/store'
import s from './Categories.module.css'

export const Categories = () => {
  
  const dispatch = useDispatch()
  const categories = useSelector<AppRootStateType,Array<CategoryType>>(state=>state.categoriesReducer.categories)

const chooseCategorie = (category:KeyCategoryType)=>{
  dispatch(chooseCategoryTC(category))
}

  return (
    <div className={s.categories}>
      {categories.map(el=>(
        <div key={el.key} onClick={()=>chooseCategorie(el.key)}>
          {el.name}
        </div>
      ))}
    </div>
  )
}
