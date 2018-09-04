import React from 'react';

const Tasks = props => (
  <ul>
    { props.tasks.map((item, index) =>
      <li key={index} className="flex row between">
        <p>{item}</p>
        <button onClick={() => props.delete(item, index)}>Supprimer</button>
      </li>
    ) }
  </ul>
);

export default Tasks;