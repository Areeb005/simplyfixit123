import { useLocation, useNavigate } from 'react-router-dom';
import { React, useEffect, useState } from 'react'
import usePersistedState from 'use-persisted-state-hook'
import IncDecComponent from '../../../components/services components/IncDecComponent';
import TextComponent from '../../../components/services components/TextComponent';
import TextAreaComponent from '../../../components/services components/TextAreaComponent';
import ImageUploadComponent from '../../../components/services components/ImageUploadComponent';
import Navbar from '../../../components/Navbar';
import Calendar from '../../../components/services components/calendar';
import WallHangSelect from '../../../components/services components/WallHangSelect';



function SmartHomeSingleExtensionSetup() {

    const navigate = useNavigate();
    const { hash } = useLocation();

    let [faltu, getHashValue] = hash.split('#')
    const url = useLocation().pathname;
    const hashValue = parseInt(getHashValue) || 1;

    // const [SmartHomeSingleExtensionSetup, setSmartHomeSingleExtensionSetup] = useState(0)
    const [SmartHomeSingleExtensionSetup, setSmartHomeSingleExtensionSetup] = usePersistedState('SmartHomeSingleExtensionSetup', 0)
    const [SmartHomeSingleExtensionSetupDeviceModel, setSmartHomeSingleExtensionSetupDeviceModel] = usePersistedState('SmartHomeSingleExtensionSetupDeviceModel', '')
    const [SmartHomeSingleExtensionSetupDesc, setSmartHomeSingleExtensionSetupDesc] = usePersistedState('SmartHomeSingleExtensionSetupDesc', '')
    const [SmartHomeSingleExtensionSetupPics, setSmartHomeSingleExtensionSetupPics] = usePersistedState('SmartHomeSingleExtensionSetupPics', '')

    const [price, setprice] = useState(0)
    const [selected, setselected] = useState([])

    const [calendar, setcalendar] = useState(false)


    const Items = [
        {
            no: 1,
            heading: `How many devices do you need installed?`,
        },

    ]

    const onChange = (e) => {
        const files = e.target.files;
        const file = files[0];
        getBase64(file);
    };

    const onLoad = (fileString) => {
        setSmartHomeSingleExtensionSetupPics(fileString)
    };

    const getBase64 = (file) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            onLoad(reader.result);
        };
    };

    useEffect(() => {
        setcalendar(false)
    }, [hashValue])



    return <>

        <Navbar />

        <section className='hieght my-5'>
            <div className='container'>
                {
                    Items.map((e, i) => {
                        if (e.no == hashValue && hashValue == 1) {
                            return <div key={e.no}>
                                <h2 className='e-heading'>{e.heading}</h2>
                                <IncDecComponent text={'Signal extension setup'} inc={() => setSmartHomeSingleExtensionSetup(SmartHomeSingleExtensionSetup + 1)} dec={() => setSmartHomeSingleExtensionSetup(SmartHomeSingleExtensionSetup - 1)} qty={SmartHomeSingleExtensionSetup} />
                                <div className="button">
                                    <button className='continue_btn' disabled={SmartHomeSingleExtensionSetup <= 0} onClick={() => { SmartHomeSingleExtensionSetup > 0 ? navigate(`#${hashValue + 1}`) : alert('Add Items') }}>Continue</button>
                                </div>
                            </div>
                        }
                    })
                }

                {hashValue == 2 &&
                    <div>
                        <h2 className='e-heading'>What is the brand/model of your router?</h2>
                        <div>
                            <form action="" onSubmit={(e) => { e.preventDefault(); navigate(`#${hashValue + 1}`) }}>
                                <TextAreaComponent value={SmartHomeSingleExtensionSetupDeviceModel} placeholder='Please provide the brand & model of the device you want installed.' required={false} onChange={(e) => setSmartHomeSingleExtensionSetupDeviceModel(e.target.value)} />
                                <div className="button">
                                    <button className='continue_btn'>Continue</button>
                                </div>
                            </form>
                        </div>
                    </div>
                }

                {hashValue == 3 &&
                    <div>
                        <h2 className='e-heading'>Anything Else ?</h2>
                        <div>
                            <form action="" onSubmit={(e) => { e.preventDefault(); navigate(`#${hashValue + 1}`) }}>
                                <TextAreaComponent value={SmartHomeSingleExtensionSetupDesc} placeholder='Any additional details will help ensure the technician will have the proper tools for your requested service' required={false} onChange={(e) => setSmartHomeSingleExtensionSetupDesc(e.target.value)} />
                                <div className="button">
                                    <button className='continue_btn'>Continue</button>
                                </div>
                            </form>
                        </div>
                    </div>
                }


                {(hashValue == 4) &&
                    <div>
                        <div className="button">
                            <button className='continue_btn' onClick={() => { navigate(`/services`) }}>Add Another Service</button>
                        </div>
                        <div className="button">
                            <button className='continue_btn' onClick={() => navigate(`#${hashValue + 1}`)}>Continue</button>
                        </div>
                    </div>
                }

                {(hashValue == 5 && !calendar) &&
                    <div>
                        <ImageUploadComponent onChange={(e) => onChange(e)} img={SmartHomeSingleExtensionSetupPics} />
                        <div className="button">
                            <button className='continue_btn' onClick={() => setcalendar(true)}>Schedule Your Service</button>
                        </div>
                    </div>
                }

                {
                    calendar &&
                    <Calendar />
                }

            </div>
        </section >

    </>
}

export default SmartHomeSingleExtensionSetup;