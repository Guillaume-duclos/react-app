import React, { Component } from 'react';
import SunIcon from '../icons/SunIcon';
import TimeIcon from '../icons/TimeIcon';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
    } else if(this.props.getStatus === 1) {
      return 'Il vous reste ' + this.props.getStatus + ' tache à faire.';
    } else {
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
              <Link className={this.props.today ? 'current-page-link' : ''} to="/Today">Aujourd'hui</Link>
            </li>
            <li>
              <Link className={this.props.thisweek ? 'current-page-link' : ''} to="/ThisWeek">Cette semaine</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

Navigation.propTypes = {
  today: PropTypes.bool,
  thisweek: PropTypes.bool
};

export default Navigation;