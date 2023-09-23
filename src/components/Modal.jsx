import React, { useEffect } from 'react'

const Modal = (props) => {

    function abc(product) {
        let products = JSON.parse(product)
        console.log(products);
        return products
    }

    return <>

        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#exampleModal${props.data.timestamp}`}>
            Details
        </button>

        <div class="modal fade" id={`exampleModal${props.data.timestamp}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Details</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p><span className='font-weight-bold'>Name:</span> {props.data.name}</p>
                        <p><span className='font-weight-bold'>Email:</span> {props.data.email}</p>
                        <p><span className='font-weight-bold'>Phone:</span> {props.data.phone}</p>
                        <p><span className='font-weight-bold'>Address:</span> {props.data.address}</p>
                        <p><span className='font-weight-bold'>City:</span> {props.data.city}</p>
                        <p><span className='font-weight-bold'>Service:</span> {props.data.quiz}</p>
                        <p><span className='font-weight-bold'>Date:</span> {props.data.date}</p>
                        <p><span className='font-weight-bold'>Time:</span> {props.data.time}</p>
                        <p><span className='font-weight-bold'>Price:</span> {props.data.price}</p>
                        <p><span className='font-weight-bold'>OrderI</span>D: {props.data.orderID}</p>
                        <p><span className='font-weight-bold'>Id:</span> {props.data.id}</p>
                        <p><span className='font-weight-bold'>Payment Method:</span> {props.data.paymentMethod}</p>
                        <p><span className='font-weight-bold'>Included:</span> {abc(props.data.product).map(item => {
                            return item.map(details => {
                                return <div className='mb-2'>
                                    <ul>
                                        <li> {details.ques} : {details.q} </li>
                                    </ul>
                                </div>
                            })
                        })}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Modal