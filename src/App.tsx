import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import MapSidebar from "../src/Pages/Map"; // or the correct path
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';

import './App.css'

function App() {

  return (
    <Router>
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/map" element={<MapSidebar />} />
          
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
