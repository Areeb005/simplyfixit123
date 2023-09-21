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



function SmartHomeSmartGarage() {

    const navigate = useNavigate();
    const { hash } = useLocation();
    const [cart, setCart] = usePersistedState('thisCart', {})
    const [quiz, setQuiz] = usePersistedState('thisQuiz', "SmartHomeSmartGarage")

    let [faltu, getHashValue] = hash.split('#')
    const url = useLocation().pathname;
    const hashValue = parseInt(getHashValue) || 1;

    // const [SmartHomeSmartGarage, setSmartHomeSmartGarage] = useState(0)
    const [SmartHomeSmartGarage, setSmartHomeSmartGarage] = usePersistedState('SmartHomeSmartGarage', 0)


    const [SmartHomeSmartGarageWifi, setSmartHomeSmartGarageWifi] = usePersistedState('SmartHomeSmartGarageWifi', '')
    const [SmartHomeSmartGarageDoorOpener, setSmartHomeSmartGarageDoorOpener] = usePersistedState('SmartHomeSmartGarageDoorOpener', '')
    const [SmartHomeSmartGarageAppReq, setSmartHomeSmartGarageAppReq] = usePersistedState('SmartHomeSmartGarageAppReq', '')
    const [SmartHomeSmartGarageLocation, setSmartHomeSmartGarageLocation] = usePersistedState('SmartHomeSmartGarageLocation', '')
    const [SmartHomeSmartGarageDeviceModel, setSmartHomeSmartGarageDeviceModel] = usePersistedState('SmartHomeSmartGarageDeviceModel', '')
    const [SmartHomeSmartGarageDesc, setSmartHomeSmartGarageDesc] = usePersistedState('SmartHomeSmartGarageDesc', '')
    const [SmartHomeSmartGaragePics, setSmartHomeSmartGaragePics] = usePersistedState('SmartHomeSmartGaragePics', '')

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
            heading: `Is there a functioning garage door opener at the installation area?`,
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
        {
            no: 4,
            heading: `Does the install location have access to a close-by outlet required to power the controller?`,
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
        {
            no: 5,
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
            no: 6,
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
        setSmartHomeSmartGaragePics(fileString)
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
                                <IncDecComponent text={'Smart garage opener'} inc={() => setSmartHomeSmartGarage(SmartHomeSmartGarage + 1)} dec={() => setSmartHomeSmartGarage(SmartHomeSmartGarage - 1)} qty={SmartHomeSmartGarage} />
                                <div className="button">
                                    <button className='continue_btn' disabled={SmartHomeSmartGarage <= 0} onClick={() => { SmartHomeSmartGarage > 0 ? navigate(`#${hashValue + 1}`) : alert('Add Items') }}>Continue</button>
                                </div>
                            </div>
                        }
                        else if (e.no == 3 && hashValue == 3) {
                            return <div key={e.no}>
                                <h2 className='e-heading'>{e.heading}</h2>
                                {e.opt.map(item => {
                                    return <TextComponent onClick={() => { setSmartHomeSmartGarageDoorOpener(item.q); navigate(`#${hashValue + 1}`) }} text={item.q} />
                                })}
                            </div>
                        }
                        else if (e.no == 4 && hashValue == 4) {
                            return <div key={e.no}>
                                <h2 className='e-heading'>{e.heading}</h2>
                                {e.opt.map(item => {
                                    return <TextComponent onClick={() => { setSmartHomeSmartGarageLocation(item.q); navigate(`#${hashValue + 1}`) }} text={item.q} />
                                })}
                            </div>
                        }
                        else if (e.no == 5 && hashValue == 5) {
                            return <div key={e.no}>
                                <h2 className='e-heading'>{e.heading}</h2>
                                {e.opt.map(item => {
                                    return <TextComponent onClick={() => { setSmartHomeSmartGarageWifi(item.q); navigate(`#${hashValue + 1}`) }} text={item.q} />
                                })}
                            </div>
                        }
                        else if (e.no == 6 && hashValue == 6) {
                            return <div key={e.no}>
                                <h2 className='e-heading'>{e.heading}</h2>
                                {e.opt.map(item => {
                                    return <TextComponent onClick={() => { setSmartHomeSmartGarageAppReq(item.q); navigate(`#${hashValue + 1}`) }} text={item.q} />
                                })}
                            </div>
                        }
                    })
                }

                {hashValue == 2 &&
                    <div>
                        <h2 className='e-heading'>Which smart garage controller device will be installed?</h2>
                        <div>
                            <form action="" onSubmit={(e) => { e.preventDefault(); navigate(`#${hashValue + 1}`) }}>
                                <TextAreaComponent value={SmartHomeSmartGarageDeviceModel} placeholder='Please provide the brand & model of the device you want installed.' required={true} onChange={(e) => setSmartHomeSmartGarageDeviceModel(e.target.value)} />
                                <div className="button">
                                    <button className='continue_btn'>Continue</button>
                                </div>
                            </form>
                        </div>
                    </div>
                }

                {hashValue == 7 &&
                    <div>
                        <h2 className='e-heading'>Anything Else ?</h2>
                        <div>
                            <form action="" onSubmit={(e) => { e.preventDefault(); navigate(`#${hashValue + 1}`) }}>
                                <TextAreaComponent value={SmartHomeSmartGarageDesc} placeholder='Any additional details will help ensure the technician will have the proper tools for your requested service' required={false} onChange={(e) => setSmartHomeSmartGarageDesc(e.target.value)} />
                                <div className="button">
                                    <button className='continue_btn'>Continue</button>
                                </div>
                            </form>
                        </div>
                    </div>
                }


                {(hashValue == 8) &&
                    <div>
                        <div className="button">
                            {/* <button className='continue_btn' disabled onClick={() => { navigate(`/services`) }}>Add Another Service</button> */}
                        </div>
                        <div className="button">
                            <button className='continue_btn' onClick={() => navigate(`#${hashValue + 1}`)}>Continue</button>
                        </div>
                    </div>
                }

                {(hashValue == 9 && !calendar) &&
                    <div>
                        <ImageUploadComponent onChange={(e) => onChange(e)} img={SmartHomeSmartGaragePics} />
                        <div className="button">
                            <button className='continue_btn' onClick={() => {
                                setcalendar(true);
                                setCart({
                                    'product': [
                                        [
                                            {
                                                'no': 1,
                                                'id': 1,
                                                'q': 'Smart Home Garage Installation',
                                                'a': SmartHomeSmartGarage,
                                                'price': 99
                                            },
                                            {
                                                'no': 2,
                                                'id': 1,
                                                'q': 'smart garage controller device will be installed?',
                                                'a': SmartHomeSmartGarageDeviceModel,
                                                'price': 0
                                            },
                                            {
                                                'no': 3,
                                                'id': 1,
                                                'q': 'functioning garage door opener at the installation area?',
                                                'a': SmartHomeSmartGarageDoorOpener,
                                                'price': 0
                                            },
                                            {
                                                'no': 4,
                                                'id': 1,
                                                'q': 'install location have access to a close-by outlet required to power the controller?',
                                                'a': SmartHomeSmartGarageLocation,
                                                'price': 0
                                            },
                                            {
                                                'no': 5,
                                                'id': 1,
                                                'q': 'Have Stable and Reliable WiFi?',
                                                'a': SmartHomeSmartGarageWifi,
                                                'price': 0
                                            },
                                            {
                                                'no': 6,
                                                'id': 1,
                                                'q': 'App already Downloaded and Setup on Phone?',
                                                'a': SmartHomeSmartGarageAppReq,
                                                'price': 0
                                            },
                                            {
                                                'no': 7,
                                                'id': 1,
                                                'q': 'Anythink Else?',
                                                'a': SmartHomeSmartGarageDesc,
                                                'price': 0
                                            },
                                            {
                                                'no': 8,
                                                'id': 1,
                                                'q': 'Images',
                                                'a': SmartHomeSmartGaragePics,
                                                'price': 0
                                            },
                                        ],
                                    ]
                                });

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

export default SmartHomeSmartGarage;