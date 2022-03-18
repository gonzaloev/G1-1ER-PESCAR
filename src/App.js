/* import logo from './logo.svg'; */
import './App.css';
import NavigationBar from './componentes/navBar/navigationBar';
import Home from './paginas';
import 'bootstrap/dist/css/bootstrap.min.css';
import Peliculas from './paginas/Peliculas/peliculas'
import Series from './paginas/Series/series'

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
     <div className="App">
       
       <BrowserRouter>
      {/* <Home/> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='peliculas' element={<Peliculas/>}/>
          <Route path='series' element={<Series/>}/>
        </Routes>
      </BrowserRouter>

    </div> 
  
  );
}

export default App;
