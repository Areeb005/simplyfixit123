import React from 'react'

// import power from "../../assets/Services/in_wall_with_power.svg"

function MultipleSelectComponet({ text, checked, id, onClick, price }) {
    return (
        <>
            <div className="col-md-3">
                <div className="multi-select">
                    <label htmlFor={id}>
                        <div className="select-indicator">
                            <div className='btn p-0'>
                                <input type="checkbox" name="" checked={checked} id={id} value={text} onClick={onClick} />
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
