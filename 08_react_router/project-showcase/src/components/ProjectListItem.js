import React, { useState } from "react";
import { FaPencilAlt, FaTrash } from 'react-icons/fa';


function ProjectListItem({
  id,
  name,
  about,
  phase,
  link,
  image,
  claps,
  enterProjectEditModeFor,
  onDeleteProject,
  onUpdateProject
}) {
  // optionally we can destructure individual properties from project

  function handleEditClick() {
    enterProjectEditModeFor(id);
  }

  function handleClapClick() {
    fetch(`http://localhost:4000/projects/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({claps: claps + 1})
    })
      .then(res => res.json())
      .then(updatedProject => {
        onUpdateProject(updatedProject)
      })
  }

  function handleDeleteClick() {
    console.log('delete me!')
    fetch(`http://localhost:4000/projects/${id}`, {
      method: 'DELETE'
    })
    onDeleteProject(id);
  }
  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button onClick={handleClapClick} className="claps">👏{claps}</button>
      </figure>

      <section className="details">
        <h4>{name}</h4>
        <p>{about}</p>
        {link ? (
          <p>
            <a href={link}>Link</a>
          </p>
        ) : null}
      </section>

      <footer className="extra">
        <span className="badge blue">Phase {phase}</span>
        <div className="manage">
          <button
            onClick={handleEditClick}
          >
            <FaPencilAlt />
          </button>
          <button
            onClick={handleDeleteClick}
          >
            <FaTrash />
          </button>
        </div>
      </footer>
    </li>
  );
}

export default ProjectListItem;


