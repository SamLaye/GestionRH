import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
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
import Connexion from './pages/connexion/Connexion';
import LeaveTypeSection from './components/CongesComponents copy/LeaveType/LeaveTypeSection';
import { PendingLeaves } from './components/CongesComponents copy/PendingLeave/PendingLeaves';
import { ApprovedLeaves } from './components/CongesComponents copy/ApproveLeave/ApprovedLeaves';
import TotalLeaves from './components/CongesComponents copy/TotalLeave/TotalLeaves';
import GrantLeave from './components/CongesComponents copy/GrantLeave/GrantLeave';



function App() {
  function ProtectedRoute({ children }) {
    const token = localStorage.getItem("token");
    if (!token) {
      // Utilisateur non authentifié, redirection vers la page de connexion
      return <Navigate to="/connexion" />;
    }
    // Utilisateur authentifié, rendu du composant enfant
    return children;
  }
  return (
    <BrowserRouter>
        <Routes>
        <Route path='connexion' element={<Connexion />} />
        </Routes>
        <ProtectedRoute>
      <Template sidebar={<Sidebar/>} navbar={<Navbar/>}>
        <Routes>
            <Route index element={<Home/> }/>
            <Route path='employes' element={<Employes/>}/>
            <Route path='conges' element={<Conges  />}>
               <Route index element={<PendingLeaves   />} />
               <Route path="approved-leaves" element={<ApprovedLeaves  />} />
               <Route path="total-leaves" element={<TotalLeaves  />} />
               <Route path="leave-type" element={<LeaveTypeSection  />} />
               <Route path="view-employees" element={<GrantLeave />} />
            </Route>
            <Route path='presence' element={<Presence />}/>
            <Route path='notes' element={<Notes />}/>
            <Route path='payment' element={<Paie />}/>
            <Route path='rapport' element={<Rapport />}/>
        </Routes>            
      </Template>
      </ProtectedRoute>
    </BrowserRouter>  
  );
}

export default App;
