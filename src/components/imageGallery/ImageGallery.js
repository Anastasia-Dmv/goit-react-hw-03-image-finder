import React, { Component } from 'react';
import style from './imageGallery.module.css';
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';

export default class ImageGallery extends Component {
  render() {
    const { images, openModal } = this.props;
    console.log('images', images);
    return (
      <ul className={style.ImageGallery}>
        {images.map(item => (
          <ImageGalleryItem
            key={item.id}
            src={item.webformatURL}
            alt={item.tags}
            largeImage={item.largeImageURL}
            openModal={openModal}
          />
        ))}
      </ul>
    );
  }
}
//
