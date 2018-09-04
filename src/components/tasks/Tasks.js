import React from 'react';

const Tasks = props => (
  <ul>
    { props.tasks.map((item, index) => <li key={index}>{item}</li>) }
  </ul>
);

export default Tasks;