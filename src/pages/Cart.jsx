import React from 'react'
import Navbar from '../components/Navbar'
import Checkout from '../components/payment/checkout'
import StripeCheckoutForm from '../components/payment/StripeCheckoutForm'



function Cart() {
    return (
        <>

            <Navbar />

            <section className="cart-section">
                <div className="container">
                    <div className="row d-flex jc-center ai-center">
                        <div className="col">
                            <div className="card">
                                <div className="card-body p-4">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <h5 className="mb-3">
                                                <a href="#!" className="text-body">
                                                    <i className="fas fa-long-arrow-alt-left me-2"></i>
                                                    Continue shopping
                                                </a>
                                            </h5>

                                            <hr />

                                            <div className="d-flex jc-between ai-center mb-4">
                                                <div>
                                                    <p className="mb-1">Shopping cart</p>
                                                    <p className="mb-0">You have 4 items in your cart</p>
                                                </div>
                                                <div>
                                                    <p className="mb-0">
                                                        <span className="text-muted">Sort by:</span>
                                                        <a href="#!" className="text-body">price
                                                            <i className="fas fa-angle-down mt-1"></i>
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="card mb-3 desktop-card">
                                                <div className="card-body">
                                                    <div className="d-flex jc-between row-flex">
                                                        <div className="d-flex flex-row ai-center">
                                                            <div>
                                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp" className="img-fluid rounded-3 cart-item" alt="Shopping item" style={{ width: "65px" }} />
                                                            </div>
                                                            <div className="ms-3">
                                                                <h5>Iphone 11 pro</h5>
                                                                <p className="small mb-0">256GB, Navy Blue</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-row ai-center text-center">
                                                            <div style={{ width: "50px" }}>
                                                                <h5 className="fw-normal mb-0">2</h5>
                                                            </div>
                                                            <div style={{ width: "80px" }}>
                                                                <h5 className="mb-0">$900</h5>
                                                            </div>
                                                            <a href="#!" style={{ color: "#cecece" }}>
                                                                <i className="fas fa-trash-alt"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card mb-3 desktop-card">
                                                <div className="card-body">
                                                    <div className="d-flex jc-between">
                                                        <div className="d-flex flex-row ai-center">
                                                            <div>
                                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp" className="img-fluid rounded-3 cart-item" alt="Shopping item" style={{ width: "65px" }} />
                                                            </div>
                                                            <div className="ms-3">
                                                                <h5>Samsung galaxy Note 10 </h5>
                                                                <p className="small mb-0">256GB, Navy Blue</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-row ai-center text-center">
                                                            <div style={{ width: "50px" }}>
                                                                <h5 className="fw-normal mb-0">2</h5>
                                                            </div>
                                                            <div style={{ width: "80px" }}>
                                                                <h5 className="mb-0">$900</h5>
                                                            </div>
                                                            <a href="#!" style={{ color: "#cecece" }}><i className="fas fa-trash-alt"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card mb-3 desktop-card">
                                                <div className="card-body">
                                                    <div className="d-flex jc-between">
                                                        <div className="d-flex flex-row ai-center">
                                                            <div>
                                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp" className="img-fluid rounded-3 cart-item" alt="Shopping item" style={{ width: "65px" }} />
                                                            </div>
                                                            <div className="ms-3">
                                                                <h5>Canon EOS M50</h5>
                                                                <p className="small mb-0">Onyx Black</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-row ai-center text-center">
                                                            <div style={{ width: "50px" }}>
                                                                <h5 className="fw-normal mb-0">1</h5>
                                                            </div>
                                                            <div style={{ width: "80px" }}>
                                                                <h5 className="mb-0">$1199</h5>
                                                            </div>
                                                            <a href="#!" style={{ color: "#cecece" }}><i className="fas fa-trash-alt"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card mb-3 desktop-card mb-lg-0">
                                                <div className="card-body">
                                                    <div className="d-flex jc-between">
                                                        <div className="d-flex flex-row ai-center">
                                                            <div>
                                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp" className="img-fluid rounded-3 cart-item" alt="Shopping item" style={{ width: "65px" }} />
                                                            </div>
                                                            <div className="ms-3">
                                                                <h5>MacBook Pro</h5>
                                                                <p className="small mb-0">1TB, Graphite</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-row ai-center text-center">
                                                            <div style={{ width: "50px" }}>
                                                                <h5 className="fw-normal mb-0">1</h5>
                                                            </div>
                                                            <div style={{ width: "80px" }}>
                                                                <h5 className="mb-0">$1799</h5>
                                                            </div>
                                                            <a href="#!" style={{ color: "#cecece" }}><i className="fas fa-trash-alt"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card mb-3 mobile-card">
                                                <div className="card-body">
                                                    <div className="mb-3">
                                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp" className="img-fluid rounded-3 cart-item" alt="Shopping item" style={{ width: "65px" }} />
                                                    </div>
                                                    <div className="d-flex flex-row ai-center jc-center">
                                                        <div>
                                                            <h5>Iphone 11 pro</h5>
                                                            <p className="small mb-0">256GB, Navy Blue</p>
                                                        </div>
                                                        <div style={{ width: "100px", textAlign: "center" }}>
                                                            <h5 className="fw-normal mb-0">2</h5>
                                                        </div>
                                                        <div style={{ width: "90px", textAlign: "center" }}>
                                                            <h5 className="mb-0">$900</h5>
                                                        </div>
                                                        <a href="#!" style={{ color: "#cecece" }}>
                                                            <i className="fas fa-trash-alt"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card mb-3 mobile-card">
                                                <div className="card-body">
                                                    <div className='mb-3'>
                                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp" className="img-fluid rounded-3 cart-item" alt="Shopping item" style={{ width: "65px" }} />
                                                    </div>
                                                    <div className="d-flex flex-row ai-center jc-center">
                                                        <div>
                                                            <h5>Samsung galaxy Note 10 </h5>
                                                            <p className="small mb-0">256GB, Navy Blue</p>
                                                        </div>
                                                        <div style={{ width: "100px", textAlign: "center" }}>
                                                            <h5 className="fw-normal mb-0">2</h5>
                                                        </div>
                                                        <div style={{ width: "90px", textAlign: "center" }}>
                                                            <h5 className="mb-0">$900</h5>
                                                        </div>
                                                        <a href="#!" style={{ color: "#cecece" }}><i className="fas fa-trash-alt"></i></a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card mb-3 mobile-card">
                                                <div className="card-body">
                                                    <div className='mb-3'>
                                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp" className="img-fluid rounded-3 cart-item" alt="Shopping item" style={{ width: "65px" }} />
                                                    </div>
                                                    <div className="d-flex flex-row ai-center jc-center">
                                                        <div>
                                                            <h5>Canon EOS M50</h5>
                                                            <p className="small mb-0">Onyx Black</p>
                                                        </div>
                                                        <div style={{ width: "50px", textAlign: "center" }}>
                                                            <h5 className="fw-normal mb-0">1</h5>
                                                        </div>
                                                        <div style={{ width: "80px", textAlign: "center" }}>
                                                            <h5 className="mb-0">$1199</h5>
                                                        </div>
                                                        <a href="#!" style={{ color: "#cecece" }}><i className="fas fa-trash-alt"></i></a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card mb-3 mobile-card">
                                                <div className="card-body">
                                                    <div className='mb-3'>
                                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp" className="img-fluid rounded-3 cart-item" alt="Shopping item" style={{ width: "65px" }} />
                                                    </div>
                                                    <div className="d-flex flex-row ai-center jc-center">
                                                        <div>
                                                            <h5>MacBook Pro</h5>
                                                            <p className="small mb-0">1TB, Graphite</p>
                                                        </div>
                                                        <div style={{ width: "50px", textAlign: "center" }}>
                                                            <h5 className="fw-normal mb-0">1</h5>
                                                        </div>
                                                        <div style={{ width: "80px", textAlign: "center" }}>
                                                            <h5 className="mb-0">$1799</h5>
                                                        </div>
                                                        <a href="#!" style={{ color: "#cecece" }}><i className="fas fa-trash-alt"></i></a>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="col-lg-5">
                                            <div className="card cart-detail text-white">
                                                <div className="card-body">
                                                    <div className="d-flex jc-between ai-center mb-4">
                                                        <h5 className="mb-0">Cart details</h5>
                                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" className="img-fluid rounded-3" style={{ width: "45px" }} alt="Avatar" />
                                                    </div>

                                                    <p className="small mb-2">Card type</p>
                                                    <a href="#!" type="submit" className="text-white">
                                                        <i className="fab fa-cc-mastercard fa-2x me-2"></i>
                                                    </a>
                                                    <a href="#!" type="submit" className="text-white">
                                                        <i className="fab fa-cc-visa fa-2x me-2"></i>
                                                    </a>
                                                    <a href="#!" type="submit" className="text-white">
                                                        <i className="fab fa-cc-amex fa-2x me-2"></i>
                                                    </a>
                                                    <a href="#!" type="submit" className="text-white">
                                                        <i className="fab fa-cc-paypal fa-2x"></i>
                                                    </a>

                                                    <form className="mt-4">
                                                        <div className="form-outline form-white mb-4">
                                                            <input type="text" className="form-control form-control-lg" placeholder="Cardholder's Name" />
                                                        </div>

                                                        <div className="form-outline form-white mb-4">
                                                            <input type="text" className="form-control form-control-lg" placeholder="Card Number" />
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-md-6 mb-4">
                                                                <div className="form-outline form-white">
                                                                    <input type="text" className="form-control form-control-lg" placeholder="Expiration" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 mb-4">
                                                                <div className="form-outline form-white">
                                                                    <input type="password" className="form-control form-control-lg" placeholder="Cvv" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </form>

                                                    <hr className="my-4" />

                                                    <div className="d-flex jc-between">
                                                        <p className="mb-2">Subtotal</p>
                                                        <p className="mb-2">$4798.00</p>
                                                    </div>

                                                    <div className="d-flex jc-between">
                                                        <p className="mb-2">Shipping</p>
                                                        <p className="mb-2">$20.00</p>
                                                    </div>

                                                    <div className="d-flex jc-between mb-4">
                                                        <p className="mb-2">Total(Incl. taxes)</p>
                                                        <p className="mb-2">$4818.00</p>
                                                    </div>

                                                    <button type="button" className="btn checkout-btn btn-block btn-lg">
                                                        <div className="d-flex jc-between">
                                                            <span>$4818.00</span>
                                                            <span>Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                                                        </div>
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >

            {/* <Checkout /> */}

            {/* <StripeCheckoutForm /> */}

        </>
    )
}

export default Cart
