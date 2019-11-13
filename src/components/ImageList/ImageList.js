import React from 'react';
import './ImageList.css';

const ImageList = (props) => {
  const images = props.images.map(image => <img key={image.id} src={image.urls.regular} alt={image.alt_description} />);

  return <div className="image-list">{images}</div>
};

export default ImageList;
