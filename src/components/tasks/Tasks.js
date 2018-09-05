import React, {Component} from 'react';
//import PropTypes from 'prop-types';

class Tasks extends Component {

  valideTask = (index) => {
    //this.refs.index.style.textDecoration = "line-through";
    console.log(this.refs.index);
  }

  render() {
    return (
      <ul className="list-item">
        {this.props.tasks.map((item, index) =>
          <li key={index} className="flex row between">
            <p ref={index}>{item}</p>
            <button className="valide-task-button pointer" onClick={() => this.valideTask(index)}></button>
            <button className="delete-task-button pointer" onClick={() => this.props.delete(item, index)}></button>
          </li>
        )}
      </ul>
    );
  }
}

/*Tasks.propTypes = {
  delete: PropTypes.function
}*/

export default Tasks;