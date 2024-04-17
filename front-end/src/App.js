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
import Connexion from './pages/connexion/Connexion';
import LeaveTypeSection from './components/CongesComponents copy/LeaveType/LeaveTypeSection';
import { PendingLeaves } from './components/CongesComponents copy/PendingLeave/PendingLeaves';
import { ApprovedLeaves } from './components/CongesComponents copy/ApproveLeave/ApprovedLeaves';
import TotalLeaves from './components/CongesComponents copy/TotalLeave/TotalLeaves';
import GrantLeave from './components/CongesComponents copy/GrantLeave/GrantLeave';


const leavesData = [
  { id: 1, name: 'Liam', department: 'Development', date: '2021-09-09', reason: 'THIS IS A DEMO TEST', status: 'Pending' },
  { id: 2, name: 'Cory B Puente', department: 'UX', date: '2021-07-03', reason: 'Not feeling well, need to quarantine myself!', status: 'Approved' },
  { id: 3, name: 'Mark Lail', department: 'Customer Support', date: '2021-07-04', reason: "To attend my friend's funeral", status: 'Pending' },
  { id: 4, name: 'Patricia S Caldwell', department: 'Marketing', date: '2021-07-07', reason: 'Suffered from an accident.', status: 'Approved' }
];

const approveLeave = (id) => {
  // Cette fonction devrait mettre à jour l'état ou faire une requête au serveur
  // Pour cet exemple, nous allons juste afficher un message dans la console
  console.log(`Leave with ID ${id} approved`);
  // Mettez à jour votre état ou base de données ici
};

function App() {
  return (
    <BrowserRouter>
      <Template sidebar={<Sidebar/>} navbar={<Navbar/>}>
        <Routes>
            <Route index element={<Home/> }/>
            <Route path='employes' element={<Employes/>}/>
            <Route path='conges' element={<Conges leavesData={leavesData} approveLeave={approveLeave}/>}>
               <Route index element={<PendingLeaves  approveLeave={approveLeave}  leavesData={leavesData} />} />
               <Route path="approved-leaves" element={<ApprovedLeaves approveLeave={approveLeave} leavesData={leavesData} />} />
               <Route path="total-leaves" element={<TotalLeaves approveLeave={approveLeave} leavesData={leavesData} />} />
               <Route path="leave-type" element={<LeaveTypeSection approveLeave={approveLeave} leavesData={leavesData} />} />
               <Route path="view-employees" element={<GrantLeave approveLeave={approveLeave} leavesData={leavesData} />} />
            </Route>
            <Route path='presence' element={<Presence />}/>
            <Route path='notes' element={<Notes />}/>
            <Route path='payment' element={<Paie />}/>
            <Route path='rapport' element={<Rapport />}/>
        </Routes>            
      </Template>
    </BrowserRouter>  
  );
}

export default App;
