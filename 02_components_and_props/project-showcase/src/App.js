import './App.css';
import Header from './components/Header';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';
// import ProjectListItem from './components/ProjectListItem';

import projects from './projects';

function App() {
  return (
    <div className="App">
      App
      <Header />
      <ProjectForm />
      <ProjectList
        projects={projects}
      />
    </div>
  );
}

export default App;
