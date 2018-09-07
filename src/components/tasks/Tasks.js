import React, {Component} from 'react';

class Tasks extends Component {

  generateItems = () => {

    console.log(this.props.filter);

    if(this.props.filter === 'all') {
      return(
        this.props.tasks.map((item, index) => {
          return (
            <li key={index} className="flex row between">
              <p className={this.props.validateTasks.includes(index) ? 'finished-task' : ''} ref={index}>{item}</p>
              <button className="valide-task-button pointer" onClick={() => this.props.validateTask(index)}/>
              <button className="delete-task-button pointer" onClick={() => this.props.delete(item, index)}/>
            </li>
          )
        })
      )
    }

    else if(this.props.filter === 'todo') {
      return(
        this.props.tasks.map((item, index) => {
          if(!this.props.validateTasks.includes(index)) {
            return(
              <li key={index} className="flex row between">
                <p className={this.props.validateTasks.includes(index) ? 'finished-task' : ''} ref={index}>{item}</p>
                <button className="valide-task-button pointer" onClick={() => this.props.validateTask(index)}/>
                <button className="delete-task-button pointer" onClick={() => this.props.delete(item, index)}/>
              </li>
            )
          }
        })
      )
    }

    else if(this.props.filter === 'done') {
      return(
        this.props.tasks.map((item, index) => {
          if(this.props.validateTasks.includes(index)) {
            return(
              <li key={index} className="flex row between">
                <p className={this.props.validateTasks.includes(index) ? 'finished-task' : ''} ref={index}>{item}</p>
                <button className="valide-task-button pointer" onClick={() => this.props.validateTask(index)}/>
                <button className="delete-task-button pointer" onClick={() => this.props.delete(item, index)}/>
              </li>
            )
          }
        })
      )
    }

  }

  render() {
    return (
      <ul className="list-item">
        {this.generateItems()}
      </ul>
    );
  }
}



export default Tasks;