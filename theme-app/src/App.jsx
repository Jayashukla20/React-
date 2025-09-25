import { useState } from 'react';
import Lighttheme from './components/Lighttheme';
import Darktheme from './components/Darktheme';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle function flips dark ↔ light
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      {/* Theme toggle button */}
      <button className="theme-btn" onClick={toggleTheme}>
        {isDarkMode ? "Switch to Light Mode 🌞" : "Switch to Dark Mode 🌙"}
      </button>

      {/* Conditional rendering of theme components */}
      {isDarkMode ? <Darktheme /> : <Lighttheme />}
    </div>
  );
}

export default App;
