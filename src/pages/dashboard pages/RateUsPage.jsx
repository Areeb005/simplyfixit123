import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { getRateUsData } from '../../firebase/apis'
import { Link } from 'react-router-dom'


const RateUsPage = () => {

    const [data, setdata] = useState([])

    async function getMyRateUsData() {
        const data1 = await getRateUsData();
        setdata(data1);
    }

    useEffect(() => {
        getMyRateUsData()
    }, [])

    return <>


        <Navbar />


        <div className="container" style={{ minHeight: "90vh" }}>


            <div className="row mx-0 mt-5">
                <div className="col-9 d-flex align-items-center">
                    <h1 className='text-center'>Rate Us Data</h1>
                </div>
                <div className="col-3 d-flex justify-content-end">
                    <button className="btn btn-primary my-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Menu</button>

                    <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasTopLabel">Pages</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul style={{ listStyle: "none" }}>
                                <li><a style={{ textDecoration: "none", color: "#2c3f6a", marginBottom: "15px", fontSize: "20px" }} href={'/admin/dashboard/instant-quotes-data'}> Instant Quote Data </a></li>
                                <li><a style={{ textDecoration: "none", color: "#2c3f6a", marginBottom: "15px", fontSize: "20px" }} href={'/admin/dashboard/contact-data'}> Contact Data </a></li>
                                <li><a style={{ textDecoration: "none", color: "#2c3f6a", marginBottom: "15px", fontSize: "20px" }} href={'/admin/dashboard/rate-us-data'}> Rate Us Data </a></li>
                                <li><a style={{ textDecoration: "none", color: "#2c3f6a", marginBottom: "15px", fontSize: "20px" }} href={'/admin/dashboard/Orders'}> Orders </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row mx-0">

                <div className="col-12">
                    <table className="table table-light table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Review</th>
                                <th scope="col">Recommended</th>
                                <th scope="col">Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(e => {
                                    return <tr>
                                        <th scope="row">{e.your_name} {e.your_lastname}</th>
                                        <td>{e.your_email}</td>
                                        <td>{e.your_phone}</td>
                                        <td>{e.your_review}</td>
                                        <td>{e.your_recommendation}</td>
                                        <td>{e.your_message}</td>
                                    </tr>
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    </>
}

export default RateUsPage