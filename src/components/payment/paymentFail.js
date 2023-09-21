import { useEffect } from "react";
import Navbar from "../Navbar";

export function Fail() {
    useEffect(() => {
        window.localStorage.clear();
    }, [])

    return <>
        <section className="payment_msg_sec hieght">
            <Navbar/>
            <div className="container">
                <div className="message">
                    <h1>Payment Fail</h1>
                </div>
            </div>
        </section>
    </>
}