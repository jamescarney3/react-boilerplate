import React, { Component } from 'react';
import { App } from '../components';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      times: 0,
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ times: this.state.times + 1 });
  }

  render() {
    return (
      <App onIncrement={this.increment} times={this.state.times}/>
    );
  }
}

export { AppContainer };
