import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';
import ProjectEditForm from './components/ProjectEditForm';



function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState([])
  const [projectToEdit, setProjectToEdit] = useState(null);

  function completeEditing() {
    setProjectToEdit(null);
  }

  function enterProjectEditModeFor(projectId) {
    setProjectToEdit(projectId);
  }

  function fetchProjects() {
    fetch('http://localhost:4000/projects')
      .then(res => res.json())
      .then(projects => setProjects(projects))
  }

  function onToggleDarkMode() {
    setIsDarkMode(isDarkMode => !isDarkMode)
  }

  function onCreateProject(newProject) {
    setProjects(projects => [...projects, newProject])
  }

  function renderForm() {
    if (projectToEdit) {
      return (
        <ProjectEditForm
          projectToEdit={projectToEdit}
          completeEditing={completeEditing}
        />
      )
    } else {
      return (
        <ProjectForm onCreateProject={onCreateProject} />
      )
    }
  }

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header
        isDarkMode={isDarkMode}
        onToggleDarkMode={onToggleDarkMode}
      />
      {renderForm()}
      <button onClick={() => fetchProjects()}>Load Projects</button>
      <ProjectList 
        projects={projects} 
        enterProjectEditModeFor={enterProjectEditModeFor}
      />
    </div>
  );
}

export default App;
