import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
 return(
  <div className="App">
    <BrowserRouter>
      <header className="App-header">
        <NavBar/>
      </header>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
        
        <Route path='/detail/:idItem' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<h1 className='h1Error'>Uy! Esta página no existe :(.</h1>}/>
      </Routes>
    </BrowserRouter>
  </div>
 );
}

export default App;
