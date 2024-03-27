import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './layouts/Navbar';
import Home from './pages/Home';
import Sidebar from './layouts/Sidebar';
import Template from './layouts/Template';

function App() {
  return (
      <div className=''>
        <Template sidebar={<Sidebar/>} navbar={<Navbar/>}>
          <Home/>
        </Template>
      </div>
  );
}

export default App;
