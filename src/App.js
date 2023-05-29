
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Alec Hunter</h1>
      </header>
    </div>
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