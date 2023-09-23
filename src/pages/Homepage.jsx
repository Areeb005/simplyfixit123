import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
import { BsArrowRight } from 'react-icons/bs'
import { addContactUsData } from '../firebase/apis';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from '../components/Navbar'

import Reviews from '../components/Slider/Reviews'
import BookAserviceBtn from '../components/BookAserviceBtn'

import about from "../assets/About us/img 1.webp"

import img_1 from "../assets/Clients/img 1.webp"
import img_2 from "../assets/Clients/img 2.webp"
import img_3 from "../assets/Clients/img 3.webp"
import img_4 from "../assets/Clients/img 4.webp"
import img_5 from "../assets/Clients/img 5.webp"
import SimpleSlider from '../components/Slider/Slider'

import TV from "../assets/Services/TV mounting.webp"

function Homepage() {

    const [services, setServices] = useState(1);

    const notify = () => toast("Submitted", {
        draggable: true,
        theme: "light",
        className: "react-toast-added"
    });


    const [your_name, setyour_name] = useState('')
    const [your_email, setyour_email] = useState('')
    const [your_phone, setyour_phone] = useState('')
    const [your_address, setyour_address] = useState('')
    const [your_subject, setyour_subject] = useState('')
    const [your_message, setyour_message] = useState('')

    const submitContactUsForm = (e) => {

        e.preventDefault()

        const obj = {
            your_name,
            your_email,
            your_phone,
            your_address,
            your_subject,
            your_message,
        }

        addContactUsData(obj);

        notify();
        setyour_name('')
        setyour_address('')
        setyour_subject('')
        setyour_phone('')
        setyour_email('')
        setyour_message('')

    }

    useEffect(() => {
        localStorage.clear();
        localStorage.clear();
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    })

    return (
        <>
            {/* =========================== H E R O - S E C T I O N =========================== */}

            <ToastContainer />
            <SimpleSlider />

            <section className='hero-section'>
                <Navbar />
                <div className="container">
                    <div className="row">
                        {/* <div className="col-md-6"></div> */}
                        <div className="col-md-6">
                            <div className="content">
                                <h1 className='h1'>
                                    <TypeAnimation
                                        sequence={[
                                            // Same substring at the start will only be typed out once, initially
                                            'Elevate Your Home with Our Expertise in TV Mounting',
                                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                                            'Elevate Your Home with Our Expertise in Handyman Services',
                                            1000,
                                            'Elevate Your Home with Our Expertise in Fan and light installation',
                                            1000,
                                            'Elevate Your Home with Our Expertise in Smart Home installation',
                                            1000,
                                        ]}
                                        wrapper="h1"
                                        speed={30}
                                        repeat={Infinity}
                                    />
                                </h1>
                            </div>
                            <Link to="/services">
                                <button className='btn book_btn'>
                                    Book A Service
                                </button>
                            </Link>
                            {/* <button className='btn btn-book'>Book A Service</button> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================== S E R V I C E S - S E C T I O N =========================== */}

            <section className='section2'>
                <div className="container">
                    <div className="sectionTitle">
                        <h1 className='secHeading' data-aos="fade-up" data-aos-duration="900" data-aos-easing="linear">Our Services</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="services">
                                <div className="s_card desktop_service_card">
                                    <Link to="/services/tv-mounting" onClick={() => setServices(1)} style={{ textDecoration: "none" }}>
                                        <div className="s_tab">
                                            <h4>TV mounting</h4>
                                        </div>
                                    </Link>
                                    <Link to="/services/handyman" onClick={() => setServices(2)} style={{ textDecoration: "none" }}>
                                        <div className="s_tab">
                                            <h4>Handyman Services</h4>
                                        </div>
                                    </Link>
                                    <Link to="/services/fan-light" onClick={() => setServices(3)} style={{ textDecoration: "none" }}>
                                        <div className="s_tab">
                                            <h4>Fan & Light</h4>
                                        </div>
                                    </Link>
                                    <Link to="/services/smart-home" onClick={() => setServices(4)} style={{ textDecoration: "none" }}>
                                        <div className="s_tab">
                                            <h4>Smart home installation</h4>
                                        </div>
                                    </Link>
                                </div>

                                <div className="s_card mobile_service_card">
                                    <div className="row">
                                        <div className="col-sm-3 col-6">
                                            <Link to="/services/tv-mounting" style={{ textDecoration: "none" }}>
                                                <div className="s_tab" onClick={() => setServices(1)}>
                                                    <h4>TV mounting</h4>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-sm-3 col-6">
                                            <Link to="/services/handyman" style={{ textDecoration: "none" }}>
                                                <div className="s_tab" onClick={() => setServices(2)}>
                                                    <h4>Handyman Services</h4>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-sm-3 col-6">
                                            <Link to="/services/fan-light" style={{ textDecoration: "none" }}>
                                                <div className="s_tab" onClick={() => setServices(3)}>
                                                    <h4>Fan & Light</h4>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-sm-3 col-6">
                                            <Link to="/services/smart-home" style={{ textDecoration: "none" }}>
                                                <div className="s_tab" onClick={() => setServices(4)}>
                                                    <h4>Smart home installation</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="s_desc">
                                {
                                    services === 1 &&
                                    <div className="s7">
                                        <div className="content">
                                            <h4>TV mounting</h4>
                                            <Link to="/services" className='read-more'>
                                                Book a Service <BsArrowRight className='mb-1' />
                                            </Link>
                                        </div>
                                    </div>
                                }
                                {
                                    services === 2 &&
                                    <div className="s4">
                                        <div className="content">
                                            <h4>Handyman Services</h4>
                                            <Link to="/services" className='read-more'>
                                                Book a Service <BsArrowRight className='mb-1' />
                                            </Link>
                                        </div>
                                    </div>
                                }
                                {
                                    services === 3 &&
                                    <div className="s3">
                                        <div className="content">
                                            <h4>Fan & Light</h4>
                                            <Link to="/services" className='read-more'>
                                                Book a Service <BsArrowRight className='mb-1' />
                                            </Link>
                                        </div>
                                    </div>
                                }
                                {
                                    services === 4 &&
                                    <div className="s6">
                                        <div className="content">
                                            <h4>Smart Home Installation</h4>
                                            <Link to="/services" className='read-more'>
                                                Book a Service <BsArrowRight className='mb-1' />
                                            </Link>
                                        </div>
                                    </div>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================== W O R K - S E C T I O N =========================== */}

            <section className='section3'>
                <div className="container">
                    <div className="sectionTitle">
                        <h1 className='secHeading' data-aos="fade-up" data-aos-duration="800" data-aos-easing="linear">How It Works</h1>
                    </div>

                    <div className="row mb-5">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 col-row-1 mb-5">
                            <div className="card">
                                <div className='d-flex justify-content-between'>
                                    <h4 className="text-light">Service Selection</h4>
                                    <span className='s-num'>1</span>
                                </div>
                                <p className="paar">Begin by selecting the service you require from our range of offerings</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 col-row-1 mb-5">
                            <div className="card">
                                <div className='d-flex justify-content-between'>
                                    <h4 className="text-light">Appointment Scheduling</h4>
                                    <span className='s-num'>2</span>
                                </div>
                                <p className="paar">Choose a date and time that aligns with your schedule for the service to take place.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 col-row-1 mb-5">
                            <div className="card">
                                <div className='d-flex justify-content-between'>
                                    <h4 className="text-light">Online Payment</h4>
                                    <span className='s-num'>3</span>
                                </div>
                                <p className="paar">Make a secure online payment using your preferred payment method. We offer a hassle-free payment process.</p>
                            </div>

                            <div className="dotted-line3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="100" viewBox="0 0 8 883.988">
                                    <path className="path" id="Path_108" data-name="Path 108" d="M10693.682,3226.986v883.988" transform="translate(-10689.682 -3226.986)" fill="none" stroke="#000" strokeWidth="33" strokeDasharray="65"></path>
                                </svg>
                            </div>

                        </div>

                        <div className="dotted-line"></div>
                        <div className="dotted-line1"></div>
                        <div className="dotted-line2"></div>

                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 col-row-2 mt-5">
                            <div className="card">
                                <div className='d-flex justify-content-between'>
                                    <h4 className="text-light">Technician Assignment</h4>
                                    <span className='s-num'>4</span>
                                </div>
                                <p className="paar">Once your appointment is confirmed, we'll promptly assign a qualified technician to your service request.</p>
                            </div>

                            <div className="dotted-line4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="100" viewBox="0 0 8 883.988">
                                    <path className="path" id="Path_108" data-name="Path 108" d="M10693.682,3226.986v883.988" transform="translate(-10689.682 -3226.986)" fill="none" stroke="#000" strokeWidth="33" strokeDasharray="65"></path>
                                </svg>
                            </div>

                        </div>

                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt-5">
                            <div className="card">
                                <div className='d-flex justify-content-between'>
                                    <h4 className="text-light">Expert Service at Your Doorstep</h4>
                                    <span className='s-num'>5</span>
                                </div>
                                <p className="paar">On the appointed day and time, our skilled technician will arrive at your location. They will arrive equipped with all necessary tools and materials to efficiently perform the service.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt-5">
                            <div className="card">
                                <div className='d-flex justify-content-between'>
                                    <h4 className="text-light">Satisfaction Guaranteed</h4>
                                    <span className='s-num'>6</span>
                                </div>
                                <p className="paar">Rest assured that our technicians are highly trained and background-checked professionals.</p>
                                <p className="paar mt-0">We take pride in delivering high-quality service and ensuring your complete satisfaction.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* =========================== A B O U T - S E C T I O N =========================== */}

            <section className='section4' id="about">
                <div className="container">
                    <div className="row ai-center" data-aos="fade-up" data-aos-offset="300" data-aos-easing="linear">
                        <div className="col-md-6">
                            <div className="imgDiv">
                                <img className='img-fluid' src={about} alt="image" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="content">
                                <p className="secTitle">ABOUT</p>
                                <h1 className='secHeading'>ALL ABOUT US</h1>
                                <p className='secText mt-4' style={{ textAlign: "justify" }} >Since opening the doors to our business in 2020, Simplyfixitnow has proudly offered residential and commercial technician services being fully dedicated to client satisfaction. In all that we do, we strive to work meticulously and with integrity in order to provide high-quality results in all our projects. Please contact us today, we would love to speak with you about any of your projects’ needs.</p>
                                <p className='secText' style={{ textAlign: "justify" }}>From the smallest to the largest task, we believe your home deserves top-priority service that is efficient and reliable. This is why we started Simplyfixitnow, to deliver quality professional services that you can trust.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* =========================== C L I E N T - S E C T I O N =========================== */}

            < section className='section5'>
                <div className="container">
                    <div className="sectionTitle">
                        <h1 className='secHeading text-center' data-aos="fade-up" data-aos-duration="800" data-aos-easing="linear">
                            Our Clients
                        </h1>
                    </div>
                    <div className="row d-flex jc-center text-center ai-center">
                        <div className="col-md-2 col-sm-6 col-6">
                            <img src={img_1} alt="image" className='img-fluid amazon' />
                        </div>
                        <div className="col-md-2 col-sm-6 col-6">
                            <img src={img_2} alt="image" className='img-fluid helloTech' />
                        </div>
                        <div className="col-md-2 col-sm-6 col-6">
                            <img src={img_3} alt="image" className='img-fluid google' />
                        </div>
                        <div className="col-md-2 col-sm-6 col-6">
                            <img src={img_4} alt="image" className='img-fluid xfininty' />
                        </div>
                        <div className="col-md-2 col-sm-6 col-6">
                            <img src={img_5} alt="image" className='img-fluid thumbtack' />
                        </div>
                    </div>
                </div>
            </section >

            {/* =========================== T E C H - S E C T I O N =========================== */}

            <section className='section7' id='tech'>
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-md-8 col-12">
                            <div className="test_form">
                                <div className="form_head">
                                    <h1>Become A Tech</h1>
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
                                        <div className='col-md-12 col-12 mb-3'>
                                            <div>
                                                <label className="form-label">Address</label>
                                                <input type="text" className="form-control" placeholder="Enter your phone" />
                                            </div>
                                        </div>
                                        <div className='col-md-12 col-12 mb-3'>
                                            <div>
                                                <label className="form-label">What city do you wish to work in</label>
                                                <input type="text" className="form-control" placeholder="Enter your phone" />
                                            </div>
                                        </div>

                                        <label className="form-label">Do you have your own mode of transportation?</label>
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

                                        <label className="form-label">Do you have liability insurance coverage as a service provider?</label>
                                        <div className="col-md-6 col-sm-6 col-6 mb-3">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault1" checked />
                                                <label className="form-check-label">
                                                    Yes
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-6 mb-3">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault1" />
                                                <label className="form-check-label" >
                                                    No
                                                </label>
                                            </div>
                                        </div>

                                        <label className="form-label">Do you own a company with more than 2 technicians?</label>
                                        <div className="col-md-6 col-sm-6 col-6 mb-3">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault2" checked />
                                                <label className="form-check-label">
                                                    Yes
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-6 mb-3">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault2" />
                                                <label className="form-check-label" >
                                                    No
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-md-12 mb-5">
                                            <label className="form-label">Select your amount of experience</label>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected disabled value="Select...">Select...</option>
                                                <option value="1">No Experience</option>
                                                <option value="2">6 Months</option>
                                                <option value="3">1 - 2 Years</option>
                                            </select>
                                        </div>


                                        <div className="button">
                                            <button className='btn submit_btn'>Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-4"></div>

                    </div>
                </div>
            </section >

            {/* =========================== C O N T A C T - S E C T I O N =========================== */}

            < section className='section6' id='contact'>
                <div className="container">
                    <div className="row d-flex jc-center">
                        <div className="col-md-6">
                            <div className="content text-center">
                                <h1 className='secHeading' data-aos="fade-up" data-aos-duration="800" data-aos-easing="linear">CONTACT</h1>
                                <p className='text-left' data-aos="fade-up" data-aos-duration="900" data-aos-easing="linear">We offer a wide range of home installation services throughout the entire state of Georgia. Our skilled technicians are available to serve all major cities, including Atlanta, Savannah, Augusta, Macon, and Columbus. We also cover rural areas and small towns, so no matter where you live in Georgia, you can count on us for reliable and professional service. Our team of experienced professionals will take the time to understand your needs and provide the best solutions to meet your needs. We are committed to providing the highest quality of service and satisfaction for all of our customers. Contact us today!</p>
                                <p data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">wesimplyfixitnow@gmail.com</p>
                                <p data-aos="fade-up" data-aos-duration="1100" data-aos-easing="linear">(470) 599-6180</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <form action="" onSubmit={(e) => submitContactUsForm(e)}>
                                <div className="row">
                                    <div className='col-md-6 mb-3'>
                                        <div>
                                            <label className="form-label">Name</label>
                                            <input type="text" className="form-control" value={your_name} onChange={(e) => setyour_name(e.target.value)} placeholder="Enter your name" required />
                                        </div>
                                    </div>
                                    <div className='col-md-6 mb-3'>
                                        <div>
                                            <label className="form-label">Email</label>
                                            <input type="email" className="form-control" value={your_email} onChange={(e) => setyour_email(e.target.value)} placeholder="Enter your email" required />
                                        </div>
                                    </div>
                                    <div className='col-md-6 mb-3'>
                                        <div>
                                            <label className="form-label">Phone</label>
                                            <input type="text" className="form-control" value={your_phone} onChange={(e) => setyour_phone(e.target.value)} placeholder="Enter your phone" required />
                                        </div>
                                    </div>
                                    <div className='col-md-6 mb-3'>
                                        <div>
                                            <label className="form-label">Address</label>
                                            <input type="text" className="form-control" value={your_address} onChange={(e) => setyour_address(e.target.value)} placeholder="Enter your address" required />
                                        </div>
                                    </div>
                                    <div className='col-md-12 mb-3'>
                                        <div>
                                            <label className="form-label">Subject</label>
                                            <input type="text" className="form-control" value={your_subject} onChange={(e) => setyour_subject(e.target.value)} placeholder="Enter your subject" required />
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <div>
                                            <label className="form-label">Message</label>
                                            <textarea className="form-control" value={your_message} onChange={(e) => setyour_message(e.target.value)} placeholder='Type your message here...' rows="4" required></textarea>
                                        </div>
                                    </div>
                                    <div className="button">
                                        <button className='btn submit_btn'>Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section >


            {/* <section className='section-one'>
                <div className="container">
                    <div className="row jc-center">
                        <div className="col-md-2">
                            <img src={image} alt="image" className='img-fluid' />
                        </div>
                        <div className="col-md-2">
                            <img src={image} alt="image" className='img-fluid' />
                        </div>
                        <div className="col-md-2">
                            <img src={image} alt="image" className='img-fluid' />
                        </div>
                        <div className="col-md-2">
                            <img src={image} alt="image" className='img-fluid' />
                        </div>
                        <div className="col-md-2">
                            <img src={image} alt="image" className='img-fluid' />
                        </div>
                        <div className="col-md-2">
                            <img src={image} alt="image" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <section className='section-two'>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-3">
                            <div className='d-flex ai-center py-3 px-0'>
                                <img src={homeImage} alt="image" className='img-fluid' />
                                <p>Trusted by 2M+ Households</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className='d-flex ai-center py-3 px-0'>
                                <img src={homeImage} alt="image" className='img-fluid' />
                                <p>Trusted by 2M+ Households</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className='d-flex ai-center py-3 px-0'>
                                <img src={homeImage} alt="image" className='img-fluid' />
                                <p>Trusted by 2M+ Households</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className='d-flex ai-center py-3 px-0'>
                                <img src={homeImage} alt="image" className='img-fluid' />
                                <p>Trusted by 2M+ Households</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <section className='section-three'>
                <div className="container">
                    <div className="caard">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="content">
                                    <h2>Introducing Puls Whole Home</h2>
                                    <h3>The perfect way to protect & upgrade your home</h3>
                                    <p>Our hybrid home warranty and home services membership offers comprehensive coverage for your home appliances and systems and gives you 15% off all Puls home services year-round.</p>
                                    <button className='btn btn-learn_more'>Learn more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <section className='section-four'>
                <div className="container">
                    <div className="caard">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="content">
                                    <h2>Book a Home Service</h2>
                                    <h3>Local and Trusted Pros for <br /> all your home projects</h3>
                                    <input type="search" className="form-control" placeholder="Type to search..." />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="service-image text-end">
                                    <img src={s_image} alt="image" className='img-fluid' />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <h3 className='mb-4'>See All Services</h3>
                            <Services />
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <section className='section-five'>
                <div className="container">
                    <div className="caard">
                        <h2>Home Owners Love Us</h2>
                        <Reviews />
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default Homepage
