/* import logo from './logo.svg'; */
import './App.css';
import NavigationBar from './componentes/navBar/navigationBar';
import Home from './paginas';
import 'bootstrap/dist/css/bootstrap.min.css';
import Peliculas from './paginas/Peliculas/Peliculas'
import Series from './paginas/Series/Series'

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
     <div className="App">
       
       <BrowserRouter>
      {/* <Home/> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Peliculas' element={<Peliculas/>}/>
          <Route path='/Series' element={<Series/>}/>
        </Routes>
      </BrowserRouter>

    </div> 
  
  );
}

export default App;
