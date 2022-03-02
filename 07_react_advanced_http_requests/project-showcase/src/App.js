import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';
import ProjectEditForm from './components/ProjectEditForm';
import { BiRefresh } from 'react-icons/bi'



function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState([])
  const [projectToEdit, setProjectToEdit] = useState(null);

  useEffect(() => {
    fetchProjects()
  },[])

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

  function onUpdateProject(updatedProject) {
    console.log(updatedProject);
    // update projects piece of state with updatedProject
    const updatedProjects = projects.map(originalProject => {
      if (updatedProject.id === originalProject.id) {
        return updatedProject;
      } else {
        return originalProject;
      }
    })
    setProjects(updatedProjects)
    completeEditing();
  }

  function onDeleteProject(projectId) {
    console.log('deleting project with id', projectId)
    const updatedProjects = projects.filter(originalProject => {
      return originalProject.id !== projectId;
    })
    setProjects(updatedProjects)
  }

  function renderForm() {
    if (projectToEdit) {
      return (
        <ProjectEditForm
          projectToEdit={projectToEdit}
          onUpdateProject={onUpdateProject}
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
      <button onClick={() => fetchProjects()}><BiRefresh /></button>
      <ProjectList 
        projects={projects} 
        enterProjectEditModeFor={enterProjectEditModeFor}
        onDeleteProject={onDeleteProject}
        onUpdateProject={onUpdateProject}
      />
    </div>
  );
}

export default App;
