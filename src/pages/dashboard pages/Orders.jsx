import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { getOrders } from '../../firebase/apis'
import { Link } from 'react-router-dom'
import Modal from '../../components/Modal'




const Orders = () => {

    const [data, setdata] = useState([])

    async function getMyOrders() {
        const data1 = await getOrders();

        data1.sort((a, b) => {
            // let dateA = convertToDate(a.id);
            // let dateB = convertToDate(b.id);
            return b.id - a.id;
        })

        setdata(data1);

    }

    const obj = {
        TvMounting: 'Tv Mounting'
    }

    // const convertToDate = (dateStr) => {
    //     let parts = dateStr.split('/');
    //     return new Date(parts[2], parts[1], parts[0]);
    // }

    function abc(product) {
        let products = JSON.parse(product)
        console.log(products);
        return products
    }


    useEffect(() => {
        getMyOrders()
    }, [])

    return <>

        <Navbar />

        <div className="container" style={{ minHeight: "90vh" }}>


            <div className="row mx-0 mt-5">
                <div className="col-9 d-flex align-items-center">
                    <h1 className='text-left'>Orders</h1>
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
                    <div className="table-responsive">
                        <table className="table table-light table-striped">
                            <thead>
                                <tr className='for-td'>
                                    <th scope="col">Details</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">City</th>
                                    <th scope="col">Service</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Time</th>
                                    <th scope="col">Price</th>
                                    {/* <th scope="col">Included</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(e => {
                                        if (e.paymentType == "hourly") {
                                            return <tr className='for-td'>
                                                <td><Modal data={e} /></td>
                                                <th scope="row">{e.name}</th>
                                                <td>{e.email}</td>
                                                <td className='for-td'>{e.address}</td>
                                                <td>{e.city}</td>
                                                <td>{e.quiz}</td>
                                                <td>{e.date}</td>
                                                <td>{e.time}</td>
                                                <td>${e.price}</td>
                                                {/* <td>{abc(e.product).map(item => {
                                                    return item.map(details => {
                                                        return <div className='mb-2'>
                                                            <li> {details.ques} : {details.q} </li>
                                                        </div>
                                                    })
                                                })}</td> */}
                                            </tr>
                                        }
                                        else if (e.paymentType == 'fixed') {
                                            return <tr className='for-td'>
                                                <td><Modal data={e} /></td>
                                                <th scope="row">{e.name}</th>
                                                <td>{e.email}</td>
                                                <td >{e.address}</td>
                                                <td>{e.city}</td>
                                                <td>{e.quiz}</td>
                                                <td>{e.date}</td>
                                                <td>{e.time}</td>
                                                <td>${e.price}</td>
                                                {/* <td>{abc(e.product).map(item => {
                                                    return item.map(details => {
                                                        return <div className='mb-2'>
                                                            <li> {details.q} </li>
                                                        </div>
                                                    })
                                                })}</td> */}
                                            </tr>
                                        }

                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div >
    </>
}

export default Orders