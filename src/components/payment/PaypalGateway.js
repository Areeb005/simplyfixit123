import { useState, useEffect } from "react";
import { CLIENT_ID } from '../../config/config';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";



function PaypalComponent({ orderID, setOrderID, setPaymentType, setPaymentShow }) {
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
                <button className="btn" onClick={() => { setPaymentType(null); setPaymentShow(false) }} style={{ color: "white", background: "var(--theme-blue-color)", margin: "10px 5px", fontSize: "14px", fontWeight: "600" }}>
                    <i className="fa fa-arrow-left me-1"></i> Go Back
                </button>

            </PayPalScriptProvider>
        </div>
    );
}


export default PaypalComponent;