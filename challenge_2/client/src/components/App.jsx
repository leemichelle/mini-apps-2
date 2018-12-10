import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    }
  }

  componentDidMount() {
    fetch("https://api.coindesk.com/v1/bpi/historical/close.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            data: result
          })
        }
      )
  }

  getPriceInfo() {
    fetch('/price')
    .then(res => res.json())
    .then(
      (result) => {
        let dates = [];
        let closingPrices = [];
        for(var key in data.bqi) {
          dates.push(key);
          closingPrices.push(data.bpi]key])
        }

        this.setState({
         chartData: data,
         disclaimer: dates.disclaimer,
         dates: dates,
         prices: closingPrices,
        });

        
      }
    )
  }

  render() {
    console.log('this is sate', this.state)
    return (
      <div>Hi</div>
    )
  }
}

export default App;