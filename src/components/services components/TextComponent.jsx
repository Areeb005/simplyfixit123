import React from 'react'
// import Navbar from '../Navbar'

// import tv_size from "../../assets/Services/bracket_fixed.svg"

function TextComponent({onClick, text, size, image, desc, price}) {
    return (
        <>
            {/* <Navbar /> */}

            <div className='d-flex jc-center my-4'>
                <button className='btn select_btn' onClick={onClick}>
                    <div className='d-flex ai-center jc-between my-2'>
                        <div className='d-flex'>
                            <h6 className='mb-0'>{text}</h6>
                            <small>{size}</small>
                            {
                                <p className={`mb-0 ${!price && 'd-none'}`}>+(${price})</p>

                            }
                        </div>
                        <div>{
                                image && alert('abc')
                            // <img src={''} alt="image" className='img-fluid' style={{ height: "40px" }} />
                            }
                        </div>
                    </div>
                    <div className={`description ${!desc && 'd-none'}`}>
                        {/* <p>e.g. Hanging small pieces of art, replacing ceiling fans or light fixtures or fixing closet doors</p> */}
                    </div>
                </button>
            </div>
        </>
    )
}

export default TextComponent
