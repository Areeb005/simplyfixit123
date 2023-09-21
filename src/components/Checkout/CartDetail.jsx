import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import StripeGateway from '../payment/StripeGateway';
import PaypalGateway from '../payment/PaypalGateway';
import usePersistedState from 'use-persisted-state-hook'


// import { CLIENT_ID } from './config/config'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { editCalendar } from "../../firebase/apis";



function Cart() {

    // const [toMapCart, settoMapCart] = useState([])
    const [cart] = usePersistedState('thisCart')
    const [quiz] = usePersistedState('thisQuiz')


    const [name, setName] = useState("a")
    const [email, setEmail] = useState("a@a.com")
    const [phone, setPhone] = useState("a")
    const [city, setCity] = useState("a")
    const [address, setAddress] = useState("")
    const [paymentType, setPaymentType] = useState("")
    const [paymentShow, setPaymentShow] = useState(false)
    const [orderID, setOrderID] = useState(false);
    const [price, setprice] = useState(0)

    async function checkout(e) {
        e.preventDefault()
        if (paymentType == "" || paymentType == null) {
            setPaymentType("")
            setPaymentShow(false)
            return alert("Select Payment Type")
        }
        setPaymentShow(true)
    }

    useEffect(() => {
        let total = 0;
        cart.product.forEach(e => {
            e.forEach(item => {
                total += parseInt(item.price);
            })
            setprice(total)
            // console.log(total);
        })
    }, [])

    async function bookdate() {
        const date = cart.date;    
        const Time_Slot = cart.Time_Slot;

        const res = await editCalendar({date, Time_Slot})
    }

    return (
        <>
            <Navbar />

            <button onClick={() => bookdate()}>Add Date</button>

            <section className="cart-section">
                <div className="container">
                    <div className="row d-flex jc-center ai-center">
                        <div className="col">
                            <div className="card">
                                <div className="card-body p-4">
                                    <div className="row">
                                        <div className="col-lg-6">

                                            {/* DESKTOP CARDS */}


                                            {
                                                <div>
                                                    <p>Time: {cart?.Time_Slot}</p>
                                                    <p>Date: {cart?.date}</p>
                                                    {
                                                        (cart.product).map((item, i) => {
                                                            return <div key={i} className="card mb-3 desktop-card">
                                                                <div className="card-body">
                                                                    {item.map((product, i) => {
                                                                        if (quiz != "TvMounting") {
                                                                            if (product.no == 1) {
                                                                                return <div key={i} className="d-flex jc-between row-flex">
                                                                                    <div className="d-flex flex-row ai-center">
                                                                                        <div className="ms-3">
                                                                                            <h5>{product.q}</h5>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="d-flex flex-row ai-center text-center">
                                                                                        <div style={{ width: "80px" }}>
                                                                                            <h5 className="mb-0">${product.price}</h5>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            }
                                                                        } else {
                                                                            return <div key={i} className="d-flex jc-between row-flex">
                                                                                <div className="d-flex flex-row ai-center">
                                                                                    <div className="ms-3">
                                                                                        <h5>{product.q}</h5>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="d-flex flex-row ai-center text-center">
                                                                                    <div style={{ width: "80px" }}>
                                                                                        <h5 className="mb-0">${product.price}</h5>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        }
                                                                    })}
                                                                </div>
                                                            </div>
                                                        })
                                                    }
                                                </div>

                                            }


                                            {/* <div className="card mb-3 desktop-card">
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
                                            </div> */}

                                            {/* MOBILE CARDS */}

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
                                            <div className="card cart-detail text-white" style={{ height: "100%" }}>
                                                <div className="card-body">
                                                    <div className="d-flex jc-between ai-center mb-4">
                                                        <h5 className="mb-0">User Details</h5>
                                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" className="img-fluid rounded-3" style={{ width: "45px" }} alt="Avatar" />
                                                    </div>

                                                    <p className="small mb-2">Payment Method</p>
                                                    <a href="#!" onClick={() => setPaymentType("stripe")} type="submit" className={`${setPaymentType == "stripe" ? 'payment_method' : "me-2"} text-white`}>
                                                        <i className="fab fa-cc-stripe fa-2x"></i>
                                                    </a>
                                                    <a href="#!" onClick={() => setPaymentType("paypal")} type="submit" className={`${setPaymentType == "paypal" ? 'payment_method' : ""} text-white`}>
                                                        <i className="fab fa-cc-paypal fa-2x"></i>
                                                    </a>

                                                    {
                                                        !paymentShow || paymentType == "" ?
                                                            <form className="mt-4" onSubmit={(e) => checkout(e)}>
                                                                <div className="form-outline form-white mb-4">
                                                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control form-control-lg" placeholder="Enter Username" required />
                                                                </div>

                                                                <div className="form-outline form-white mb-4">
                                                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control form-control-lg" placeholder="Enter Email" required />
                                                                </div>

                                                                <div className="form-outline form-white mb-4">
                                                                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control form-control-lg" placeholder="Enter Contact Number" required />
                                                                </div>

                                                                <div className="row">
                                                                    <div className="col-md-6 mb-4">
                                                                        <div className="form-outline form-white">
                                                                            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className="form-control form-control-lg" placeholder="Enter City" required />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 mb-4">
                                                                        <div className="form-outline form-white">
                                                                            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control form-control-lg" placeholder="Enter Address" required />
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <hr className="my-4" />

                                                                {/* <div className="d-flex jc-between">
                                                                    <p className="mb-2">Subtotal</p>
                                                                    <p className="mb-2">${price.toFixed(2)}</p>
                                                                </div>

                                                                <div className="d-flex jc-between">
                                                                    <p className="mb-2">Shipping</p>
                                                                    <p className="mb-2">$20.00</p>
                                                                </div> */}

                                                                <div className="d-flex jc-between mb-4">
                                                                    <p className="mb-2">Total</p>
                                                                    <p className="mb-2">${(price).toFixed(2)}</p>
                                                                </div>

                                                                <button type="submit" className="btn checkout-btn btn-block btn-lg">
                                                                    <div className="d-flex jc-between">
                                                                        <span>${(price).toFixed(2)}</span>
                                                                        <span>Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                                                                    </div>
                                                                </button>
                                                            </form>
                                                            :
                                                            <>
                                                                {(paymentShow && paymentType == "paypal") && <PaypalGateway orderID={orderID} setOrderID={setOrderID} setPaymentType={setPaymentType} setPaymentShow={setPaymentShow} name={name} email={email} phone={phone} city={city} address={address} price={price} />}
                                                                {(paymentShow && paymentType == "stripe") && <StripeGateway orderID={orderID} setOrderID={setOrderID} setPaymentType={setPaymentType} setPaymentShow={setPaymentShow} name={name} email={email} phone={phone} city={city} address={address} price={price} />}
                                                            </>
                                                    }

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

        </>
    )
}

export default Cart;