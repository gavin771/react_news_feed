import React, { Component } from 'react';
import './App.css';

//Components
import Header from './components/Header'
import db from './db.json'
import NewsList from './components/NewsList'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: db,
      filtered: db
    }
  }

  filterNews(keywords) {
    let filtered = [];

    filtered = this.state.news.filter(({ title }) => {
      return title.includes(keywords);
    })
    this.setState({ filtered });
  }

  render() {
    return (
      <div className="App">
        <Header newsSearch={keywords => this.filterNews(keywords)} />
        <NewsList news={this.state.filtered}></NewsList>
      </div>

    );
  }
}

export default App;
