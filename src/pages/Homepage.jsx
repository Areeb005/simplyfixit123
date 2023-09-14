import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

import image from "../assets/cnbc.svg"
import homeImage from "../assets/home.svg"
import s_image from "../assets/plans.png"
import Services from '../components/Slider/Services'
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
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
import { BsArrowRight } from 'react-icons/bs'

function Homepage() {

    const [services, setServices] = useState(1);

    useEffect(() => {
        localStorage.clear();
    })

    return (
        <>
            {/* =========================== H E R O - S E C T I O N =========================== */}

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
                                            'Elevate Your Home with Our Expertise in Audio & Video',
                                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                                            'Elevate Your Home with Our Expertise in Computers & Printers',
                                            1000,
                                            'Elevate Your Home with Our Expertise in Fan & Light',
                                            1000,
                                            'Elevate Your Home with Our Expertise in Furniture',
                                            1000,
                                            'Elevate Your Home with Our Expertise in Home Security',
                                            1000,
                                            'Elevate Your Home with Our Expertise in Smart home installation',
                                            1000,
                                            'Elevate Your Home with Our Expertise in TV mounting',
                                            1000,
                                            'Elevate Your Home with Our Expertise in Wifi & Network',
                                            1000
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
                                <div className="s_card">
                                    <div className="s_tab" onClick={() => setServices(1)}>
                                        <h4>Audio & Video</h4>
                                    </div>
                                    <div className="s_tab" onClick={() => setServices(2)}>
                                        <h4>Computers & Printers</h4>
                                    </div>
                                    <div className="s_tab" onClick={() => setServices(3)}>
                                        <h4>Fan & Light</h4>
                                    </div>
                                    <div className="s_tab" onClick={() => setServices(4)}>
                                        <h4>Furniture</h4>
                                    </div>
                                    <div className="s_tab" onClick={() => setServices(5)}>
                                        <h4>Home Security</h4>
                                    </div>
                                    <div className="s_tab" onClick={() => setServices(6)}>
                                        <h4>Smart home installation</h4>
                                    </div>
                                    <div className="s_tab" onClick={() => setServices(7)}>
                                        <h4>TV mounting</h4>
                                    </div>
                                    <div className="s_tab" onClick={() => setServices(8)}>
                                        <h4>Wifi & Network</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="s_desc">
                                {
                                    services === 1 &&
                                    <div className="s1">
                                        <div className="content">
                                            <h4>Audio & Video</h4>
                                            <Link to="/services" className='read-more'>
                                                Read More <BsArrowRight className='mb-1' />
                                            </Link>
                                        </div>
                                    </div>
                                }
                                {
                                    services === 2 &&
                                    <div className="s2">
                                        <div className="content">
                                            <h4>Computers & Printers</h4>
                                            <Link to="/services" className='read-more'>
                                                Read More <BsArrowRight className='mb-1' />
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
                                                Read More <BsArrowRight className='mb-1' />
                                            </Link>
                                        </div>
                                    </div>
                                }
                                {
                                    services === 4 &&
                                    <div className="s4">
                                        <div className="content">
                                            <h4>Furniture</h4>
                                            <Link to="/services" className='read-more'>
                                                Read More <BsArrowRight className='mb-1' />
                                            </Link>
                                        </div>
                                    </div>
                                }
                                {
                                    services === 5 &&
                                    <div className="s5">
                                        <div className="content">
                                            <h4>Home Security</h4>
                                            <Link to="/services" className='read-more'>
                                                Read More <BsArrowRight className='mb-1' />
                                            </Link>
                                        </div>
                                    </div>
                                }
                                {
                                    services === 6 &&
                                    <div className="s6">
                                        <div className="content">
                                            <h4>Smart Home</h4>
                                            <Link to="/services" className='read-more'>
                                                Read More <BsArrowRight className='mb-1' />
                                            </Link>
                                        </div>
                                    </div>
                                }
                                {
                                    services === 7 &&
                                    <div className="s7">
                                        <div className="content">
                                            <h4>TV mounting</h4>
                                            <Link to="/services" className='read-more'>
                                                Read More <BsArrowRight className='mb-1' />
                                            </Link>
                                        </div>
                                    </div>
                                }
                                {
                                    services === 8 &&
                                    <div className="s8">
                                        <div className="content">
                                            <h4>Wifi & Network</h4>
                                            <Link to="/services" className='read-more'>
                                                Read More <BsArrowRight className='mb-1' />
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
                                    <h4 className="text-light">Initial Consultation</h4>
                                    <span className='s-num'>1</span>
                                </div>
                                <p className="paar">We start by understanding the requirements and goals of your business. This helps us in developing a customized plan for your project.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 col-row-1 mb-5">
                            <div className="card">
                                <div className='d-flex justify-content-between'>
                                    <h4 className="text-light">Project Planning</h4>
                                    <span className='s-num'>2</span>
                                </div>
                                <p className="paar">A comprehensive project strategy containing important milestones and deliverables will be developed by our team. We'll collaborate with you to make sure the strategy satisfies your needs.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 col-row-1 mb-5">
                            <div className="card">
                                <div className='d-flex justify-content-between'>
                                    <h4 className="text-light">Design and Development</h4>
                                    <span className='s-num'>3</span>
                                </div>
                                <p className="paar">Our experienced team will work on the design and development of your project. Throughout the entire process, we will keep you updated and ask for feedback on various stages.</p>
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
                                    <h4 className="text-light">Deployment</h4>
                                    <span className='s-num'>4</span>
                                </div>
                                <p className="paar">To ensure that your project satisfies the highest levels of quality, we conduct thorough testing. In order to make sure the project complies with your criteria, we also conduct user acceptance testing.</p>
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
                                    <h4 className="text-light">Quality Assurance</h4>
                                    <span className='s-num'>5</span>
                                </div>
                                <p className="paar">We will deploy the project to your server after it has been tested and approved. To make sure the deployment process is smooth and easy, we will collaborate with you.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt-5">
                            <div className="card">
                                <div className='d-flex justify-content-between'>
                                    <h4 className="text-light">Maintenance and Support</h4>
                                    <span className='s-num'>6</span>
                                </div>
                                <p className="paar">We provide continuous support and maintenance services to make sure your project is successful. Any questions or complaints can be addressed at any time by our team.</p>
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
                        <div className="col-md-2 col-sm-6">
                            <img src={img_1} alt="image" className='img-fluid' />
                        </div>
                        <div className="col-md-2 col-sm-6">
                            <img src={img_2} alt="image" className='img-fluid' />
                        </div>
                        <div className="col-md-2 col-sm-6">
                            <img src={img_3} alt="image" className='img-fluid' />
                        </div>
                        <div className="col-md-2 col-sm-6">
                            <img src={img_4} alt="image" className='img-fluid' />
                        </div>
                        <div className="col-md-2 col-sm-6">
                            <img src={img_5} alt="image" className='img-fluid' />
                        </div>
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
                            <div className="row">
                                <div className='col-md-6 mb-3'>
                                    <div>
                                        <label className="form-label">Name</label>
                                        <input type="text" className="form-control" placeholder="Enter your name" />
                                    </div>
                                </div>
                                <div className='col-md-6 mb-3'>
                                    <div>
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control" placeholder="Enter your email" />
                                    </div>
                                </div>
                                <div className='col-md-6 mb-3'>
                                    <div>
                                        <label className="form-label">Phone</label>
                                        <input type="text" className="form-control" placeholder="Enter your phone" />
                                    </div>
                                </div>
                                <div className='col-md-6 mb-3'>
                                    <div>
                                        <label className="form-label">Address</label>
                                        <input type="text" className="form-control" placeholder="Enter your address" />
                                    </div>
                                </div>
                                <div className='col-md-12 mb-3'>
                                    <div>
                                        <label className="form-label">Subject</label>
                                        <input type="text" className="form-control" placeholder="Enter your subject" />
                                    </div>
                                </div>
                                <div className="col-md-12 mb-3">
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
                                    <input type="search" class="form-control" placeholder="Type to search..." />
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
