import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    return (
      <div className="todolist flex center column">
        <div className="list">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoList;