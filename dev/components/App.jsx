import React, {Component} from 'react';
import Preloader from './Preloader.jsx';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      techSalaries: []
    }
  }

  render() {
    const {techSalaries} = this.state;

    if(techSalaries.length) {
      <div>App</div>
    }
    return (
      <Preloader />
    )
  }
}

export default App;