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



function SmartHomeSmartDoorLock() {

    const navigate = useNavigate();
    const { hash } = useLocation();
    const [cart, setCart] = usePersistedState('thisCart', {})
    const [quiz, setQuiz] = usePersistedState('thisQuiz', "SmartHomeSmartDoorLock")

    let [faltu, getHashValue] = hash.split('#')
    const url = useLocation().pathname;
    const hashValue = parseInt(getHashValue) || 1;

    // const [SmartHomeSmartDoorLock, setSmartHomeSmartDoorLock] = useState(0)
    const [SmartHomeSmartDoorLock, setSmartHomeSmartDoorLock] = usePersistedState('SmartHomeSmartDoorLock', 0)


    const [SmartHomeSmartDoorLockWifi, setSmartHomeSmartDoorLockWifi] = usePersistedState('SmartHomeSmartDoorLockWifi', '')
    const [SmartHomeSmartDoorLockAppReq, setSmartHomeSmartDoorLockAppReq] = usePersistedState('SmartHomeSmartDoorLockAppReq', '')
    const [SmartHomeSmartDoorLockDeviceModel, setSmartHomeSmartDoorLockDeviceModel] = usePersistedState('SmartHomeSmartDoorLockDeviceModel', '')
    const [SmartHomeSmartDoorLockDesc, setSmartHomeSmartDoorLockDesc] = usePersistedState('SmartHomeSmartDoorLockDesc', '')
    const [SmartHomeSmartDoorLockPics, setSmartHomeSmartDoorLockPics] = usePersistedState('SmartHomeSmartDoorLockPics', '')

    const [price, setprice] = useState(0)
    const [selected, setselected] = useState([])

    const [calendar, setcalendar] = useState(false)


    const Items = [
        {
            no: 1,
            heading: `How many devices do you need installed?`,
        },
        {
            no: 3,
            heading: `Do you have a stable and reliable WiFi connection that will reach to where the device will be installed?`,
            opt: [
                {
                    id: 1,
                    q: `Yes`,
                },
                {
                    id: 2,
                    q: `No`,
                },
                {
                    id: 3,
                    q: `Not Sure`,
                },
            ]
        },
        {
            no: 4,
            heading: `If your device requires an app, do you have it downloaded and set up on your phone?`,
            opt: [
                {
                    id: 1,
                    q: `Yes`,
                },
                {
                    id: 2,
                    q: `No`,
                },
            ]
        },
    ]

    const onChange = (e) => {
        const files = e.target.files;
        const file = files[0];
        getBase64(file);
    };

    const onLoad = (fileString) => {
        setSmartHomeSmartDoorLockPics(fileString)
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
                                <IncDecComponent text={'Smart door lock'} inc={() => setSmartHomeSmartDoorLock(SmartHomeSmartDoorLock + 1)} dec={() => setSmartHomeSmartDoorLock(SmartHomeSmartDoorLock - 1)} qty={SmartHomeSmartDoorLock} />
                                <div className="button">
                                    <button className='continue_btn' disabled={SmartHomeSmartDoorLock <= 0} onClick={() => { SmartHomeSmartDoorLock > 0 ? navigate(`#${hashValue + 1}`) : alert('Add Items') }}>Continue</button>
                                </div>
                            </div>
                        }
                        else if (e.no == 3 && hashValue == 3) {
                            return <div key={e.no}>
                                <h2 className='e-heading'>{e.heading}</h2>
                                {e.opt.map(item => {
                                    return <TextComponent onClick={() => { setSmartHomeSmartDoorLockWifi(item.q); navigate(`#${hashValue + 1}`) }} text={item.q} />
                                })}
                            </div>
                        }
                        else if (e.no == 4 && hashValue == 4) {
                            return <div key={e.no}>
                                <h2 className='e-heading'>{e.heading}</h2>
                                {e.opt.map(item => {
                                    return <TextComponent onClick={() => { setSmartHomeSmartDoorLockAppReq(item.q); navigate(`#${hashValue + 1}`) }} text={item.q} />
                                })}
                            </div>
                        }
                    })
                }

                {hashValue == 2 &&
                    <div>
                        <h2 className='e-heading'>What is the brand/model of your smart lock?</h2>
                        <div>
                            <form action="" onSubmit={(e) => { e.preventDefault(); navigate(`#${hashValue + 1}`) }}>
                                <TextAreaComponent value={SmartHomeSmartDoorLockDeviceModel} placeholder='Please provide the brand & model of the device you want installed. e.g. Google Home, Amazon Alexa etc' required={true} onChange={(e) => setSmartHomeSmartDoorLockDeviceModel(e.target.value)} />
                                <div className="button">
                                    <button className='continue_btn'>Continue</button>
                                </div>
                            </form>
                        </div>
                    </div>
                }

                {hashValue == 5 &&
                    <div>
                        <h2 className='e-heading'>Anything Else ?</h2>
                        <div>
                            <form action="" onSubmit={(e) => { e.preventDefault(); navigate(`#${hashValue + 1}`) }}>
                                <TextAreaComponent value={SmartHomeSmartDoorLockDesc} placeholder='Any additional details will help ensure the technician will have the proper tools for your requested service' required={false} onChange={(e) => setSmartHomeSmartDoorLockDesc(e.target.value)} />
                                <div className="button">
                                    <button className='continue_btn'>Continue</button>
                                </div>
                            </form>
                        </div>
                    </div>
                }


                {(hashValue == 6) &&
                    <div>
                        <div className="button">
                            <button className='continue_btn' disabled onClick={() => { navigate(`/services`) }}>Add Another Service</button>
                        </div>
                        <div className="button">
                            <button className='continue_btn' onClick={() => navigate(`#${hashValue + 1}`)}>Continue</button>
                        </div>
                    </div>
                }

                {(hashValue == 7 && !calendar) &&
                    <div>
                        <ImageUploadComponent onChange={(e) => onChange(e)} img={SmartHomeSmartDoorLockPics} />
                        <div className="button">
                            <button className='continue_btn' onClick={() => {
                                setcalendar(true);
                                setCart({
                                    SmartHomeSmartDoorLock,
                                    SmartHomeSmartDoorLockWifi,
                                    SmartHomeSmartDoorLockAppReq,
                                    SmartHomeSmartDoorLockDeviceModel,
                                    SmartHomeSmartDoorLockDesc,
                                    SmartHomeSmartDoorLockPics,
                                })
                            }}>
                                Schedule Your Service
                            </button>
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

export default SmartHomeSmartDoorLock;