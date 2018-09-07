import React, {Component} from 'react';

const TimeIcon = props => (
  <svg id="time-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <path fill="#FFFFFF" d="M50,5c24.8,0,45,20.2,45,45S74.8,95,50,95S5,74.8,5,50S25.2,5,50,5 M50,0C22.4,0,0,22.4,0,50s22.4,50,50,50s50-22.4,50-50S77.6,0,50,0L50,0z"/>
    <line className="time-icon-minutes" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeMiterlimit="10" x1="49.3" y1="13.8" x2="49.3" y2="49.3"/>
    <line className="time-icon-hours" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeMiterlimit="10" x1="65.1" y1="65.1" x2="49.5" y2="49.5"/>
  </svg>
);

export default TimeIcon;