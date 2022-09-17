import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { ItemType, setCurrentItemsTC } from './bll/productsReducer';
import { AppRootStateType } from './bll/store';
import { Categories } from './components/categories/Categories';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Items } from './components/items/Items';
import { ShowFullItem } from './components/showFullItem/ShowFullItem';

function App() {

  const isShowFullItem = useSelector<AppRootStateType,boolean>(state=>state.productsReducer.isShowFullItem)
const items = useSelector<AppRootStateType,Array<ItemType>>(state=>state.productsReducer.currentItems)
const dispatch = useDispatch()

useEffect(()=>{
  dispatch(setCurrentItemsTC())
},[])

  return (
    <div className="wrapper">
      <Header/>
      <Categories/>
      <Items items={items}/>
      {isShowFullItem && <ShowFullItem/>}
      <Footer/>
    </div>
  );
}

export default App;
