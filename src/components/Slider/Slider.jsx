import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            className: "simpleSlider",
            dots: false,
            infinite: true,
            speed: 500,
            arrows: false,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className="slide1"></div>
                    <div className="slide2"></div>
                    <div className="slide3"></div>
                    <div className="slide4"></div>
                </Slider>
            </div>
        );
    }
}