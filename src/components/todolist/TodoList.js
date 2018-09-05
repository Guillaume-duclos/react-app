import React, { Component } from 'react';
import Tasks from "../tasks/Tasks";

class TodoList extends Component {

  state = {
    task: '',
    tasks: []
  }

  setNewTask = (event) => {
    this.setState({task: event.target.value});
  }

  addTask = (event) => {
    if(this.refs.newTaskInput.value !== "") {
      event.preventDefault();
      this.setState({
        task: '',
        tasks: [...this.state.tasks, this.state.task]
      });
      this.refs.newTaskInput.value = "";
      this.props.getStatus(this.state.tasks.length + 1);
    }
  }

  validetask = (item, index) => {

  }

  deleteTask = (item, index) => {
    let tasks = this.state.tasks.slice();
    tasks.splice(index, 1);
    this.setState({tasks});
    this.props.getStatus(this.state.tasks.length - 1);
  }

  updateFilter = (filter) => {
    switch (filter) {
      case 'all':

        break;
      case 'todo':

        break;
      case 'done':

        break;
      default:

    }
  }

  render() {
    return (
      <div className="todolist flex center column">
        <div className="list-container">
          <div className="list">
            <h2>Aujourd'hui</h2>
            <p>{this.state.tasks.length} {this.state.tasks.length > 1 ? 'taches' : 'tache'} à faire</p>
            <ul className="filter-container flex row around">
              <li className="pointer filter-active" onClick={() => this.updateFilter('all')}>Tout</li>
              <li className="pointer" onClick={() => this.updateFilter('todo')}>Tache à faire</li>
              <li className="pointer" onClick={() => this.updateFilter('done')}>Tache finit</li>
            </ul>
            <Tasks tasks={this.state.tasks} delete={this.deleteTask}/>
            <form className="add-task-container flex row between" onSubmit={this.addTask}>
              <input type="text" placeholder="Votre nouvelle tache à réaliser" ref="newTaskInput" onChange={this.setNewTask}/>
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