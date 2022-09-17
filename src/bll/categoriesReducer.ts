import { AppRootStateType } from "./store"

const initialState: InitialStateType = {
categories:[
  {
    key:'all',
    name:'All'
  },
  {
    key:'chairs',
    name:'Chairs'
  },
  {
    key:'tables',
    name:'Tables'
  },
  {
    key:'sofas',
    name:'Sofas'
  },
  {
    key:'lights',
    name:'Lights'
  }
]
}

type InitialStateType = {
  categories:Array<CategoryType>
}
export type KeyCategoryType = 'sofas'| 'tables' |'lights'|'chairs'|'all'

export type CategoryType ={
  key:KeyCategoryType
  name:string
}
type ActionType = any

export const categoriesReducer = (state:InitialStateType=initialState,action:ActionType):InitialStateType=>{
  switch (action.type){
    case 'CHANGE-CATEGORY':
      return {
         ...state,
      
        }
      default: 
        return state
  } 
}



