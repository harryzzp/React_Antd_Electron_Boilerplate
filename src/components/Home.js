import React, { Component } from 'react'

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
    };
  }

  componentDidMount() {
    fetch(API + DEFAULT_QUERY).then(response => response.json()).then(data => this.setState({ hits: data.hits }))
  }

  render() {

    const { hits } = this.state;

    return (
      <div style={{ textAlign: "center", marginTop: "64px" }}>
        <h1>Welcome to React Algorithm Trading System!</h1>
        <div>
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
