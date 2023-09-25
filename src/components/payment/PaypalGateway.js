import { useState, useEffect } from "react";
import { CLIENT_ID } from '../../config/config';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { addCalendar, addOrders } from "../../firebase/apis";
import usePersistedState from "use-persisted-state-hook";



function PaypalComponent({ orderID, setOrderID, setPaymentType, setPaymentShow, name, email, phone, city, address, price }) {
    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");

    const [cart] = usePersistedState('thisCart')
    const [quiz] = usePersistedState('thisQuiz')
    const [__orderData, set__OrderData] = usePersistedState('orderData', null)

    // creates a paypal order
    const createOrder = (data, actions) => {
        let __value = 0;

        if ((cart.product).length > 0) {
            if ((cart.product)[0].length > 0) {
                const d = cart.product[0]
                d.forEach((item) => {
                    __value += parseFloat(item.price)
                });
            }
        }

        return actions.order.create({
            purchase_units: [
                {
                    description: quiz,
                    amount: {
                        currency_code: "USD",
                        value: __value,
                    },
                },
            ],
        }).then((orderID) => {
            setOrderID(orderID);
            set__OrderData({ name, email, phone, city, address, price, orderID, paymentMethod: "PAYPAL" })
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
            // alert("Payment successful!!");
            // console.log('Order successful . Your order id is--', orderID);
            const payload = {
                quiz,
                date: cart.date,
                time: cart.Time_Slot,
                product: JSON.stringify(cart.product),
                name,
                email,
                phone,
                city,
                address,
                orderID,
                price,
                paymentType: "fixed"
            }
            console.log(payload);
            console.log(orderID);


            // addOrders(payload)
            //     .then(async data => {
            //         console.log(data);
            //         await addCalendar({
            //             date: cart.date,
            //             Time_Slot: cart.Time_Slot
            //         })
            //     })
            window.location.href = window.location.origin + "/success"
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