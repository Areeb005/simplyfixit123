import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import icon1 from "../../assets/customer2.png"

export default class Reviews extends Component {
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
                    <div className="reviews_slider">
                        <div className="card">
                            <div className="info">
                                <img src={icon1} alt="icon" className="img-fluid" />
                                <h4>Julian Elvis</h4>
                            </div>
                            <div className="reviews">
                                <p>Loved the service, I was lost not knowing who to choose to repair my appliance... Reasonable cost and no hidden fees... Work well done! I would recommend to family and friends.</p>
                            </div>
                        </div>
                    </div>
                    <div className="reviews_slider">
                        <div className="card">
                            <div className="info">
                                <img src={icon1} alt="icon" className="img-fluid" />
                                <h4>Julian Elvis</h4>
                            </div>
                            <div className="reviews">
                                <p>Loved the service, I was lost not knowing who to choose to repair my appliance... Reasonable cost and no hidden fees... Work well done! I would recommend to family and friends.</p>
                            </div>
                        </div>
                    </div>
                    <div className="reviews_slider">
                        <div className="card">
                            <div className="info">
                                <img src={icon1} alt="icon" className="img-fluid" />
                                <h4>Julian Elvis</h4>
                            </div>
                            <div className="reviews">
                                <p>Loved the service, I was lost not knowing who to choose to repair my appliance... Reasonable cost and no hidden fees... Work well done! I would recommend to family and friends.</p>
                            </div>
                        </div>
                    </div>
                    <div className="reviews_slider">
                        <div className="card">
                            <div className="info">
                                <img src={icon1} alt="icon" className="img-fluid" />
                                <h4>Julian Elvis</h4>
                            </div>
                            <div className="reviews">
                                <p>Loved the service, I was lost not knowing who to choose to repair my appliance... Reasonable cost and no hidden fees... Work well done! I would recommend to family and friends.</p>
                            </div>
                        </div>
                    </div>
                    <div className="reviews_slider">
                        <div className="card">
                            <div className="info">
                                <img src={icon1} alt="icon" className="img-fluid" />
                                <h4>Julian Elvis</h4>
                            </div>
                            <div className="reviews">
                                <p>Loved the service, I was lost not knowing who to choose to repair my appliance... Reasonable cost and no hidden fees... Work well done! I would recommend to family and friends.</p>
                            </div>
                        </div>
                    </div>
                    <div className="reviews_slider">
                        <div className="card">
                            <div className="info">
                                <img src={icon1} alt="icon" className="img-fluid" />
                                <h4>Julian Elvis</h4>
                            </div>
                            <div className="reviews">
                                <p>Loved the service, I was lost not knowing who to choose to repair my appliance... Reasonable cost and no hidden fees... Work well done! I would recommend to family and friends.</p>
                            </div>
                        </div>
                    </div>
                    <div className="reviews_slider">
                        <div className="card">
                            <div className="info">
                                <img src={icon1} alt="icon" className="img-fluid" />
                                <h4>Julian Elvis</h4>
                            </div>
                            <div className="reviews">
                                <p>Loved the service, I was lost not knowing who to choose to repair my appliance... Reasonable cost and no hidden fees... Work well done! I would recommend to family and friends.</p>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>
        );
    }
}