import React, { Component } from 'react';
import style from './imageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  render() {
    const { id, src, alt } = this.props;
    return (
      <li id={id} key={id} className={style.ImageGalleryItem}>
        <img src={src} alt={alt} className={style.ImageGalleryItemImage} />
      </li>
    );
  }
}
