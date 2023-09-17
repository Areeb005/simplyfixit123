import { useState, useEffect } from "react";
import Navbar from '../components/Navbar'
import StripeCheckoutForm from '../components/payment/StripeCheckoutForm'

import { CLIENT_ID } from '../config/config'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";



function Cart() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [city, setCity] = useState("")
    const [address, setAddress] = useState("")
    const [paymentType, setPaymentType] = useState("")
    const [paymentShow, setPaymentShow] = useState(false)

    const [orderID, setOrderID] = useState(false);

    async function payNow(e) {
        e.preventDefault()
        if (paymentType == "") alert("Select Payment Type")
        alert(paymentType)
        setPaymentShow(true)
    }


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
                                        <div className="col-lg-6">
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

                                        <div className="col-lg-6">
                                            <div className="card cart-detail text-white">
                                                <div className="card-body">
                                                    <div className="d-flex jc-between ai-center mb-4">
                                                        <h5 className="mb-0">User Details</h5>
                                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" className="img-fluid rounded-3" style={{ width: "45px" }} alt="Avatar" />
                                                    </div>

                                                    <p className="small mb-2">Payment Method</p>
                                                    <a href="#!" onClick={() => setPaymentType("stripe")} type="submit" className="text-white">
                                                        <i className="fab fa-cc-stripe fa-2x me-2"></i>
                                                    </a>
                                                    <a href="#!" onClick={() => setPaymentType("paypal")} type="submit" className="text-white">
                                                        <i className="fab fa-cc-paypal fa-2x me-2"></i>
                                                    </a>

                                                    <form className="mt-4" onSubmit={(e) => payNow(e)}>
                                                        <div className="form-outline form-white mb-4">
                                                            <input type="text" onClick={(e) => setName(e.target.value)} className="form-control form-control-lg" placeholder="Enter Username" required />
                                                        </div>

                                                        <div className="form-outline form-white mb-4">
                                                            <input type="email" onClick={(e) => setEmail(e.target.value)} className="form-control form-control-lg" placeholder="Enter Email" required />
                                                        </div>

                                                        <div className="form-outline form-white mb-4">
                                                            <input type="text" onClick={(e) => setPhone(e.target.value)} className="form-control form-control-lg" placeholder="Enter Contact Number" required />
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-md-6 mb-4">
                                                                <div className="form-outline form-white">
                                                                    <input type="text" onClick={(e) => setCity(e.target.value)} className="form-control form-control-lg" placeholder="Enter City" required />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 mb-4">
                                                                <div className="form-outline form-white">
                                                                    <input type="text" onClick={(e) => setAddress(e.target.value)} className="form-control form-control-lg" placeholder="Enter Address" required />
                                                                </div>
                                                            </div>
                                                        </div>

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

                                                        <button type="submit" className="btn checkout-btn btn-block btn-lg">
                                                            <div className="d-flex jc-between">
                                                                <span>$4818.00</span>
                                                                <span>Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                                                            </div>
                                                        </button>

                                                    </form>

                                                    {(paymentShow && paymentType == "paypal") && <PaypalComponent orderID={orderID} setOrderID={setOrderID} />}

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


            {/* <StripeCheckoutForm /> */}

        </>
    )
}



function PaypalComponent({ orderID, setOrderID }) {
    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");

    // creates a paypal order
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: "Sunflower",
                    amount: {
                        currency_code: "USD",
                        value: 20,
                    },
                },
            ],
        }).then((orderID) => {
            setOrderID(orderID);
            return orderID;
        });
    };

    // check Approval
    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            const { payer } = details;
            setSuccess(true);
        });
    };

    //capture likely error
    const onError = (data, actions) => {
        setErrorMessage("An Error occured with your payment ");
    };

    useEffect(() => {
        if (success) {
            alert("Payment successful!!");
            console.log('Order successful . Your order id is--', orderID);
        }
    }, [success]);



    return (
        <div className="mt-3" style={{ background: "#ffffff", padding: "20px 10px 0px 10px", borderRadius: "0.3rem" }}>
            <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>
                <PayPalButtons
                    style={{ layout: "vertical" }}
                    createOrder={createOrder}
                    onApprove={onApprove}
                />
            </PayPalScriptProvider>
        </div>
    );
}




export default Cart;