import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { useSearchParams } from "react-router-dom";

export function Fail() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [id, setID] = useState("");

    useEffect(() => {
        setID(searchParams.get("error"))
        window.localStorage.clear();

    }, [])

    return <>
        <section className="payment_msg_sec hieght">
            <Navbar />
            <div className="container">
                <div className="message">
                    <h1>Payment Fail</h1>
                    {
                        (id != null && id != "" && typeof id != "undefined") &&
                        <h3>{id}</h3>
                    }
                </div>
            </div>
        </section>
    </>
}