
import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Landing from './pages/landing';
import Register from './pages/register';
import Navbar from './assets/app/navbar';
import Login from './pages/login';
import {FirebaseAppProvider} from 'reactfire';
import firebaseConfig from './firebaseConfig';

function App() {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </HashRouter>
    </FirebaseAppProvider >
  );
}

export default App;
