import React from 'react';
import axios from 'axios';
import PinSelector from './PinSelector.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pinsToHit: 0
    }
    this.updatePinsToHit = this.updatePinsToHit.bind(this);
  }

  componentDidMount() {
    axios.get('/api')
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      })
  }

  updatePinsToHit(event) {
    const pinsToHit = parseInt(event.target.value);
    this.setState({pinsToHit: pinsToHit});
  }

  render () {
    return (
      <div>
        <h1>Bowling</h1>
        <h2>Number of Pins Hit on Bowl: {this.state.pinsToHit}</h2>
        <PinSelector handleButtonClick={this.updatePinsToHit}/>
    </div>
    )
  }
}

export default App;