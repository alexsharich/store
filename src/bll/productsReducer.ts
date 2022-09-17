import { KeyCategoryType } from "./categoriesReducer"
import { AppRootStateType } from "./store"

const initialState: InitialStateType = {
  isShowFullItem:false,
  fullItem:{
    id:0,
    title:'',
    img:'',
    desc:'',
    category:'',
    price:''
  },
  currentItems:[],
  orders:[],
  items:[
    {
      id:1,
      title:'thing1',
      img:'1.jpeg',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. In eaque quibusdam nobis!',
      category:'chairs',
      price:'41.99'
    },
    {
      id:2,
      title:'thing2',
      img:'2.jpeg',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. In eaque quibusdam nobis!',
      category:'tables',
      price:'50.99'
    },
    {
      id:3,
      title:'thing3',
      img:'3.jpeg',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. In eaque quibusdam nobis!',
      category:'chairs',
      price:'85.99'
    },
    {
      id:4,
      title:'thing4',
      img:'4.jpeg',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. In eaque quibusdam nobis!',
      category:'sofas',
      price:'124.99'
    },
    {
      id:5,
      title:'thing5',
      img:'5.jpeg',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. In eaque quibusdam nobis!',
      category:'sofas',
      price:'54.99'
    },
    {
      id:6,
      title:'thing6',
      img:'6.jpeg',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. In eaque quibusdam nobis!',
      category:'chairs',
      price:'21.99'
    },
    {
      id:7,
      title:'thing7',
      img:'7.jpeg',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. In eaque quibusdam nobis!',
      category:'lights',
      price:'31.99'
    },
    
    {
      id:8,
      title:'thing8',
      img:'8.jpeg',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. In eaque quibusdam nobis!',
      category:'tables',
      price:'34.99'
    },
]
}
export type ItemType = {
    id:number
    title:string
    img:string
    desc:string
    category:string
    price:string
}
type InitialStateType = {
  isShowFullItem:boolean 
  fullItem: ItemType
  currentItems:Array<ItemType>
  orders:Array<ItemType>
items:Array<ItemType>
}

type ActionType = AddToOrderActionType 
| DeleteOrderActionTtype 
| ChooseCategoryActionType 
| SetCurrentItmesActionType
| OnShowFullItemActionType 

export const productsReducer = (state:InitialStateType=initialState,action:ActionType):InitialStateType=>{
  switch (action.type){
    case 'ADD-TO-ORDER':
      return {
         ...state,
        orders:[...state.orders,action.item] 
        }
     case 'DELETE-ORDER' :
return {
  ...state,
  orders:state.orders.filter((item:ItemType)=>item.id !==action.id )
}
case 'CHOOSE-CATEGORY':
  return {
    ...state,
    currentItems:state.items.filter((item:ItemType)=>item.category === action.category)
  }
  case 'SET-CATEGORY' :
    return {
      ...state,
      currentItems:[...state.items]
    }
  case 'CHANGE-SHOW-FULL-ITEM':
    let copyFullItem = {...state.fullItem}
    copyFullItem = action.item
    return {
      ...state,
      isShowFullItem:action.value,
      fullItem:{...copyFullItem} 
    }  
      default: 
        return state
  } 
}


const addToOrderAC = (item:ItemType)=>{
  return {
    type:'ADD-TO-ORDER',
    item
  }
}
type AddToOrderActionType = {
  type:'ADD-TO-ORDER'
  item:ItemType
}
export const addToOrderTC = (item:ItemType):any=>{
  return (dispatch:any,getState:any)=>{  
    let isInArray = false
    const state = getState()
    state.productsReducer.orders.forEach((el:ItemType) => {
      if(el.id === item.id){
        isInArray = true
      }    
    })
    if (!isInArray){
      dispatch(addToOrderAC(item))
    }
  }
}
type DeleteOrderActionTtype = {
  type:'DELETE-ORDER'
  id:number
}
const deleteOrderAC = (id:number):DeleteOrderActionTtype=>{
  return {
    type:'DELETE-ORDER',
    id
  }
}
export const deleteOrderTC = (id:number):any=>{
  return (dispatch:any)=>{ 
    dispatch(deleteOrderAC(id))
  }
}
type ChooseCategoryActionType = {
  type:'CHOOSE-CATEGORY',
  category:KeyCategoryType
}
const chooseCategoryAC = (category:KeyCategoryType)=>{
  return {
    type :'CHOOSE-CATEGORY',
    category
  }
}

export const chooseCategoryTC = (category:KeyCategoryType):any=>{
  return (dispatch:any)=>{
    if(category === 'all'){
      dispatch(setCurrentItemsAC())
    }else {
      dispatch(chooseCategoryAC(category))
    }
   
  }
}
type SetCurrentItmesActionType = {
  type : 'SET-CATEGORY'
}
const setCurrentItemsAC = ()=>{
  return {
    type : 'SET-CATEGORY'
  }
}
export const setCurrentItemsTC = ():any=>{
  return (dispatch:any)=>{
    dispatch(setCurrentItemsAC())
  }
}
type OnShowFullItemActionType = {
  type:'CHANGE-SHOW-FULL-ITEM',
  value:boolean,
  item:ItemType 
}
const onShowFullItemAC = (value:boolean,item:ItemType):OnShowFullItemActionType=>{
  return {
    type:'CHANGE-SHOW-FULL-ITEM',
    value,
    item
  }
}
export const onShowFullItemTC = (value:boolean,item:ItemType):any=>{
  return(dispatch:any)=>{
    dispatch(onShowFullItemAC(value,item))
  }
}