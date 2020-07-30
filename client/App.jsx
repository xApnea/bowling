import React from 'react';
import axios from 'axios';
import PinSelector from './PinSelector.jsx';
import Scoreboard from './Scoreboard.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pinsToHit: 0,
      currentFrame: 0,
      score: [
        {total: 0, pinsRemaining: 10, strike: false, spare: false, turnsRemaining: 2},
        {total: 0, pinsRemaining: 10, strike: false, spare: false, turnsRemaining: 2},
        {total: 0, pinsRemaining: 10, strike: false, spare: false, turnsRemaining: 2},
        {total: 0, pinsRemaining: 10, strike: false, spare: false, turnsRemaining: 2},
        {total: 0, pinsRemaining: 10, strike: false, spare: false, turnsRemaining: 2},
        {total: 0, pinsRemaining: 10, strike: false, spare: false, turnsRemaining: 2},
        {total: 0, pinsRemaining: 10, strike: false, spare: false, turnsRemaining: 2},
        {total: 0, pinsRemaining: 10, strike: false, spare: false, turnsRemaining: 2},
        {total: 0, pinsRemaining: 10, strike: false, spare: false, turnsRemaining: 2},
        {total: 0, pinsRemaining: 10, strike: false, spare: false, turnsRemaining: 3}
      ]
    }
    this.updatePinsToHit = this.updatePinsToHit.bind(this);
    this.bowl = this.bowl.bind(this);
  }

  componentDidMount() {
  }

  updatePinsToHit(event) {
    const pinsToHit = parseInt(event.target.value);
    this.setState({pinsToHit: pinsToHit});
  }

  bowl() {
    let currentFrame = this.state.currentFrame;

    // make a shallow copy of the score
    let score = [...this.state.score];
    // make a shallow copy of the frame
    let frame = {...score[currentFrame]};

    //take the turn
    frame.turnsRemaining--;
    // Calculate pinsRemaining and score added.
    const start = this.state.score[currentFrame].pinsRemaining;
    let pinsRemaining = this.state.score[currentFrame].pinsRemaining - this.state.pinsToHit;
    // never let pinsRemaining go below 0
    if (pinsRemaining < 0) {pinsRemaining = 0};

    //calculate base points
    let pointsEarned = start - pinsRemaining;

    //if zero, check for strikes or spare using turnsRemaining
    if (pinsRemaining === 0 && frame.turnsRemaining === 1) {
      //STRIKE
      frame.strike = true;
      frame.turnsRemaining--;
      console.log('STRIKE');
    } else if (pinsRemaining === 0 && frame.turnsRemaining === 0) {
      frame.spare = true;
      console.log('SPARE');
    }

    const total = this.state.score[currentFrame].total + pointsEarned;

    // add values to new frame
    frame.pinsRemaining = pinsRemaining;
    frame.total = total;

    console.log(`Turns remaining: ${frame.turnsRemaining}`);

    // put frame back into array
    score[currentFrame] = frame;

    //advance frame if remaining turns is 0
    //TODO OR if strike
    if (frame.turnsRemaining === 0) {currentFrame++}

    this.setState({
      score: score,
      currentFrame: currentFrame
    })
  }

  render () {
    return (
      <div>
        <div>
          <h1>Bowling</h1>
          <Scoreboard score={this.state.score}/>
        </div>
        <div>
          <h4>Pins Hit on Bowl: {this.state.pinsToHit}</h4>
          <PinSelector handleButtonClick={this.updatePinsToHit}/>
        </div>
        <div>
          <button onClick={this.bowl}>BOWL</button>
        </div>
    </div>
    )
  }
}

export default App;