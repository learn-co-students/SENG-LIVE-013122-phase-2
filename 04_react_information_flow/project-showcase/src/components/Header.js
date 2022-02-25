import React from 'react';

function Header({
  isDarkMode,
  onToggleDarkMode
}) {
  
  
  function handleClick() {
    onToggleDarkMode()
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
