import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import testimonial_1 from "../assets/Testimonials/img 1.webp"
import testimonial_2 from "../assets/Testimonials/img 2.webp"
import testimonial_3 from "../assets/Testimonials/img 3.webp"
import { addRateUsData } from '../firebase/apis';

import appliances from "../assets/appliances.jpg"

function Testimonial() {
    const notify = () => toast("Rating Submitted", {
        draggable: true,
        theme: "light",
        className: "react-toast-added"
    });


    const [your_name, setyour_name] = useState('')
    const [your_lastname, setyour_lastname] = useState('')
    const [your_email, setyour_email] = useState('')
    const [your_phone, setyour_phone] = useState('')
    const [your_review, setyour_review] = useState('')
    const [your_recommendation, setyour_recommendation] = useState('Yes')
    const [your_message, setyour_message] = useState('')

    const submitRateUsForm = (e) => {

        e.preventDefault()

        const obj = {
            your_name,
            your_lastname,
            your_email,
            your_phone,
            your_review,
            your_recommendation,
            your_message,
        }

        addRateUsData(obj);

        notify();
        setyour_name('')
        setyour_lastname('')
        setyour_phone('')
        setyour_email('')
        setyour_review('')
        setyour_message('')

    }

    useEffect(() => {
        localStorage.clear();
        localStorage.clear();
    })

    return (
        <>
            <Navbar />
            <ToastContainer />

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
                                <form onSubmit={(e) => submitRateUsForm(e)}>
                                    <div className="form_body">
                                        <div className="row">
                                            <div className='col-md-6 col-12 mb-3'>
                                                <div>
                                                    <label className="form-label">First Name</label>
                                                    <input type="text" className="form-control" value={your_name} onChange={(e) => setyour_name(e.target.value)} placeholder="Enter your first name" required />
                                                </div>
                                            </div>
                                            <div className='col-md-6 col-12 mb-3'>
                                                <div>
                                                    <label className="form-label">Last Name</label>
                                                    <input type="text" className="form-control" value={your_lastname} onChange={(e) => setyour_lastname(e.target.value)} placeholder="Enter your last name" required />
                                                </div>
                                            </div>
                                            <div className='col-md-6 col-12 mb-3'>
                                                <div>
                                                    <label className="form-label">Email</label>
                                                    <input type="email" className="form-control" value={your_email} onChange={(e) => setyour_email(e.target.value)} placeholder="Enter your email" required />
                                                </div>
                                            </div>
                                            <div className='col-md-6 col-12 mb-3'>
                                                <div>
                                                    <label className="form-label">Phone</label>
                                                    <input type="tel" className="form-control" value={your_phone} onChange={(e) => setyour_phone(e.target.value)} placeholder="Enter your phone" required />
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-12 mb-3">
                                                <div>
                                                    <label className="form-label">Review</label>
                                                    <textarea className="form-control" value={your_review} onChange={(e) => setyour_review(e.target.value)} placeholder='Write your review here...' rows="4" required></textarea>
                                                </div>
                                            </div>

                                            <label className="form-label">Would you recommend us to your friends?</label>
                                            <div className="col-md-6 col-sm-6 col-6 mb-3">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" value={'Yes'} onClick={(e) => setyour_recommendation(e.target.value)} checked />
                                                    <label className="form-check-label">
                                                        Yes
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6 col-6 mb-3">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" value={'No'} onClick={(e) => setyour_recommendation(e.target.value)} />
                                                    <label className="form-check-label" >
                                                        No
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-12 mb-3">
                                                <div>
                                                    <label className="form-label">Message</label>
                                                    <textarea className="form-control" value={your_message} onChange={(e) => setyour_message(e.target.value)} placeholder='Type your message here...' rows="4" required></textarea>
                                                </div>
                                            </div>
                                            <div className="button">
                                                <button className='btn submit_btn'>Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
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
