```jsx
import React from 'react'

function ProjectListItem({ project }) {
  // ...
}

export default ProjectListItem
```

```jsx
  <ProjectListItem
    key={project.id}
    project={project}
  />
         
}

export default ProjectList
```

We can also pass properties individually

```jsx
import React from 'react'

function ProjectListItem({ id, name, image, link, about }) {
  // ...
}

export default ProjectListItem
```

```jsx
  <ProjectListItem
    key={project.id}
    id={project.id}
    name={project.name}
    image={project.image}
    link={project.link}
    about={project.about}
  />
         
}

export default ProjectList
```

Or this:

```jsx
import React from 'react'

function ProjectListItem({ id, name, image, link, about }) {
  // ...
}

export default ProjectListItem
```

```jsx
  <ProjectListItem
    key={project.id}
    {...project}
  />
         
}

export default ProjectList
```

# Destructing Discussion

```jsx
import React from 'react';
import ProjectListItem from './ProjectListItem';

function ProjectList({ projects }) {
  console.log(projects)
  return (
    <div>
      {"nothing here"}
    </div>
  )
}

export default ProjectList
```

equivalent to:

```jsx
import React from 'react';
import ProjectListItem from './ProjectListItem';

function ProjectList(props) {
  const { projects } = props;
  console.log(projects)
  return (
    <div>
      {"nothing here"}
    </div>
  )
}

export default ProjectList
```
