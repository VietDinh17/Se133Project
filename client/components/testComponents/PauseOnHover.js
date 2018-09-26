import React, { Component } from "react";
import Slider from "react-slick";
import ImgMediaCard from './card';

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <h2 id="Heading">Categories</h2>
        <Slider {...settings}>

          <div>
            <ImgMediaCard />
          </div>
          <div>
            <ImgMediaCard />
          </div>
          <div>
            <ImgMediaCard />
          </div>
          <div>
            <ImgMediaCard />
          </div>
          <div>
            <ImgMediaCard />
          </div>
          <div>
            <ImgMediaCard />
          </div>
        </Slider>
      </div>
    );
  }
}
