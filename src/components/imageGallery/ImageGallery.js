import React, { Component } from 'react';
import style from './imageGallery.module.css';
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';

export default class ImageGallery extends Component {
  render() {
    const { images } = this.props;
    console.log('images', images);
    return (
      <ul className={style.ImageGallery}>
        {images.map(item => (
          <ImageGalleryItem
            id={item.id}
            src={item.webformatURL}
            alt={item.tags}
          />
        ))}
      </ul>
    );
  }
}
