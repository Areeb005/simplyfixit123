import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

import testimonial_1 from "../assets/Testimonials/img 1.webp"
import testimonial_2 from "../assets/Testimonials/img 2.webp"
import testimonial_3 from "../assets/Testimonials/img 3.webp"

import appliances from "../assets/appliances.jpg"

function Testimonial() {

    useEffect(() => {
        sessionStorage.clear();
        localStorage.clear();
    })

    return (
        <>
            <Navbar />
            <section className='test_section1'>
                <div className="container">
                    <div className="row d-flex jc-center text-center">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-3">
                            <div className="test_card">
                                <img src={testimonial_1} alt="image" className='img-fluid' />
                                <p className='review review1'>"He was an expert! He had amazing knowledge of high rise construction so that hanging up my 65” tv was as easy as possible. I will definitely be using his company again!"</p>
                                <p className='name'>Alexus Echols</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-3">
                            <div className="test_card">
                                <img src={testimonial_2} alt="image" className='img-fluid' />
                                <p className='review review2'>"Lenray was awesome!!! He worked fast and efficiently. He was very professional and I will be using his services again in the future. The best part he was affordable!!!!"</p>
                                <p className='name'>Charlice Holmes</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-3">
                            <div className="test_card">
                                <img src={testimonial_3} alt="image" className='img-fluid' />
                                <p className='review review3'>"I sent a message, and his reply came back promptly. A few texts later (while I was out of the state), my job was complete in less than an hour. Very honest. Last minute service. Reliable. Trustworthy! Dependable! It's hard to find gentlemen who stand by their word and work. He does both.... Thank you, SimplyFixItNow...Another satisfied customer. I'll definitely do business with you again!!!"</p>
                                <p className='name'>Dee Jones</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='test_section2'>
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-md-4"></div>

                        <div className="col-lg-6 col-md-8 col-12">
                            <div className="test_form">
                                <div className="form_head">
                                    <h1>RATE US</h1>
                                    <p>How Did We Do?</p>
                                </div>
                                <div className="form_body">
                                    <div className="row">
                                        <div className='col-md-6 col-12 mb-3'>
                                            <div>
                                                <label className="form-label">First Name</label>
                                                <input type="text" className="form-control" placeholder="Enter your first name" />
                                            </div>
                                        </div>
                                        <div className='col-md-6 col-12 mb-3'>
                                            <div>
                                                <label className="form-label">Last Name</label>
                                                <input type="email" className="form-control" placeholder="Enter your last name" />
                                            </div>
                                        </div>
                                        <div className='col-md-6 col-12 mb-3'>
                                            <div>
                                                <label className="form-label">Email</label>
                                                <input type="email" className="form-control" placeholder="Enter your email" />
                                            </div>
                                        </div>
                                        <div className='col-md-6 col-12 mb-3'>
                                            <div>
                                                <label className="form-label">Phone</label>
                                                <input type="text" className="form-control" placeholder="Enter your phone" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-12 mb-3">
                                            <div>
                                                <label className="form-label">Review</label>
                                                <textarea className="form-control" placeholder='Write your review here...' rows="4"></textarea>
                                            </div>
                                        </div>

                                        <label className="form-label">Would you recommend us to your friends?</label>
                                        <div className="col-md-6 col-sm-6 col-6 mb-3">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" checked />
                                                <label className="form-check-label">
                                                    Yes
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-6 mb-3">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" />
                                                <label className="form-check-label" >
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-12 mb-3">
                                            <div>
                                                <label className="form-label">Message</label>
                                                <textarea className="form-control" placeholder='Type your message here...' rows="4"></textarea>
                                            </div>
                                        </div>
                                        <div className="button">
                                            <button className='btn submit_btn'>Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <section className='test_section3'>
                <div className="container">
                    <div className="card">
                        <div className="row d-flex ai-center row-flex">
                            <div className="col-md-4">
                                <div className="content">
                                    <h2>Ready to book your service?</h2>
                                    <Link to="/services">
                                        <button className='btn'>Get Started</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-8 image_col">
                                <div className='image'>
                                    {/* <img src={appliances} alt="image" className='img-fluid' /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Testimonial
