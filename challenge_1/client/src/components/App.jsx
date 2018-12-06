import React from 'react';
import ReactPaginate from 'react-paginate';
import Search from './Search.jsx';
import List from './List.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      pageCount: 0,
    }
    this.fetchInfo = this.fetchInfo.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    console.log('this is props', this.props)
    fetch(`/events/`)
      .then(res => res.json())
      .then (
        (result) => {
          this.setState({
            pageCount: Math.ceil(result.length/10),
          });
          // console.log('this is result length', result.length)
        }
      )
    this.handlePageClick(1);
  }

  fetchInfo(e) {
    fetch(`/events?q=${e.target.value}&_limit=10`)
      .then(res => res.json())
      .then (
        (result) => {
          this.setState({
            list: result
          });
        }
      )
  }

  handlePageClick(data) {
    let selected = data.selected;
    fetch(`/events?_page=${selected}&_limit=10`)
      .then(res => res.json())
      .then (
        (result) => {
          this.setState({
            list: result
          });
        }
      )
  }

  render() {
    console.log('this is state in the App', this.state)
    return (
      <div>
        <Search fetchInfo={this.fetchInfo} />
        <List list={this.state.list} />
        <ReactPaginate previousLabel={"previous"}
                       nextLabel={"next"}
                       breakLabel={"..."}
                       breakClassName={"break-me"}
                       pageCount={this.state.pageCount}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       onPageChange={this.handlePageClick}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />
      </div>
    )
  }
}

export default App;