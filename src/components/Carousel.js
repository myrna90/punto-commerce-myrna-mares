import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../imgs/1.jpg";

const CarouselView = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="principal-carousel">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="img1" />
          <Carousel.Caption>
            <h2 className="text h2">TULIPS</h2>
            <h1 className="text h1">SALE</h1>
            <h4 className="text h4">50%</h4>
            <h4 className="text h4">OFF</h4>
            <p className="text p-shop">SHOP NOW</p>
            <button className="btn btn-shop">SHOP NOW</button>
            <button className="btn btn-from">FROM $15</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="Second slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="Third slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselView;
