import React, { Component } from 'react';

class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Guillaume'
    }
  }

  render() {
    return (
      <div className="navigation flex around column">
        <h1>Hello {this.state.name}</h1>
        <div className="user-infos">
          <p>Vous n'avez aucune tâche de prévu</p>
        </div>
        <nav>
          <ul>
            <li>Aujourd'hui</li>
            <li>Cette semaine</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;