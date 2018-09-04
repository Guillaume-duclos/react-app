import React, { Component } from 'react';
import Tasks from "../tasks/Tasks";

class TodoList extends Component {

  state = {
    task: '',
    tasks: []
  }

  setNewTask = (event) => {
    console.log('Set new task function');
    this.setState({task: event.target.value});
  }

  addTask = (event) => {
    console.log('Add task function');
    event.preventDefault()
    this.setState({
      task: '',
      tasks: [...this.state.tasks, this.state.task]
    });
  }

  render() {
    return (
      <div className="todolist flex center column">
        <div className="list-container">
          <div className="list">
            <h2>Aujourd'hui</h2>
            <p>0 taches à faire</p>
            <Tasks tasks={this.state.tasks}/>
            <form className="add-task-container flex row between" onSubmit={this.addTask}>
              <input type="text" placeholder="Votre nouvelle tache à réaliser" onChange={this.setNewTask}/>
              <input type="submit" value="Ajouter" className="pointer"/>
            </form>
          </div>
          <div className="sub-layers sub-layer-1"></div>
          <div className="sub-layers sub-layer-2"></div>
        </div>
      </div>
    );
  }
}

export default TodoList;