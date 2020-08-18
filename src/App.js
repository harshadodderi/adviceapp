import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      advice: '',
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = () => {
    axios
      .get('https://api.adviceslip.com/advice')
      .then((response) => {
        const advice = response.data.slip.advice;
        this.setState({ advice });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  render() {
    return (
      <div className='app'>
        <div className='card'>
          <h1 className='heading'>{this.state.advice}</h1>
          <button className='button' onClick={() => this.fetchData()}>
            <span>Get me New Advice!</span>
          </button>
        </div>
      </div>
    );
  }
}
