import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';



function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState([])

  function fetchProjects() {
    fetch('http://localhost:4000/projects')
      .then(res => res.json())
      .then(projects => setProjects(projects))
  }

  function onToggleDarkMode() {
    setIsDarkMode(isDarkMode => !isDarkMode)
  }

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header
        isDarkMode={isDarkMode}
        onToggleDarkMode={onToggleDarkMode}
      />
      <ProjectForm />
      <button onClick={() => fetchProjects()}>Load Projects</button>
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
