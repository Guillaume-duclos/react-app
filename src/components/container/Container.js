import React, {Component, Fragment} from 'react';
import TodoList from "../todolist/TodoList";
import Navigation from "../navigation/Navigation";

class Container extends Component {

  state = {
    status: 0
  }

  getStatus = (status) => {
    this.setState({status});
  }

  setVue = () => {
    if(this.props.today) {
      return(
        <div className="container flex row between">
          <Navigation today={this.props.today} thisweek={this.props.thisweek} getStatus={this.state.status}/>
          <TodoList day="Aujourd'hui" getStatus={this.getStatus}/>
        </div>
      );
    } else if(this.props.thisweek) {
      return(
        <div className="container flex row between">
          <TodoList day="Lundi" getStatus={this.getStatus}/>
          <TodoList day="Mardi" getStatus={this.getStatus}/>
          <TodoList day="Mercredi" getStatus={this.getStatus}/>
          <TodoList day="Jeudi" getStatus={this.getStatus}/>
          <TodoList day="Vendredi" getStatus={this.getStatus}/>
        </div>
      );
    }
  }

  render() {
    return (
      <Fragment>
        {this.setVue()}
      </Fragment>
    );
  }
}

export default Container;