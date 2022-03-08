import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header({
  isDarkMode,
  onToggleDarkMode
}) {
  
  
  function handleClick() {
    onToggleDarkMode()
  }

  return (
    <nav>
      <Link to="/">
        <h1 className="branding">
          <span className="logo">{"//"}</span>
          Project Showcase
        </h1>
      </Link>
      <div className="navigation">
        <NavLink className="button" exact to="/projects">
          All Projects
        </NavLink>
        <NavLink className="button" exact to="/projects/new">
          Add Project
        </NavLink>
        <button onClick={handleClick}>{isDarkMode ? 'Dark' : 'Light'} Mode</button>
      </div>
    </nav>
  );
}

export default Header;
