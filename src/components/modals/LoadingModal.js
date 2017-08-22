import React, {Component} from 'react';
// import api from '../../api.js';
import './LoadingModal.css';

// const ENTER = 13;

export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {} 
  }
   
  render() {
    return (
      <div className="LoadingDiv">
        <div className="innerLoadingDiv">
          
          <div className="loader"></div>
        </div>      
      </div>
    )
  } 
}