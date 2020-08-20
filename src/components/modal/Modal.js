import React, { Component } from 'react';
import style from './modal.module.css';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.clickOnCloseBtn);
    document.addEventListener('click', this.clickOnOverlay);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.clickOnCloseBtn);
    document.addEventListener('click', this.clickOnOverlay);
  }

  clickOnCloseBtn = e => {
    e.code === 'Escape' && this.props.onClose();
  };

  clickOnOverlay = e => {
    (e.target.nodeName === 'DIV' || e.target.nodeName === 'BUTTON') &&
      this.props.onClose();
  };

  render() {
    const { largeImage } = this.props;
    return (
      <div>
        <div className={style.Overlay}>
          <div className={style.Modal}>
            <img src={largeImage} alt={''} />
            <button className={style.ModalBtn}>X</button>
          </div>
        </div>
      </div>
    );
  }
}
