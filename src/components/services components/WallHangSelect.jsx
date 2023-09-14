import React from 'react'
import Navbar from '../Navbar'

function WallHangSelect({ text, checkvalue, checked, id, onchange }) {
    return (
        <>
            <div>
                <div className="container">
                    <section className='wall_hang_select'>
                        <div className='d-flex jc-center my-3'>
                            <button htmlFor={checkvalue} className='btn select_btn'>
                                <label htmlFor={checkvalue} className='select-indicator mb-0'>
                                    <div className='d-flex ai-center'>
                                        <div className="select-indicator">
                                            <button className='btn p-0'>
                                                <input type="checkbox" className='selected' name="" checked={checked} id={id} value={text} onChange={onchange} />
                                            </button>
                                        </div>
                                        <div className='d-flex'>
                                            <h6 className='mb-0'>{text}</h6>
                                        </div>
                                    </div>
                                </label>
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default WallHangSelect
