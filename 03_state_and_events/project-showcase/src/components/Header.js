import React, { useState } from 'react';

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  function handleClick() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleClick}>{isDarkMode ? "Light" : "Dark"} Mode</button>
    </header>
  );
}

export default Header;
