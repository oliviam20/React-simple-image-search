import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';
import secret from '../../secret.json';

class App extends Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    // api @ https://unsplash.com/documentation#location
    // get uri and params @ https://unsplash.com/documentation#search-photos
    // auth @ https://unsplash.com/documentation#authorization
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: `Client-ID ${secret.unsplashApi.accessKey}`
      }
    });

    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container appContainer">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <p>{this.state.images.length} images found</p>
      </div>
    )
  }
};

export default App;