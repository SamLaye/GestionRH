import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {BrowserRouter, Routes, Route, Navlink} from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Home from './pages/Home';
import Sidebar from './layouts/Sidebar';
import Template from './layouts/Template';
import Employes from './pages/Employes';
import Conges from './pages/Conges';
import Paie from './pages/Paie';
import Presence from './pages/Presence';
import Rapport from './pages/Rapport';

function App() {
  return (
    <BrowserRouter>
      <div className=''>
        <Template sidebar={<Sidebar/>} navbar={<Navbar/>}>
          <Routes>
             <Route index element={<Home/> }/>
             <Route path='employes' element={<Employes/>}/>
             <Route path='conges' element={<Conges/>}/>
             <Route path='presence' element={<Presence />}/>
             <Route path='payment' element={<Paie />}/>
             <Route path='rapport' element={<Rapport />}/>
          </Routes>            
        </Template>
      </div>
    </BrowserRouter>  
  );
}

export default App;
