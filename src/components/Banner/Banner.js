import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import baner1 from '../../images/slider/banner1.jpg'
import baner2 from '../../images/slider/banner2.jpg'
import baner3 from '../../images/slider/banner3.jpg'

const Banner = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='container mt-3'>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={baner3}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to Pediatric Dentist! </h3>
            <p>In addition to working in private practice, my full-time</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={baner1}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Creating Beautiful Smiles</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={baner2}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Right Dentist for You</h3>
            <p>
            WE ARE EXCITED TO ANNOUNCE THE RETURN OF OUR PRACTICE!.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Banner;