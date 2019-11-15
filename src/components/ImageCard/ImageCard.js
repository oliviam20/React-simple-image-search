import React, { Component, createRef } from 'react';

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0
    }
    this.imageRef = createRef();
  }

  componentDidMount() {
    // we are waiting for the ref (ie img) to load, then calling setSpans as a callback to access the clientHeight. If trying to access clientHeight without eventListener 'load', clientHeight will be 0 because image hasn't loaded yet.
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    // height / 10 <- the 10 is the height of the grid rows we set in ImageList.css. By doing height / 10, we get how many rows the element should take up.
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  }

  render() {
    const {
      urls,
      alt_description
    } = this.props.image

    return (
      // The grid-row-end property defines how many rows an item will span, or on which row-line the item will end
      <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
        <img
          ref={this.imageRef}
          src={urls.regular}
          alt={alt_description}
        />
      </div>
    )
  }
};

export default ImageCard;
