const initialState: InitialStateType = {
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
    category:'chairs',
    price:'124.99'
  },
  {
    id:5,
    title:'thing5',
    img:'5.jpeg',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. In eaque quibusdam nobis!',
    category:'chairs',
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
    category:'chairs',
    price:'31.99'
  },
  
  {
    id:8,
    title:'thing8',
    img:'8.jpeg',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. In eaque quibusdam nobis!',
    category:'chairs',
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
items:Array<ItemType>
}

type ActionType = any

export const productsReducer = (state:InitialStateType=initialState,action:ActionType):InitialStateType=>{
  switch (action.type){
    case 'SET-PRODUCTS':
      return {
         ...state
        }
      default: 
        return state
  } 
}