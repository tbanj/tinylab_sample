import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./carousel.css";

class ServiceCarousel extends Component {
  state = {};

  render() {
    var data = this.props.data;
    var newsTemplate;
    var settings = {
      lazyload: true,
      autoplay: true,
      dots: false,
      arrows: false,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };

    if (data.length > 0) {
      newsTemplate = data.map(function(item, index) {
        return (
          <React.Fragment>
            <div key={index} style={{ height: "780px" }}>
              <div className="owl-item parentServiceDiv ">
                <div className="item">
                  <div className="single-service-one">
                    <div className="image-block">
                      <img
                        style={{ height: "780px" }}
                        id="imgBack"
                        src={item.image}
                        alt="Awesome Visual"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div id="pushUp">
                <h5 className="text-white text-center col-md-6 offset-md-3">
                  No Hazzles
                </h5>
                <p className="text-white text-center col-md-6 offset-md-3 pt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit do
                  eiusmod
                </p>
              </div>
            </div>
          </React.Fragment>
        );
      });
    } else {
      newsTemplate = <p>Please add some cards</p>;
    }
    return (
      <div className="news parentCarousel">
        <Slider {...settings}>{newsTemplate}</Slider>
        {/* <strong className={"news__count " + (data.length > 0 ? "" : "none")}>
          
        </strong> */}
      </div>
    );
  }
}

export default ServiceCarousel;
