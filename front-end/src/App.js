import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/dashbord/Navbar';
import Home from './pages/admin/Home';
import Sidebar from './components/dashbord/Sidebar';
import Template from './layouts/Template';
import Employes from './pages/admin/Employes';
import Conges from './pages/admin/Conges';
import Paie from './pages/admin/Paie';
import Presence from './pages/admin/Presence';
import Rapport from './pages/admin/Rapport';
import Notes from './pages/admin/Notes';

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
             <Route path='notes' element={<Notes />}/>
             <Route path='payment' element={<Paie />}/>
             <Route path='rapport' element={<Rapport />}/>
          </Routes>            
        </Template>
      </div>
    </BrowserRouter>  
  );
}

export default App;
