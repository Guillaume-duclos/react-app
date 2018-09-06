import React, { Component } from 'react';
import TodoList from "../todolist/TodoList";
import Navigation from "../navigation/Navigation";

class Container extends Component {

  state = {
    status: 0
  }

  getStatus = (status) => {
    console.log('Container : nombre de todo = ' + status);
    this.setState({status});
  }

  render() {
    return (
      <div className="container flex row between">
        <Navigation page={this.props.page} getStatus={this.state.status}/>
        <TodoList getStatus={this.getStatus}/>
      </div>
    );
  }
}

export default Container;