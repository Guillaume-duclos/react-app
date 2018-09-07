import React, { Component } from 'react';
import TodoList from "../todolist/TodoList";
import Navigation from "../navigation/Navigation";

class Container extends Component {

  state = {
    status: 0
  }

  getStatus = (status) => {
    this.setState({status});
  }

  render() {
    return (
      <div className="container flex row between">
        <Navigation today={this.props.today} thisweek={this.props.thisweek} getStatus={this.state.status}/>
        <TodoList getStatus={this.getStatus}/>
      </div>
    );
  }
}

export default Container;