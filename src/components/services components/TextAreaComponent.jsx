import React from 'react'

function TextAreaComponent({ value, placeholder, onChange, required, min}) {
    return (
        <>
            <section className='textAraeComponent my-5'>
                <div className="container">
                    <div className="textArea">
                        <textarea className="form-control p-4" value={value} placeholder={placeholder} onChange={onChange} required={required} minLength={min} rows="4"></textarea>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TextAreaComponent
