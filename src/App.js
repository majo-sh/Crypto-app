
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import Principal from './paginas/Principal';
import Sesion from './paginas/Sesion';






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


