import React, { Component } from "react";
import Slider from "react-slick";

export default class Technician extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            arrows: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 500
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className="technician_slider">
                        <div className="card">
                            <div className="info">
                                <h4>Kevin</h4>
                                <h6>Puls technician</h6>
                            </div>
                            <div className="description">
                                <p>"This is one of the best services around. Kevin, my tech, was punctual, courteous and efficient. Will definitely use Puls again."</p>
                            </div>
                        </div>
                    </div>
                    <div className="technician_slider">
                        <div className="card">
                            <div className="info">
                                <h4>Kevin</h4>
                                <h6>Puls technician</h6>
                            </div>
                            <div className="description">
                                <p>"This is one of the best services around. Kevin, my tech, was punctual, courteous and efficient. Will definitely use Puls again."</p>
                            </div>
                        </div>
                    </div>
                    <div className="technician_slider">
                        <div className="card">
                            <div className="info">
                                <h4>Kevin</h4>
                                <h6>Puls technician</h6>
                            </div>
                            <div className="description">
                                <p>"This is one of the best services around. Kevin, my tech, was punctual, courteous and efficient. Will definitely use Puls again."</p>
                            </div>
                        </div>
                    </div>
                    <div className="technician_slider">
                        <div className="card">
                            <div className="info">
                                <h4>Kevin</h4>
                                <h6>Puls technician</h6>
                            </div>
                            <div className="description">
                                <p>"This is one of the best services around. Kevin, my tech, was punctual, courteous and efficient. Will definitely use Puls again."</p>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>
        );
    }
}