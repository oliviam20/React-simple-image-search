import React, { Component } from 'react';
import unsplash from '../../api/unsplash';
import SearchBar from '../SearchBar/SearchBar';
import ImageList from '../ImageList/ImageList';
import './App.css';

class App extends Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    // api @ https://unsplash.com/documentation#location
    // get uri and params @ https://unsplash.com/documentation#search-photos
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container appContainer">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <p>{this.state.images.length} images found</p>
        <ImageList images={this.state.images} />
      </div>
    )
  }
};

export default App;