import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../components/Navbar'
import TextComponent from '../../../components/services components/TextComponent'


function SmartHome() {
    return (
        <>

            <Navbar />

            <section className='hieght my-5'>
                <div className="container">

                    <h2 className='e-heading mb-4'>Choose a service to get started</h2>

                    <Link to="/services/smart-home-installation-security-camera" className='services_link'>
                        <TextComponent text="Smart Security Camera" />
                    </Link>
                    <Link to="/services/smart-home-installation-video-doorbell" className='services_link'>
                        <TextComponent text="Video doorbell" />
                    </Link>
                    <Link to="/services/smart-home-installation-thermostat" className='services_link'>
                        <TextComponent text="Thermostat" />
                    </Link>
                    <Link to="/services/smart-home-installation-smart-hub-or-speaker" className='services_link'>
                        <TextComponent text="Smart hub or speaker" />
                    </Link>
                    <Link to="/services/smart-home-installation-smart-door-lock" className='services_link'>
                        <TextComponent text="Smart Door Lock" />
                    </Link>
                    <Link to="/services/smart-home-installation-smart-garage" className='services_link'>
                        <TextComponent text="Smart Garage" />
                    </Link>
                    <Link to="/services/smart-home-installation-home-theater" className='services_link'>
                        <TextComponent text="Home Theater" />
                    </Link>
                    <Link to="/services/smart-home-installation/wifi-connection" className='services_link'>
                        <TextComponent text="WiFi connection" />
                    </Link>

                </div>
            </section>

        </>
    )
}

export default SmartHome
