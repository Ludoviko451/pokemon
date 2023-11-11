import React from 'react';
import { Carousel } from 'react-bootstrap';
import './css/carousel.css'
const ImageCarousel = () => {
  return (
    <div>
      <Carousel className="carousel-container">
        <Carousel.Item>
           <div className="d-flex justify-content-center align-items-center carousel-item">
          <img
            className='d-block w-50 h-auto'
            src='./charmander.png'
            alt='First Slide'
          />
          </div>
          <Carousel.Caption>
            <h3>POKEMON</h3>
            <p>POKEMON ANIME AND GAME</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
           <div className="d-flex justify-content-center align-items-center carousel-item">
          <img
            className='d-block w-50 h-auto'
            src='./eevee.png'
            alt='First Slide'
          />
          </div>
          <Carousel.Caption>
            <h3>POKEMON</h3>
            <p>POKEMON ANIME AND GAME</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
           <div className="d-flex justify-content-center align-items-center carousel-item">
          <img
            className='d-block w-50 h-auto'
            src='./squirtle.png'
            alt='First Slide'
          />
          </div>
          <Carousel.Caption>
            <h3>POKEMON</h3>
            <p>POKEMON ANIME AND GAME</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
