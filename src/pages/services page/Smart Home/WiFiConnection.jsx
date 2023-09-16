import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../components/Navbar'
import TextComponent from '../../../components/services components/TextComponent'

function WiFiConnection() {
    return (
        <>
            <Navbar />

            <section className='hieght my-5'>
                <div className="container">

                    <h2 className='e-heading mb-4'>Choose a service to get started</h2>

                    <Link to="/services/smart-home-installation-wifi-connection-setup" className='services_link'>
                        <TextComponent text="WiFi Connection Setup" />
                    </Link>
                    <Link to="/services/smart-home-installation-single-extension-setup" className='services_link'>
                        <TextComponent text="Single Extension Setup" />
                    </Link>

                </div>
            </section>
        </>
    )
}

export default WiFiConnection
