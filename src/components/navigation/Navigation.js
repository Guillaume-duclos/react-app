import React, { Component } from 'react';
import SunIcon from '../icons/SunIcon';
import TimeIcon from '../icons/TimeIcon';
import { Link } from 'react-router-dom';

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
      return 'Il vous reste ' + this.props.getStatus + ' taches à faire.';
    }
  }

  setIcon = () => {
    if(this.props.getStatus === 0) {
      return <SunIcon/>
    } else if(this.props.getStatus > 0) {
      return <TimeIcon/>
    }
  }

  render() {
    return (
      <div className="navigation flex around column">
        <h1>Hello {this.state.name}</h1>
        <div className="user-infos">
          {this.setIcon()}
          <p>{this.setStatus()}</p>
        </div>
        <nav>
          <ul>
            <li>
              <Link className={this.props.page === 'home' ? 'current-page-link' : ''} to="/Home">Accueil</Link>
            </li>
            <li>
              <Link className={this.props.page === 'today' ? 'current-page-link' : ''} to="/Today">Aujourd'hui</Link>
            </li>
            <li>
              <Link className={this.props.page === 'thisweek' ? 'current-page-link' : ''} to="/ThisWeek">Cette semaine</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;