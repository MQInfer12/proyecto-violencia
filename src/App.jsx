import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import Landing from "./pages/landing";
import Register from "./pages/register";
import Navbar from "./components/app/navbar";
import Login from "./pages/login";
import { FirebaseAppProvider } from "reactfire";
import firebaseConfig from "./firebaseConfig";
import { IdiomContextProvider } from "./context/idiomContext";
function App() {
  return (
    <IdiomContextProvider>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <HashRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </HashRouter>
      </FirebaseAppProvider>
    </IdiomContextProvider>
  );
}

export default App;
