import React, { Component } from 'react';
import style from './imageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  render() {
    const { src, alt, largeImage, openModal } = this.props;
    return (
      <li
        onClick={() => {
          openModal(largeImage);
        }}
        className={style.ImageGalleryItem}
      >
        <img src={src} alt={alt} className={style.ImageGalleryItemImage} />
      </li>
    );
  }
}
