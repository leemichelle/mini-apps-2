import React from 'react';
import ScorePad from './ScorePad.jsx';
import Score from './Score.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ScorePad />
        <Score />
      </div>
    )
  }
}

export default App;