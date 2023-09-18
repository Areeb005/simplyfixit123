import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";



export function Success() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [id, setID] = useState("");

    useEffect(() => {
        setID(searchParams.get("order"))

    }, [])


    return <>
        <h1>Payment Successful</h1>
        {
            (id != null && id != "" && typeof id != "undefined") &&
            <h3>Order ID: {id}</h3>
        }
    </>
}