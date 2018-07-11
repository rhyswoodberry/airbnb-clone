import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Flat from './components/Flat';

class App extends Component {
  render() {
    const flat = {
      "id": 148,
      "name": "Trendy Apt in Buttes Montmartre",
      "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat2.jpg",
      "price": 200,
      "priceCurrency": "EUR",
      "lat": 48.885707,
      "lng": 2.343543
    };

    return (
      <div className="app">
        <div className="main">
          <div className="search">
          </div>
          <div className="flats">
          </div>
        </div>
        <div className="map">
        </div>
      </div>
    );
  }
}

export default App;
