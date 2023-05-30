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

// Header that is on every page
// Navigation component within the header that conditionally renders the pages
// Project component that is used multiple times in the portfolio section
// Footer component that is on every page

// Header - Every Page
  // Contains My Name and Navigation
    // Navigation Links: About Me, Portfolio, Contact, and Resume
    // Link corresponding to current page is highlighted
    // Clicking on a link changes to that section without page reload. New title is highlighted
// About Me - Conditional
  // About Me is the first displayed to new users
  // Recent Photo or Avatar and Short Bio
// Portfolio - Conditional
  // Six Projects with titles, links to deployed applications, and Github repository
// Contact - Conditional
  // Contact form with fields for a name, email address, and a message
  // If text is not entered, notification of required fields is given
  // Notification given if invalid email is entered
// Resume - Conditional
  // Link to downloadable resume and my proficiencies
// Footer - Every Page
  // Text or Icon links to GitHub and LinkedIn, and a third platform, like Stack Overflow or Twitter

export default App;