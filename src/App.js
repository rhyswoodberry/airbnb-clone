import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Flat from './components/Flat';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: []
    }
  }

  render() {
    return (
      <div className="app">
        <div className="main">
          <div className="search">
          </div>
          <div className="flats">
            {this.state.flats.map((flat) => {
              return <Flat flat={flat} />
            })}
          </div>
        </div>
        <div className="map">
        </div>
      </div>
    );
  }
}

export default App;
