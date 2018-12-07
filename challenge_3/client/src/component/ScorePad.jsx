import React from 'react';
// import style from './styles.css';

class ScorePad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
      six: false,
      seven: false,
      eight: false,
      nine: false,
      ten: false,
      keypad: 'red',
    }
  }

  keepScore() {
  }

  render() {
    return (
      <div className='keypad'>
        <button name="1" style={{color: this.state.keypad}}>
          1{this.state.one}
        </button>
        <button name="2" style={{color: this.state.keypad}}>
          2{this.state.two}
        </button>
        <button name="3" style={{color: this.state.keypad}}>
          3{this.state.three}
        </button>
        <br />
        <button name="4" style={{color: this.state.keypad}}>
          4{this.state.four}
        </button>
        <button name="5" style={{color: this.state.keypad}}>
          5{this.state.five}
        </button>
        <button name="6" style={{color: this.state.keypad}}>
          6{this.state.six}
        </button>
        <br />
        <button name="7" style={{color: this.state.keypad}}>
          7{this.state.seven}
        </button>
        <button name="8" style={{color: this.state.keypad}}>
          8{this.state.eight}
        </button>
        <button name="9" style={{color: this.state.keypad}}>
          9{this.state.nine}
        </button>
        <br />
        <button name="10" style={{color: this.state.keypad}}>
          10{this.state.ten}
        </button>
      </div>
    )
  }
}

export default ScorePad;