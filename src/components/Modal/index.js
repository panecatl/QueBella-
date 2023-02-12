import React from 'react';
import ImageSlider from '../ImageSlider'
import './index.scss';  

const Modal = ({ closeModal }) => {

  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <button onClick={() => closeModal(false)}> X </button>
        <div className='title'>
          <h1>Wedding Cookies</h1>
        </div>
        <div className='body'>
          <ImageSlider />
        </div>
      </div>
    </div>
  )
}

export default Modal;