import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Landing from './pages/landing';
import Climate from './pages/Climate';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Climate/>}/>
       
      </Routes>
    </HashRouter>
  )
}

export default App
