import { applyMiddleware, combineReducers, createStore } from 'redux'
import  thunkMiddleware  from 'redux-thunk'
import { productsReducer } from './productsReducer'

const rootReducer = combineReducers({
  productsReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware))
export type AppRootStateType = ReturnType<typeof rootReducer>