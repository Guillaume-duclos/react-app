import React, { Component } from 'react';
import TodoList from "../todolist/TodoList";
import Navigation from "../navigation/Navigation";

class Container extends Component {
  render() {
    return (
      <div className="container flex row between">
        <Navigation/>
        <TodoList/>
      </div>
    );
  }
}

export default Container;