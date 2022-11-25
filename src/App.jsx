
import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Landing from './pages/landing';
import Register from './pages/register';
import Navbar from './components/app/navbar';
import Login from './pages/login';
import {FirebaseAppProvider} from 'reactfire';
import firebaseConfig from './firebaseConfig';
import Home from './pages/home';
import { UserContextProvider } from './context/userContext';
import ProtectedRoute from './wrappers/protectedRoute';

function App() {
  return (
    <UserContextProvider>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <HashRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </HashRouter>
      </FirebaseAppProvider >
    </UserContextProvider>
  );
}

export default App;
