import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const stripePromise = loadStripe("pk_test_51NoyKlAursW1G9pEJluCqSVwhowVRuKfab5ZBOQKwYBgmLO634GwNeES5AoPhjYXpgTwvMOWb3XWOKtWUHMNjgA3002j7Z0B5V");
const apiKey = "sk_test_51NoyKlAursW1G9pEU7e8oGoTXgvzmPc9VzhL4HJP8b9ZFXFBSZgzf6kjcUz7vSUFSj8oWoYwg2GoyFfWIPBfqy4H00hT5ti1Hy";
const url = "https://api.stripe.com/v1/payment_intents";
const data = {
  amount: 1099,
  currency: "aud",
  "automatic_payment_methods[enabled]": true
};
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



function StripePayment({ setPaymentType, setPaymentShow }) {
  const [secret, setSecret] = useState(null);

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
        <StripeCheckoutForm setPaymentType={setPaymentType} setPaymentShow={setPaymentShow} />
      </Elements>
    );
  }
  return <h2 className="mt-3">Loading...</h2>
}

const StripeCheckoutForm = ({ setPaymentType, setPaymentShow }) => {
  const stripe = useStripe();
  const elements = useElements();


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.origin + "/success"
      }
    });

    if (result.error)toast(result.error.message);

    else {
    }
  };

  return (
    <>
            <ToastContainer />

      <form onSubmit={handleSubmit} style={{ margin: "20px 0px" }}>
        <PaymentElement />
        <button disabled={!stripe} className="btn" style={{ color: "var(--theme-blue-color)", background: "white", margin: "10px 0px", fontSize: "14px", fontWeight: "600" }}>Pay Now</button>
        <button disabled={!stripe} className="btn" onClick={() => { setPaymentType(null); setPaymentShow(false) }} style={{ color: "var(--theme-blue-color)", background: "white", margin: "10px 5px", fontSize: "14px", fontWeight: "600" }}>
          <i className="fa fa-arrow-left me-1"></i> Go Back
        </button>
      </form>
    </>
  );
};



export default StripePayment;