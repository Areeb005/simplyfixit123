import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../../components/Navbar'
import TextComponent from '../../../../components/services components/TextComponent'

function SmartHomeHomeTheater() {
    useEffect(() => {
        localStorage.clear()
    }, [])


    return (
        <>
            <Navbar />

            <section className='hieght my-5'>
                <div className="container">

                    <h2 className='e-heading mb-4'>Choose a service to get started</h2>

                    <Link to="/services/smart-home-installation-home-theater-soundbar" className='services_link'>
                        <TextComponent text="Soundbar" />
                    </Link>
                    <Link to="/services/smart-home-installation-home-theater-speaker-subwoofer" className='services_link'>
                        <TextComponent text="Speaker & Subwoofer" />
                    </Link>
                    <Link to="/services/smart-home-installation-home-theater-video-streaming-device" className='services_link'>
                        <TextComponent text="Video Streaming Device" />
                    </Link>
                    <Link to="/services/smart-home-installation-home-theater-bluray-dvd-player" className='services_link'>
                        <TextComponent text="Blu-ray/DVD Player" />
                    </Link>
                    <Link to="/services/smart-home-installation-home-theater-gaming-system" className='services_link'>
                        <TextComponent text="Gaming System" />
                    </Link>
                    <Link to="/services/smart-home-installation-home-theater-universal-remote" className='services_link'>
                        <TextComponent text="Universal Remote" />
                    </Link>
                    <Link to="/services/smart-home-installation-home-theater-other-smart-devices" className='services_link'>
                        <TextComponent text="Other Smart Home Devices" />
                    </Link>

                </div>
            </section>
        </>
    )
}

export default SmartHomeHomeTheater
