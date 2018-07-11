import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './App.css';
import Flat from './components/Flat';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: []
    }
  }

  componentDidMount() {
    const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json"
    fetch(url) //AJAX
      .then(response => response.json())
      .then((data) => {
        this.setState({
          flats: data
        });
      })
  }

  render() {
    const center = {
      lat: 48.8566,
      lng: 2.3522
    }
  
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
            <GoogleMapReact
              center={center}
              zoom={11}
            />
        </div>
      </div>
    );
  }
}

export default App;
