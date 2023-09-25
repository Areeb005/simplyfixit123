import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../Navbar";
import { addCalendar, addOrders } from "../../firebase/apis";
import usePersistedState from "use-persisted-state-hook";



export function Success() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [cart] = usePersistedState('thisCart')
    const [quiz] = usePersistedState('thisQuiz')
    const [__orderData] = usePersistedState('orderData')
    const [id, setID] = useState("");

    async function Save() {
        try {
            const payload = {
                paymentMethod: __orderData.paymentMethod,
                quiz,
                date: cart.date,
                time: cart.Time_Slot,
                product: JSON.stringify(cart.product),
                name: __orderData.name,
                email: __orderData.email,
                phone: __orderData.phone,
                city: __orderData.city,
                address: __orderData.address,
                price: __orderData.price,
                orderID: __orderData.orderID,
                paymentType: "fixed"
            }
            console.log(payload);

            await addOrders(payload)
            await addCalendar({
                date: cart.date,
                Time_Slot: cart.Time_Slot
            })
                .then(data => {
                    console.log(data);
                    window.localStorage.clear();

                })
            setID(searchParams.get("order"))



        } catch (error) {
            console.log(error);
        }
    }



    useEffect(() => {
        return () => {
            Save()
        }

    }, [])



    return <>

        <section className="payment_msg_sec hieght">
            <Navbar />
            <div className="container">
                <div className="message">
                    <h1>Payment Successful</h1>
                    {
                        (id != null && id != "" && typeof id != "undefined") &&
                        <h3>Order ID: {id}</h3>
                    }
                </div>
            </div>
        </section>
    </>
}