import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import Landing from "./pages/landing";
import Register from "./pages/register";
import Navbar from "./assets/app/navbar";
import Login from "./pages/login";
import Home from "./pages/home";
import { IdiomContextProvider } from "./context/idiomContext";

function App() {
  return (
    <IdiomContextProvider>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </HashRouter>
    </IdiomContextProvider>
  );
}

export default App;
