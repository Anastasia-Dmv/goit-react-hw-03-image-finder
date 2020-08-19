import style from './modal.module.css';

// export default function Modal({ largeImage, closeModal }) {
//   return (

//   );
// }
//alt={tag}
import React, { Component } from 'react';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleModal);
    document.addEventListener('click', this.handleModal),
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleModal)
    document.addEventListener('click', this.handleModal),
  }

  handleModal = () => {};
  render() {
    const { largeImage, closeModal } = this.props;
    return (
      <div>
        <div onClick={closeModal} className={style.Overlay}>
          <div className={style.Modal}>
            <img src={largeImage} alt={''} />
          </div>
        </div>
      </div>
    );
  }
}
