
import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Landing from './pages/landing';
import Register from './pages/register';
import Navbar from './assets/app/navbar';


function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </HashRouter>
  )
}

export default App
