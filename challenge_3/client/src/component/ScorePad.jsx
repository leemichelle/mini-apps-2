import React from 'react';
// import style from './styles.css';
import Score from './Score.jsx';

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
      clickedNum: '',
      sum: 0
    }
    this.keepScore = this.keepScore.bind(this);
  }

  keepScore(e) {
    e.preventDefault();
    let limit = 10 - Number.parseInt(e.target.name);
    
    this.setState({
      clickedNum: Number.parseInt(e.target.name),
      sum: this.state.sum += Number.parseInt(e.target.name)
    })
    e.target.style.backgroundColor = '#ACA4A4'
  }

  render() {
    return (
      <div className='keypad'>
        <button onClick={(e) => this.keepScore(e)} name="1" style={{backgroundColor: this.state.keypad}}>
          1{this.state.one}
        </button>
        <button onClick={(e) => this.keepScore(e)} name="2" style={{backgroundColor: this.state.keypad}}>
          2{this.state.two}
        </button>
        <button onClick={(e) => this.keepScore(e)} name="3" style={{backgroundColor: this.state.keypad}}>
          3{this.state.three}
        </button>
        <br />
        <button onClick={(e) => this.keepScore(e)} name="4" style={{backgroundColor: this.state.keypad}}>
          4{this.state.four}
        </button>
        <button onClick={(e) => this.keepScore(e)} name="5" style={{backgroundColor: this.state.keypad}}>
          5{this.state.five}
        </button>
        <button onClick={(e) => this.keepScore(e)} name="6" style={{backgroundColor: this.state.keypad}}>
          6{this.state.six}
        </button>
        <br />
        <button onClick={(e) => this.keepScore(e)} name="7" style={{backgroundColor: this.state.keypad}}>
          7{this.state.seven}
        </button>
        <button onClick={(e) => this.keepScore(e)} name="8" style={{backgroundColor: this.state.keypad}}>
          8{this.state.eight}
        </button>
        <button onClick={(e) => this.keepScore(e)} name="9" style={{backgroundColor: this.state.keypad}}>
          9{this.state.nine}
        </button>
        <br />
        <button onClick={(e) => this.keepScore(e)} name="10" style={{backgroundColor: this.state.keypad}}>
          10{this.state.ten}
        </button>
        <div>Clicked: {this.state.clickedNum} </div>
        <Score score={this.state.sum} />
      </div>
    )
  }
}

export default ScorePad;