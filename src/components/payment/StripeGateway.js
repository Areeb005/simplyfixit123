import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { addCalendar, addOrders } from "../../firebase/apis";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import usePersistedState from "use-persisted-state-hook";



const stripePromise = loadStripe(process.env.REACT_APP_Stripe_PUBLISHABLE_KEY);
const apiKey = process.env.REACT_APP_Stripe_SECRET_KEY;
const url = process.env.REACT_APP_Stripe_PAYMENT_INTENTS_URL;

const appearance = {
  theme: 'stripe',
  variables: {
    // colorPrimary: '#0570de',
    colorBackground: '#ffffff',
    // colorText: '#ffffff',
    colorDanger: '#ff5e7d',
    fontFamily: 'Ideal Sans, system-ui, sans-serif',
    spacingUnit: '2px',
    borderRadius: '4px',
    fontSizeBase: "14px",
    marginBottom: "30px",
    // See all possible variables below
  },
  rules: {
    " select": {
      color: "red"
    },
    ".Label": {
      color: "#fff"
    }
  }
};



function StripePayment({ setPaymentType, setPaymentShow, orderID, setOrderID, name, email, phone, city, address, price }) {
  const [secret, setSecret] = useState(null);
  const [cart] = usePersistedState('thisCart')
  const [quiz] = usePersistedState('thisQuiz')

  const payload = {
    paymentMethod: "stripe",
    quiz,
    date: cart.date,
    time: cart.Time_Slot,
    product: JSON.stringify(cart.product),
    name,
    email,
    phone,
    city,
    address,
    orderID: "",
    price,
    paymentType: "fixed"
  }
  console.log(payload);

  const data = {
    amount: parseFloat(price) * 100,
    currency: "USD",
    "automatic_payment_methods[enabled]": true
  };

  useEffect(() => {
    fetch(url, {
      method: "POST",
      body: new URLSearchParams(data),
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    })
      .then((response) => response.json())
      .then((data) => {
        // alert('Payment intent created successfully!');
        console.log(data);
        setSecret(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  }, []);

  if (secret != null) {
    return (
      <Elements
        stripe={stripePromise}
        options={{ clientSecret: secret.client_secret, appearance }}
      >
        {/* <StripeCheckoutForm setPaymentType={setPaymentType} setPaymentShow={setPaymentShow} orderID={orderID} setOrderID={setOrderID} name={name} email={email} phone={phone} city={city} address={address} price={price} /> */}
        <StripeCheckoutForm payload={payload} setPaymentType={setPaymentType} setPaymentShow={setPaymentShow} />
      </Elements>
    );
  }
  return <h2 className="mt-3">Loading...</h2>
}

// const StripeCheckoutForm = ({ setPaymentType, setPaymentShow, orderID, setOrderID, name, email, phone, city, address, price }) => {
const StripeCheckoutForm = ({ payload, setPaymentType, setPaymentShow }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [cart] = usePersistedState('thisCart')
  const [quiz] = usePersistedState('thisQuiz')


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        a: await addOrders(payload),
        b: await addCalendar({
          date: cart.date,
          Time_Slot: cart.Time_Slot
        }),
        return_url: window.location.origin + "/success"
      }
    });

    if (result.error) {
      toast(result.error.message);
      window.location.href = window.location.origin + "/fail?error=" + result.error.message
    }
    else {
      console.log(result);
    }
  };

  return (
    <>
      <ToastContainer />

      <form onSubmit={handleSubmit} style={{ margin: "20px 0px" }}>
        <PaymentElement />
        <button disabled={!stripe} className="btn" style={{ color: "var(--theme-blue-color)", background: "white", margin: "10px 0px", fontSize: "14px", fontWeight: "600" }}>Pay Now</button>
        <button disabled={!stripe} className="btn" onClick={(e) => { e.preventDefault(); setPaymentType(null); setPaymentShow(false) }} style={{ color: "var(--theme-blue-color)", background: "white", margin: "10px 5px", fontSize: "14px", fontWeight: "600" }}>
          <i className="fa fa-arrow-left me-1"></i> Go Back
        </button>
      </form>
    </>
  );
};



export default StripePayment;