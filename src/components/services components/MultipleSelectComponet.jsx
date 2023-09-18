import React from 'react'

// import power from "../../assets/Services/in_wall_with_power.svg"

function MultipleSelectComponet({ text, checked, id, onClick, price }) {
    return (
        <>
            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                <div className="multi-select mb-3 text-center">
                    <label htmlFor={id}>
                        <div className="select-indicator">
                            <div className='btn p-0'>
                                <input type="checkbox" className='form-check-input' checked={checked} id={id} value={text} onClick={onClick} />
                            </div>
                        </div>
                        <div className="desc">
                            <div className='btn'>
                                {/* <img src={power} alt="image" className='img-fluid' /> */}
                                <p className='text'>{text}</p>
                                <small className='price'>+(${price})</small>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </>
    )
}

export default MultipleSelectComponet
