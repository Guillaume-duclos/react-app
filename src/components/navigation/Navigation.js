import React, { Component } from 'react';

class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Guillaume'
    }
  }

  setStatus = () => {
    if(this.props.getStatus === 0) {
      return 'Vous n\'avez aucune tâche de prévu.';
    } else if(this.props.getStatus > 0) {
      return 'Il vous reste ' + this.props.getStatus + ' à faire.';
    }
  }

  render() {
    console.log(this.props.getStatus);
    return (
      <div className="navigation flex around column">
        <h1>Hello {this.state.name}</h1>
        <div className="user-infos">
          <p>{this.setStatus()}</p>
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