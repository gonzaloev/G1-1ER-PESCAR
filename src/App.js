/* import logo from './logo.svg'; */
import './App.css';
import Home from './paginas';
import 'bootstrap/dist/css/bootstrap.min.css';
import Peliculas from './paginas/Peliculas/Peliculas'
import Series from './paginas/Series/Series'
import SobreNosotros from './paginas/sobreNosotros'
import  {BuscarPelicula}  from './paginas/Peliculas/BuscarPelicula';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
     <div className="App">
       
       <BrowserRouter>
      {/* <Home/> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/peliculas/:id' element={<Peliculas/>}/> 
          <Route path='/series' element={<Series/>}/>
          <Route path='/sobreNosotros' element={<SobreNosotros/>}/>
          <Route path='/buscarPelicula/:nombrePelicula' element={<BuscarPelicula/>}/>
        </Routes>
      </BrowserRouter>

    </div> 
  
  );
}

export default App;
