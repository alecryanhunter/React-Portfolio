import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"
import Resume from "./pages/Resume"
import "./style.css"

function App() {
  const [active, setActive] = useState("about")
  
  return (
    <Router>
      <Header active={active} setActive={setActive}/>
      <Routes>
        <Route path="/" element={<About/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/*" element={<h2>404 Page Not Found</h2>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;