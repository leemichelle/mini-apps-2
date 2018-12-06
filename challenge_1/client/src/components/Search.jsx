import React from 'react';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchedItem: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onEnter = this.onEnter.bind(this);
  }

  handleChange(e) {
    this.setState({
      searchedItem: e.target.value
    });
  }

  handleSubmit(e) {
    this.props.fetchInfo(e)
    e.target.value = '';
  }

  onEnter(e) {
    if (e.key === 'Enter') {
      this.handleSubmit(e);
    }
  }

  render() {
    console.log('this is state in Search', this.state)
    return (
      <label>
        <input onChange={this.handleChange} onKeyPress={this.onEnter}></input>
      </label>
    )
  }

}

export default Search;