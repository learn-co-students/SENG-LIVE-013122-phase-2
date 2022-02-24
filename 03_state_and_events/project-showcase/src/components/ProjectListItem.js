import React, { useState } from "react";

/* 
use state to implement a "clap" feature
when the clap button is clicked, 
update the number of claps for the project

- import the useState hook
- create your initial state
- update the JSX to use the state variable to display the number of claps
- add an event listener to the button for a click event
- when the button is clicked, update state and increment the number of claps

- BONUS: fix the accessibility issue with the button!

https://reactwithhooks.netlify.app/docs/handling-events.html
*/

function ProjectItem({
  id,
  name,
  about,
  phase,
  link,
  image
}) {
  const [clapCount, setClapCount] = useState(0);
  // optionally we can destructure individual properties from project
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
      </footer>
    </li>
  );
}

export default ProjectItem;


