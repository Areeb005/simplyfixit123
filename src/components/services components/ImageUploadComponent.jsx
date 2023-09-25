import React, { useEffect, useState } from 'react'
import usePersistedState from 'use-persisted-state-hook'


function ImageUploadComponent({ onChange, img }) {
    // const [FanInstallationPics, setFanInstallationPics] = usePersistedState('FanInstallationPics', '')
    const [abc, setabc] = useState(null)

    // useEffect(() => {
    // setabc('image Uploaded')
    // }, [FanInstallationPics])

    return (
        <>
            <section className='imgUploadComp my-5'>
                <div className="container">
                    <label className="image_upload mb-0 d-flex jc-center ai-center text-center">
                        <div className="d-flex jc-center ai-center text-center">
                            <div className="image_box">
                                <span className="text-center">
                                    <div className="camera-image"></div>
                                    <input type="file" accept='image/*' onChange={onChange} style={{ display: "none" }} />
                                    <p>Browse for photos</p>
                                    {img && < img src={img} alt="image" height={'200px'} width={'200px'} />}
                                </span>

                            </div>
                            {/* <input type='file' className="form-control p-4"></input> */}
                        </div>
                    </label>
                </div>
            </section >
        </>
    )
}

export default ImageUploadComponent
