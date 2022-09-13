import { useSelector } from 'react-redux';
import './App.css';
import { ItemType } from './bll/productsReducer';
import { AppRootStateType } from './bll/store';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Items } from './components/items/Items';

function App() {

const items = useSelector<AppRootStateType,Array<ItemType>>(state=>state.productsReducer.items)

  return (
    <div className="wrapper">
      <Header/>
      <Items items={items}/>
      <Footer/>
    </div>
  );
}

export default App;
