import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Welcome from "./komponen/home";
import Profil from "./komponen/profil";
import FunFact from "./komponen/funfact";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", background: "#ffe6f0" }}>
        <Link to="/" style={{ margin: "10px" }}>Home</Link>
        <Link to="/profil" style={{ margin: "10px" }}>Profil</Link>
        <Link to="/funfact" style={{ margin: "10px" }}>FunFact</Link>
        <Link to="/skills" style={{ margin: "10px" }}>Skills</Link>
        <Link to="/contact" style={{ margin: "10px" }}>Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/funfact" element={<FunFact />} />
         <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
