import React, { useState } from "react";
import { FaPencilAlt, FaTrash } from 'react-icons/fa';


function ProjectItem({
  id,
  name,
  about,
  phase,
  link,
  image,
  enterProjectEditModeFor
}) {
  const [clapCount, setClapCount] = useState(0);
  // optionally we can destructure individual properties from project

  function handleEditClick() {
    enterProjectEditModeFor(id);
  }

  function handleDeleteClick() {

  }
  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button onClick={() => setClapCount(clapCount => clapCount + 1)} className="claps">👏{clapCount}</button>
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

export default ProjectItem;


