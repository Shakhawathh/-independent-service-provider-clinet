import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import BannerPic1 from '../../../images/picB.jpg'
import BannerPic2 from '../../../images/pic2.jpg'
// import BannerPic3 from '../../../images/picB.jpg'

const Banner = () => {

    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

    return (
        <Carousel className='mx-2 w-auto' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={BannerPic1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Wedding photoshoot</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={BannerPic2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Product photoshoot</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
       
    </Carousel>
    );
};

export default Banner;