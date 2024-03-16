import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';

const Courses=()=> {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="sliderMain">
        <h1>Courses we offer</h1>
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="PRMedia.png" alt="public realtions media" className="carouselImage" />
          <p className="para">Public realtions media</p>
        </div>
        <div>
            <img src="newWhat.png" alt="what is news" className="carouselImage" />
            <p className="para">what is news</p>
        </div>
        <div>
        <img src="writingEditing.png" alt="Writing and Editing" className="carouselImage" />
        <p className="para">Writing and Editing</p>
        </div>
        <div>
        <img src="journalism-1.jpg" alt="journalism" className="carouselImage" />
        <p className="para">Journalism</p>
        </div>
        <div>
        <img src="research.jpg" alt="research" className="carouselImage" />
        <p className="para">Research</p>
        </div>
      </Slider>
    </div>
    </div>
  );
}

export default Courses;