import React, { Component } from 'react';
import Tasks from "../tasks/Tasks";

class TodoList extends Component {

  state = {
    task: '',
    tasks: [],
    validateTasks: [],
    filter: 'all'
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

  validateTask = (index) => {
    if(this.state.validateTasks.includes(index)) {
      let value = this.state.validateTasks.indexOf(index);
      if (value !== -1) {
        this.state.validateTasks.splice(value, 1);
      }
    } else {
      this.setState(prevState => ({
        validateTasks: [...prevState.validateTasks, index]
      }))
    }
  }

  deleteTask = (item, index) => {
    let tasks = this.state.tasks.slice();
    tasks.splice(index, 1);
    this.setState({tasks});
    this.props.getStatus(this.state.tasks.length - 1);

    let value = this.state.validateTasks.indexOf(index);
    if (value !== -1) {
      this.state.validateTasks.splice(value, 1);
    }
  }

  updateFilter = (filter) => {
    switch (filter) {
      case 'all':
        this.setState({filter: 'all'});
        break;
      case 'todo':
        this.setState({filter: 'todo'});
        break;
      case 'done':
        this.setState({filter: 'done'});
        break;
      default:
        this.setState({filter: 'all'});
    }
  }

  render() {
    return (
      <div className="todolist flex center column">
        <div className="list-container">
          <div className="list">
            <h2>{this.props.day}</h2>
            <p>{this.state.tasks.length} {this.state.tasks.length > 1 ? 'taches' : 'tache'} à faire</p>
            <ul className="filter-container flex row around">
              <li className={this.state.filter === 'all'  ? 'filter filter-active' : 'pointer'} onClick={() => this.updateFilter('all')}>Tout</li>
              <li className={this.state.filter === 'todo' ? 'filter filter-active' : 'pointer'} onClick={() => this.updateFilter('todo')}>Tache à faire</li>
              <li className={this.state.filter === 'done' ? 'filter filter-active' : 'pointer'} onClick={() => this.updateFilter('done')}>Tache finit</li>
            </ul>
            <Tasks
              tasks={this.state.tasks}
              validateTasks={this.state.validateTasks}
              validateTask={this.validateTask}
              delete={this.deleteTask}
              filter={this.state.filter}
            />
            <form className="add-task-container flex row between" onSubmit={this.addTask}>
              <input type="text" placeholder="Nouvelle tache" ref="newTaskInput" onChange={this.setNewTask}/>
              <input type="submit" value="Ajouter" className="pointer"/>
            </form>
          </div>
          <div className="sub-layers sub-layer-1"/>
          <div className="sub-layers sub-layer-2"/>
        </div>
      </div>
    );
  }
}

export default TodoList;