import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { getContactUsData } from '../../firebase/apis'
import { Link } from 'react-router-dom'


const ContactUsPage = () => {

    const [data, setdata] = useState([])

    async function getMyContactUsData() {
        const data1 = await getContactUsData();
        setdata(data1);
    }

    useEffect(() => {
        getMyContactUsData()
    }, [])

    return <>


        <Navbar />


        <div className="container" style={{ minHeight: "90vh"}}>

            <h1>Contact Us Data</h1>

            <div className="row mx-0">
                <div className="col-9"></div>
                <div className="col-3">
                    <button className="btn btn-primary my-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Menu</button>

                    <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasTopLabel">Pages</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul style={{ listStyle: "none"}}>
                                <li><a style={{ textDecoration: "none", color: "#2c3f6a", marginBottom: "15px", fontSize: "20px"}} href={'/admin/dashboard/instant-quotes-data'}> Instant Quote Data </a></li>
                                <li><a style={{ textDecoration: "none", color: "#2c3f6a", marginBottom: "15px", fontSize: "20px"}} href={'/admin/dashboard/contact-data'}> Contact Data </a></li>
                                <li><a style={{ textDecoration: "none", color: "#2c3f6a", marginBottom: "15px", fontSize: "20px"}} href={'/admin/dashboard/rate-us-data'}> Rate Us Data </a></li>
                                <li><a style={{ textDecoration: "none", color: "#2c3f6a", marginBottom: "15px", fontSize: "20px"}} href={'/admin/dashboard/Orders'}> Orders </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row mx-0">

                <div className="col-12">
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Address</th>
                                <th scope="col">Subject</th>
                                <th scope="col">Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(e => {
                                    return <tr>
                                        <th scope="row">{e.your_name}</th>
                                        <td>{e.your_email}</td>
                                        <td>{e.your_phone}</td>
                                        <td>{e.your_address}</td>
                                        <td>{e.your_subject}</td>
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

export default ContactUsPage