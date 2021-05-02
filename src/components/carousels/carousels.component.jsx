import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import '../carousels/carousels.style.css';
import Img1 from '../../partials/carousels/img1.jpg';
import Img2 from '../../partials/carousels/img2.jpg';
import Img3 from '../../partials/carousels/img3.jpg';
import ScrollDown from '../../components/scrolldown/scrolldown.component';

const Carousals = () => {
  return (

    <div id="Slides">
      <Carousel coontrols={false} indicators interval={2000} pause={false} fade>
        <Carousel.Item>
          <img className="d-block w-100 img-customise" src={Img1} alt="First slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 img-customise" src={Img2} alt="Second slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 img-customise" src={Img3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>
  );

};

export default Carousals;
