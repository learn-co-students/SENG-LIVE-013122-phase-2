import React from 'react'

function ProjectListItem({ project }) {
  console.log('project', project)
  return (
    <li>
      <figure>
        <img src={project.image} alt={`project: ${project.name}`} />
      </figure>
      <article>
        <h4>{project.name}</h4>
        <p>{project.about}</p>
      </article>
    </li>
  )
}

export default ProjectListItem