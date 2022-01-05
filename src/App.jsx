
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Cart } from './Components/Pages/Cart';
import { ErrorPage } from './Components/Pages/ErrorPage';
import { MainPage } from './Components/Pages/MainPage';
import { Singleproduct } from './Components/Pages/Singleproduct';

function App() {
  return (
    <Routes>
      <Route path= '/' element = {<MainPage/>} exact/>
      <Route path= '/products/:id' element = {<Singleproduct/>} exact/>
      <Route path= '/cart' element = {<Cart/>} exact/>
      <Route path= '*' element = {<ErrorPage/>} exact/>
    </Routes>
  );
}

export default App;
