import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {BrowserRouter, Routes, Route, Navlink} from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Home from './pages/Home';
import Sidebar from './layouts/Sidebar';
import Template from './layouts/Template';
import Essaie from './components/Essaie';
import Employes from './pages/Employes';

function App() {
  return (
    <BrowserRouter>
      <div className=''>
        <Template sidebar={<Sidebar/>} navbar={<Navbar/>}>
          <Routes>
             <Route index element={<Home/> }/>
             <Route path='employes' element={<Employes/>}/>
          </Routes>            
        </Template>
      </div>
    </BrowserRouter>  
  );
}

export default App;
