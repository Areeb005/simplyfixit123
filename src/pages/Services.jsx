import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import s_image from "../assets/up_to_40.svg"
import booking from "../assets/booking.svg"
import Technician from '../components/Slider/Technician'
import appliances from "../assets/appliances.jpg"

import service1 from "../assets/Services/Audio & Video.webp"
import service2 from "../assets/Services/Computers & Printers.webp"
import service3 from "../assets/Services/Fan & Light.webp"
import service4 from "../assets/Services/Furniture.webp"
import service5 from "../assets/Services/Home Security.webp"
import service6 from "../assets/Services/Smart Home.webp"
import service7 from "../assets/Services/TV mounting.webp"
import service8 from "../assets/Services/Wifi & Network.webp"
import { Link } from 'react-router-dom'
import { addInstantQuoteData } from '../firebase/apis'



function Services() {
    const notify = () => toast("Request Submitted", {
        draggable: true,
        theme: "light",
        className: "react-toast-added"
    });


    const [your_name, setyour_name] = useState('')
    const [your_email, setyour_email] = useState('')
    const [your_subject, setyour_subject] = useState('')
    const [your_message, setyour_message] = useState('')


    const submitInstantQuoteForm = (e) => {
        e.preventDefault()
        const obj = {
            your_name,
            your_email,
            your_subject,
            your_message,
        }

        addInstantQuoteData(obj);

        notify();
        setyour_name('')
        setyour_email('')
        setyour_subject('')
        setyour_message('')

        console.log(obj);


    }

    useEffect(() => {
        localStorage.clear();
        localStorage.clear();
    })

    return (
        <>
            <Navbar />
            <ToastContainer />

            <section className='services-hero-section'>
                <div className="container">
                    <div className="row">
                        <div className="hero_head">
                            <h1>SERVICES</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className='service_section1'>
                <div className="container">
                    <div className="row d-flex ai-center">
                        <div className="col-lg-6 col-md-4 col-sm-12 marginBottom">
                            <div className="content">
                                <h3>Book an appointment today</h3>
                                <p>We can mount your TV, conceal wires, and more!</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-8 col-sm-12">
                            <div className='d-flex jc-center text-center size_cards'>
                                <div className="col-lg-3 col-md-3 col-sm-3">
                                    <div className="s-cards">
                                        <img src={s_image} alt="icon" className='img-fluid' />
                                        <p>Up to 31"</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3">
                                    <div className="s-cards">
                                        <img src={s_image} alt="icon" className='img-fluid' />
                                        <p>Up to 31"</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3">
                                    <div className="s-cards">
                                        <img src={s_image} alt="icon" className='img-fluid' />
                                        <p>Up to 31"</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3">
                                    <div className="s-cards">
                                        <img src={s_image} alt="icon" className='img-fluid' />
                                        <p>Up to 31"</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className='service_section2'>
                <div className="container">
                    <div className="row jc-center text-center">
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-5">
                            <div className="content">
                                <img src={booking} alt="image" className='img-fluid' />
                                <h3>Quality Service</h3>
                                <p>Expert repairs and installations for TV mounting, Smart Home, Fan and Light repair, and Handyman services.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-5">
                            <div className="content">
                                <img src={booking} alt="image" className='img-fluid' />
                                <h3>Easy Scheduling</h3>
                                <p>Seamlessly book appointments online at your convenience.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-5">
                            <div className="content">
                                <img src={booking} alt="image" className='img-fluid' />
                                <h3>Professional Team</h3>
                                <p>Highly skilled technicians dedicated to providing top-tier service.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-5">
                            <div className="content">
                                <img src={booking} alt="image" className='img-fluid' />
                                <h3>24-Hour Support</h3>
                                <p>Round-the-clock assistance to address all your service needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='service_section3'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 mb-5">
                            <Link to="/services/tv-mounting" className='services_link'>
                                <div className="card h-100">
                                    <img className="img-fluid" src={service7} alt="image" />
                                    <div className="card-body">
                                        <h5 className="card-title">TV Mounting</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <button className='btn book_btn'>
                                            Book A Service
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6 mb-5">
                            <Link to="/services/handyman" className='services_link'>
                                <div className="card h-100">
                                    <img className="img-fluid" src={service4} alt="image" />
                                    <div className="card-body">
                                        <h5 className="card-title">Handyman Services</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <button className='btn book_btn'>
                                            Book A Service
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6 mb-5">
                            <Link to={`/services/fan-light`} className='services_link'>
                                <div className="card h-100">
                                    <img className="img-fluid" src={service3} alt="image" />
                                    <div className="card-body">
                                        <h5 className="card-title">Fan & Light Installation</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <button className='btn book_btn'>
                                            Book A Service
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6 mb-5">
                            <Link to={`/services/smart-home`} className='services_link'>
                                <div className="card h-100">
                                    <img className="img-fluid" src={service6} alt="image" />
                                    <div className="card-body">
                                        <h5 className="card-title">Smart Home Installation</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <button className='btn book_btn'>
                                            Book A Service
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

            <section className='service_section4'>
                <div className="container">
                    <div className="row d-flex jc-center text-center">
                        <div className="col-md-4 col-sm-4">
                            <div className="content">
                                <h1>2020</h1>
                                <h5>Year Established</h5>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="content">
                                <h1>1000+</h1>
                                <h5>Projects Completed</h5>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="content">
                                <h1>47</h1>
                                <h5>Contractors Appointed</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='service_section5'>
                <div className="container">
                    <div className="contact_form">
                        <div className="form_head">
                            <h2>Get An Instant Quote</h2>
                            <p>It's free & easy-- no obligations</p>
                        </div>
                        <form action="" onSubmit={(e) => submitInstantQuoteForm(e)}>
                            <div className="form">
                                <div className='mb-3'>
                                    <label className="form-label">YOUR NAME</label>
                                    <input type="text" className="form-control" value={your_name} onChange={(e) => setyour_name(e.target.value)} placeholder="Enter your name" required />
                                </div>
                                <div className='mb-3'>
                                    <label className="form-label">YOUR EMAIL</label>
                                    <input type="email" className="form-control" value={your_email} onChange={(e) => setyour_email(e.target.value)} placeholder="Enter your email" required />
                                </div>
                                <div className='mb-3'>
                                    <label className="form-label">SUBJECT</label>
                                    <input type="text" className="form-control" value={your_subject} onChange={(e) => setyour_subject(e.target.value)} placeholder="Enter your subject" required />
                                </div>
                                <div className='mb-3'>
                                    <label className="form-label">MESSAGE</label>
                                    <textarea className="form-control" value={your_message} onChange={(e) => setyour_message(e.target.value)} placeholder='Type your message here...' rows="4" required></textarea>
                                </div>
                                <div className="button">
                                    <button className='btn'>SEND MESSAGE</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div >
            </section >

            {/* <section className='tv-section4'>
                <div className="container">
                    <div className="card">
                        <div className="row d-flex ai-center">
                            <div className="col-md-4">
                                <div className="content">
                                    <h2>Ready to get started?</h2>
                                    <p>We're only a few clicks or a phone call away.</p>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className='image'>
                                    <img src={appliances} alt="image" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default Services
