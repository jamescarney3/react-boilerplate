import React, { PropTypes } from 'react';

const App = ({ times, onIncrement }) => (
  <div>
    <h1>I'm a boilerplate React app!</h1>
    <h2>You've clicked that button {times} times.</h2>
    <button onClick={onIncrement}>Increment</button>
  </div>
);

App.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  times: PropTypes.number.isRequired,
};

export { App };
