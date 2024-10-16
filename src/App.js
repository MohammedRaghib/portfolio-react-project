import './App.css';
import './logo.svg';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <nav className="bg-blue-600 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">
            <Link to="/" className="hover:text-gray-300">Portfolio</Link>
          </div>
          <div className="space-x-4">
            <Link to="/home" className="text-white hover:bg-blue-500 px-3 py-2 rounded">Home</Link>
            <Link to="/about" className="text-white hover:bg-blue-500 px-3 py-2 rounded">About</Link>
            <Link to="/contact" className="text-white hover:bg-blue-500 px-3 py-2 rounded">Contact</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
