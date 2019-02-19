import React, { Component } from 'react'

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      isFetching: true
    };
  }

  fetchQuotes = () => {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({
        hits: data.hits,
        isFetching: false
      }))
      .catch(e => console.log(e))
  };

  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits, isFetching: false }))
      .catch(e => console.log(e))
  }

  render() {

    const { hits, isFetching } = this.state;

    return (
      <div style={{ textAlign: "center", marginTop: "64px" }}>
        <h1>Welcome to React Algorithm Trading System!</h1>
        <div>
          <p>{isFetching ? 'Redux posts is loading ...' : ''}</p>
          {hits.map(hit =>
            <div key={hit.objectID}>
              <a href={hit.url} target="_blank" rel="noopener noreferrer">{hit.title}</a>
            </div>
          )}
        </div>
      </div>
    );
  }

}

export default Home
