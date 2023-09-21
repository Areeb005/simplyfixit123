import React, { useEffect, useState } from 'react'
// import treeImg from '../assets/images/tree.webp'
import { LiaUserCircleSolid } from 'react-icons/lia'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import { getSingleUser } from '../../firebase/apis';
import asd from "../../assets/Services/Services main.webp"


const DashboardLogin = () => {

    const navigate = useNavigate();

    const notify = () => toast("Wrong Credentials", {
        draggable: true,
        theme: "light",
        className: "react-toast-deleted"
    });

    const success = () => toast("Login Successfull", {
        draggable: true,
        theme: "light",
        className: "react-toast-added"
    });

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    async function getMyUser(e) {
        e.preventDefault();

        const data1 = await getSingleUser(email);

        if (data1.length == 0) {
            notify();
        } else if (email == data1[0].email && password == data1[0].password) {
            console.log('email and password matched');
            sessionStorage.setItem('id', JSON.stringify(data1[0]._id));
            success();
            setTimeout(() => {
                window.location.href = '/admin/dashboard/Orders';
            }, 1000);
        } else {
            notify();
        }
    }

    useEffect(() => {
        const isAuth = sessionStorage.getItem("id") ? true : false;
        isAuth && (window.location.href = '/admin/dashboard/Orders')
    }, [])


    return <>

        <div className="container" style={{minHeight:'80vh', paddingTop: "100px"}}>
            <div className='row'>
                <div className='col-md-6'>
                    <img src={asd} className='img-fluid' alt="" />
                </div>
                <div className='col-md-6'>
                    <LiaUserCircleSolid className='w-24 h-24 text-white mb-4' />
                    <div>
                        <h2 className='mb-12 text-4xl text-start text-color3 max-md:text-center'>Sign Into Yout Account</h2>
                        <form action="" onSubmit={(e) => getMyUser(e)}>
                            <div className="mb-3">
                                <label className='form-label'>Email</label>
                                <input className='form-control' type="email" id="email" onChange={(e) => setemail(e.target.value)} value={email} placeholder='example@gmail.com' required />
                            </div>

                            <div className="mb-3">
                                <label className='form-label'>Password</label>
                                <input className='form-control' type="password" id="password" onChange={(e) => setpassword(e.target.value)} value={password} placeholder='••••••' required />
                            </div>

                            <button className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer />
    </>
}

export default DashboardLogin