
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import Principal from './paginas/Principal';
import Sesion from './paginas/Sesion';

/**
 * desde este archivo se gestionan las rutas de la aplicacion con react-router-do
 * @returns {jsx} 
 */

export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Sesion/>} />
        <Route exact path = "/home" element= {<Principal/>}/>
      </Routes>
    </BrowserRouter>
  );
}


