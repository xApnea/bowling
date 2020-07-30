import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    }
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

  render () {
    return (
      <div>
        <h1>Bowling</h1>
    </div>
    )
  }
}

export default App;