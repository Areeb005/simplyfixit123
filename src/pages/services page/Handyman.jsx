import React from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom'
import TextComponent from '../../components/services components/TextComponent'

function Handyman() {
    return (
        <>

            <Navbar />

            <section className='hieght my-5'>
                <div className="container">

                    <h2 className='e-heading mb-4'>Choose a service to get started</h2>

                    <Link to="/services/handyman/furniture" className='services_link'>
                        <TextComponent text="Furniture assembly" />
                    </Link>

                    <Link to="/services/handyman/wallhanging" className='services_link'>
                        <TextComponent text="Wall hanging" />
                    </Link>

                    <Link to="/services/handyman/appliance-installation" className='services_link'>
                        <TextComponent text="Appliance Installation" />
                    </Link>

                    <Link to="/services/handyman/washer-dryer-installation" className='services_link'>
                        <TextComponent text="Washer and dryer installation/ replacement" />
                    </Link>

                    <Link to="/services/handyman/stove-installation" className='services_link'>
                        <TextComponent text="Stove Installation" />
                    </Link>

                    <Link to="/services/handyman/oven-installation" className='services_link'>
                        <TextComponent text="Microwave oven Installation" />
                    </Link>

                    <Link to="/services/handyman/refrigirator-installation" className='services_link'>
                        <TextComponent text="Refrigerator Installation" />
                    </Link>

                </div>
            </section>
        </>
    )
}

export default Handyman
