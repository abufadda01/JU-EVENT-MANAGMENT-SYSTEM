import React from "react";
import CarouselCaption from "./CarouselCaption";

const Carousel = () => {
  return (
    <div
      id="carousel-1"
      className="carousel slide c-1"
      data-bs-ride="carousel"
      data-bs-interval="1000"
    >
      <CarouselCaption />

      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carousel-1"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carousel-1"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carousel-1"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carousel-1"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carousel-1"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active c-item ">
          <img
            className="d-block w-100 c-img"
            src="image1.jpeg"
            alt="First slide"
          />
        </div>
        <div className="carousel-item c-item">
          <img
            className="d-block w-100 c-img "
            src="image2.jpeg"
            alt="Second slide"
          />
        </div>
        <div className="carousel-item c-item">
          <img
            className="d-block w-100 c-img"
            src="image3.jpeg"
            alt="Third slide"
          />
        </div>
        <div className="carousel-item c-item">
          <img
            className="d-block w-100 c-img"
            src="image4.jpeg"
            alt="Third slide"
          />
        </div>
        <div className="carousel-item c-item">
          <img
            className="d-block w-100 c-img"
            src="image5.jpeg"
            alt="Third slide"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
