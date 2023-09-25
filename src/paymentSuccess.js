import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../Navbar";



export function Success() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [id, setID] = useState("");

    useEffect(() => {
        setID(searchParams.get("order"))

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