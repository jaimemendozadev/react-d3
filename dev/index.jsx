import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Preloader from './components/Preloader.jsx';

const App = () => (
  <div><h1>Welcome to the React/D3 App</h1></div>
)

ReactDOM.render(<Preloader />, document.querySelector('.container'));