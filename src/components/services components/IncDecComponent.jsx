import React from 'react'
import {FaMinus, FaPlus} from "react-icons/fa"

function IncDecComponent({inc, dec, text, desc, qty}) {
    return (
        <>

            <section className='inc_dec'>
                <div className='d-flex jc-center my-4'>
                    <button className='btn select_btn'>
                        <div className='d-flex ai-center jc-between my-2'>
                            <div className='d-flex'>
                                <h6 className='mb-0'>{text}</h6>
                            </div>
                            <div className='d-flex ai-center'>
                                <button className='btn dec_btn' onClick={dec}><FaMinus className='dec_icon' /></button>
                                <p className='qty mb-0'>{qty}</p>
                                <button className='btn inc_btn' onClick={inc} ><FaPlus className='inc_icon' /></button>
                            </div>
                        </div>
                        <div className={`description ${!desc && 'd-none'}`}>
                            <p>{desc}</p>
                        </div>
                    </button>
                </div>
            </section>
        </>
    )
}

export default IncDecComponent
