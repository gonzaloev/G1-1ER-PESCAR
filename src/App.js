/* import logo from './logo.svg'; */
import './App.css';
import NavigationBar from './componentes/navBar/navigationBar';
import Home from './paginas';
import 'bootstrap/dist/css/bootstrap.min.css';
import Peliculas from './paginas/Peliculas/Peliculas'
import Series from './paginas/Series/Series'
import SobreNosotros from './paginas/sobreNosotros'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { BuscarPelicula } from './paginas/Peliculas/BuscarPelicula';
import Genero from './paginas/Generos/Genero';
import { Loader } from './componentes/Loader/Loader';

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
          <Route path='/generos/:genero' element={<Genero/>}/>
          <Route path='/loader' element={<Loader/>}/>
        </Routes>
      </BrowserRouter>

    </div> 
  
  );
}

export default App;
