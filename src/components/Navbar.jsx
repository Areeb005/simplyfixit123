import React from 'react'
import { Link } from 'react-router-dom'
import BookAserviceBtn from './BookAserviceBtn'
import { BsCart3 } from "react-icons/bs"

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">Simplyfixitnow</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse jc-center" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            {/* <li className="nav-item active dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Services
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/tv-mounting">TV Mounting</Link>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li> */}
                            <li className="nav-item active">
                                <a className="nav-link" href="/#about">About Us</a>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/testimonial">Testimonials</Link>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/#tech">Become a Tech</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/#contact">Contact Us</a>
                            </li>
                            {/* <li className="nav-item active mob-cart">
                                <Link className="nav-link" to="/cart"><BsCart3 className='cart-icon' /></Link>
                            </li> */}

                        </ul>
                    </div>

                    {/* <div className="nav-item desk-cart">
                        <Link className="nav-link" to="/cart"><BsCart3 className='cart-icon' /></Link>
                    </div> */}

                    <div className='button'>
                        <Link to="/services">
                            <button className='btn book_service_btn'>
                                Book A Service
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
