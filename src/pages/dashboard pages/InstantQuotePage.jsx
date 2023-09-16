import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { getInstantQuoteData } from '../../firebase/apis'
import { Link } from 'react-router-dom'


const InstantQuotePage = () => {

    const [data, setdata] = useState([])

    async function getMyReviews() {
        const data1 = await getInstantQuoteData();
        setdata(data1);
    }

    useEffect(() => {
        getMyReviews()
    }, [])

    return <>


        <Navbar />


        <div className="container">
            <h1>Instant Quote Data</h1>

            <div className="row mx-0">
                <div className="col-9"></div>
                <div className="col-3">
                    <button class="btn btn-primary my-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Menu</button>

                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasTopLabel">Menu Links</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul>
                                <li><Link to={'/admin/dashboard/instant-quotes-data'}> Instant Quote Data </Link></li>
                                <li><Link to={'/admin/dashboard/contact-data'}> Contact Data </Link></li>
                                <li><Link to={'/admin/dashboard/rate-us-data'}> Rate Us Data </Link></li>
                                <li><Link to={'/admin/dashboard/Orders'}> Orders </Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mx-0">

                <div className="col-12">
                    <table class="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
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

export default InstantQuotePage