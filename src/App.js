import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"
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
        <Route path="/React-Portfolio/" element={<About/>}/>
        <Route path="/React-Portfolio/portfolio" element={<Portfolio/>}/>
        <Route path="/React-Portfolio/contact" element={<Contact/>}/>
        <Route path="/React-Portfolio/resume" element={<Resume/>}/>
        <Route path="/React-Portfolio/*" element={<h2>404 Page Not Found</h2>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;