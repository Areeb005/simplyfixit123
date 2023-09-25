import React from 'react'

function Footer() {
    return (
        <>
            <footer className="footer ">
                <div className="container">
                    <div className="as00 py-5">
                        <p className='mb-0'>
                            <span style={{ color: "white" }}>⛏ </span>
                            Build By
                            <a href="https://dtecherz.com"
                            target='_blank'
                                style={{
                                    textDecoration: "none",
                                    color: "var(--theme-yellow-color)",
                                    fontWeight: 600
                                }}>
                                &nbsp;dTecherz
                            </a>
                        </p>
                        <p className='mb-0'>© 2023 Company, Inc. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
