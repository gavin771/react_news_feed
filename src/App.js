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
      news: db
    }

  }
  render() {
    return (
      <div className="App">
        <Header />
        <NewsList news={this.state.news}></NewsList>
      </div>
    );
  }
}

export default App;
