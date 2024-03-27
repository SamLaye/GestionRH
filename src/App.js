import './App.css';
import Navbar from './layouts/Navbar';
import Home from './pages/Home';
import Sidebar from './layouts/Sidebar';

function App() {
  return (
      <div className='grid-container'>
        <Navbar />
        <Sidebar />
        <Home />
      </div>
  );
}

export default App;
