import React from 'react'
import TextComponent from '../../components/services components/TextComponent'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'

function FanLight() {
    return (
        <>

            <Navbar />

            <section className='hieght my-5'>
                <div className="container">

                    <h2 className='e-heading mb-4'>Choose a service to get started</h2>

                    <Link to={`/services/fan-fixture-installation`} className='services_link'>
                        <TextComponent text="Fan fixture Installtion" />
                    </Link>

                    <Link to={`/services/light-fixture-installtion`} className='services_link'>
                        <TextComponent text="Light fixture Installtion" />
                    </Link>
                </div>
            </section>


        </>
    )
}

export default FanLight
