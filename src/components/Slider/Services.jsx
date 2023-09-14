import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import icon1 from "../../assets/iphone-big.png"

export default class Services extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            dots: true,
            infinite: true,
            speed: 500,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 3
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className="services_slider">
                        <div className="card">
                            <img src={icon1} alt="icon" className="img-fluid" />
                            <h4>Handyman</h4>
                            <div className="tags">
                                <a href="#">Drywall repair</a>
                                <a href="#">Interior painting</a>
                            </div>
                            <button className="btn btn-bookNow">Book Now</button>
                        </div>
                    </div>
                    <div className="services_slider">
                        <div className="card">
                            <img src={icon1} alt="icon" className="img-fluid" />
                            <h4>Home Appliances</h4>
                            <div className="tags">
                                <a href="#">Drywall repair</a>
                                <a href="#">Interior painting</a>
                            </div>
                            <button className="btn btn-bookNow">Book Now</button>
                        </div>
                    </div>
                    <div className="services_slider">
                        <div className="card">
                            <img src={icon1} alt="icon" className="img-fluid" />
                            <h4>TV Mounting</h4>
                            <div className="tags">
                                <a href="#">Drywall repair</a>
                                <a href="#">Interior painting</a>
                            </div>
                            <button className="btn btn-bookNow">Book Now</button>
                        </div>
                    </div>
                    <div className="services_slider">
                        <div className="card">
                            <img src={icon1} alt="icon" className="img-fluid" />
                            <h4>Plumbing</h4>
                            <div className="tags">
                                <a href="#">Drywall repair</a>
                                <a href="#">Interior painting</a>
                            </div>
                            <button className="btn btn-bookNow">Book Now</button>
                        </div>
                    </div>
                    <div className="services_slider">
                        <div className="card">
                            <img src={icon1} alt="icon" className="img-fluid" />
                            <h4>Garage door repair</h4>
                            <div className="tags">
                                <a href="#">Drywall repair</a>
                                <a href="#">Interior painting</a>
                            </div>
                            <button className="btn btn-bookNow">Book Now</button>
                        </div>
                    </div>
                    <div className="services_slider">
                        <div className="card">
                            <img src={icon1} alt="icon" className="img-fluid" />
                            <h4>iPhone repair</h4>
                            <div className="tags">
                                <a href="#">Drywall repair</a>
                                <a href="#">Interior painting</a>
                            </div>
                            <button className="btn btn-bookNow">Book Now</button>
                        </div>
                    </div>
                    <div className="services_slider">
                        <div className="card">
                            <img src={icon1} alt="icon" className="img-fluid" />
                            <h4>Smart home installation</h4>
                            <div className="tags">
                                <a href="#">Drywall repair</a>
                                <a href="#">Interior painting</a>
                            </div>
                            <button className="btn btn-bookNow">Book Now</button>
                        </div>
                    </div>

                </Slider>
            </div>
        );
    }
}