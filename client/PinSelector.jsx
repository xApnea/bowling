import React from 'react';

class PinSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return(
      <div>
        <div>
          <div>
            <button onClick={this.props.handleButtonClick} value={1}>1</button>
            <button onClick={this.props.handleButtonClick} value={2}>2</button>
            <button onClick={this.props.handleButtonClick} value={3}>3</button>
          </div>
          <div>
            <button onClick={this.props.handleButtonClick} value={4}>4</button>
            <button onClick={this.props.handleButtonClick} value={5}>5</button>
            <button onClick={this.props.handleButtonClick} value={6}>6</button>
          </div>
          <div>
            <button onClick={this.props.handleButtonClick} value={7}>7</button>
            <button onClick={this.props.handleButtonClick} value={8}>8</button>
            <button onClick={this.props.handleButtonClick} value={9}>9</button>
          </div>
          <div>
            <button onClick={this.props.handleButtonClick} value={10}>10</button>
          </div>
        </div>
      </div>
    )
  }
}

export default PinSelector;