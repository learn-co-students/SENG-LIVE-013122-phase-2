import React from 'react';
import ProjectListItem from './ProjectListItem';

function ProjectList({ projects }) {
  return (
    <div>
      ProjectList
      <ul>
        {
          projects.map(project => (
            <ProjectListItem
              key={project.id}
              project={project}
            />
          ))
        }
      </ul> 
    </div>
  )
}

export default ProjectList