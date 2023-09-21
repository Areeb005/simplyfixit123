import { useLocation, useNavigate } from 'react-router-dom';
import { React, useEffect, useState } from 'react'
import usePersistedState from 'use-persisted-state-hook'
import IncDecComponent from '../../../../components/services components/IncDecComponent';
import TextComponent from '../../../../components/services components/TextComponent';
import TextAreaComponent from '../../../../components/services components/TextAreaComponent';
import ImageUploadComponent from '../../../../components/services components/ImageUploadComponent';
import Navbar from '../../../../components/Navbar';
import Calendar from '../../../../components/services components/calendar';
import WallHangSelect from '../../../../components/services components/WallHangSelect';



function SmartHomeTheaterOtherDevices() {

    const navigate = useNavigate();
    const { hash } = useLocation();

    const [cart, setCart] = usePersistedState('thisCart', {})
    const [quiz, setQuiz] = usePersistedState('thisQuiz', "SmartHomeTheaterOtherDevices")

    let [faltu, getHashValue] = hash.split('#')
    const url = useLocation().pathname;
    const hashValue = parseInt(getHashValue) || 1;

    // const [SmartHomeTheaterOtherDevices, setSmartHomeTheaterOtherDevices] = useState(0)
    const [SmartHomeTheaterOtherDevices, setSmartHomeTheaterOtherDevices] = usePersistedState('SmartHomeTheaterOtherDevices', 0)


    // const [SmartHomeTheaterOtherDevicesWifi, setSmartHomeTheaterOtherDevicesWifi] = usePersistedState('SmartHomeTheaterOtherDevicesWifi', '')
    const [SmartHomeTheaterOtherDevicesDeviceModel, setSmartHomeTheaterOtherDevicesDeviceModel] = usePersistedState('SmartHomeTheaterOtherDevicesDeviceModel', '')
    const [SmartHomeTheaterOtherDevicesInstallation, setSmartHomeTheaterOtherDevicesInstallation] = usePersistedState('SmartHomeTheaterOtherDevicesInstallation', '')
    const [SmartHomeTheaterOtherDevicesDesc, setSmartHomeTheaterOtherDevicesDesc] = usePersistedState('SmartHomeTheaterOtherDevicesDesc', '')
    const [SmartHomeTheaterOtherDevicesPics, setSmartHomeTheaterOtherDevicesPics] = usePersistedState('SmartHomeTheaterOtherDevicesPics', '')

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
            heading: `Will this be a new installation or replacing an existing system?`,
            opt: [
                {
                    id: 1,
                    q: `Installation`,
                },
                {
                    id: 2,
                    q: `Replacement`,
                },
            ]
        },
        {
            no: 2,
            heading: `Which devices need to be setup?`,
            opt: [
                {
                    id: 1,
                    q: `Modem`,
                },
                {
                    id: 2,
                    q: `Router`,
                },
                {
                    id: 3,
                    q: `Extender(s)`,
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
        setSmartHomeTheaterOtherDevicesPics(fileString)
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
                                <IncDecComponent text={'Other smart home device'} inc={() => setSmartHomeTheaterOtherDevices(SmartHomeTheaterOtherDevices + 1)} dec={() => setSmartHomeTheaterOtherDevices(SmartHomeTheaterOtherDevices - 1)} qty={SmartHomeTheaterOtherDevices} />
                                <div className="button">
                                    <button className='continue_btn' disabled={SmartHomeTheaterOtherDevices <= 0} onClick={() => { SmartHomeTheaterOtherDevices > 0 ? navigate(`#${hashValue + 1}`) : alert('Add Items') }}>Continue</button>
                                </div>
                            </div>
                        }
                        else if (e.no == 3 && hashValue == 3) {
                            return <div key={e.no}>
                                <h2 className='e-heading'>{e.heading}</h2>
                                {e.opt.map(item => {
                                    return <TextComponent onClick={() => { setSmartHomeTheaterOtherDevicesInstallation(item.q); navigate(`#${hashValue + 1}`) }} text={item.q} price={item.price} />
                                })}
                            </div>
                        }
                    })
                }

                {hashValue == 2 &&
                    <div>
                        <h2 className='e-heading'>Which brand/model of devices will be setup and connected to your TV?</h2>
                        <div>
                            <form action="" onSubmit={(e) => { e.preventDefault(); navigate(`#${hashValue + 1}`) }}>
                                <TextAreaComponent value={SmartHomeTheaterOtherDevicesDeviceModel} placeholder='please provide the brand & model of the device you want installed. e.g. Sony speakers, XBox gaming system' required={true} onChange={(e) => setSmartHomeTheaterOtherDevicesDeviceModel(e.target.value)} />
                                <div className="button">
                                    <button className='continue_btn'>Continue</button>
                                </div>
                            </form>
                        </div>
                    </div>
                }

                {hashValue == 4 &&
                    <div>
                        <h2 className='e-heading'>Anything Else ?</h2>
                        <div>
                            <form action="" onSubmit={(e) => { e.preventDefault(); navigate(`#${hashValue + 1}`) }}>
                                <TextAreaComponent value={SmartHomeTheaterOtherDevicesDesc} placeholder='Any additional details will help ensure the technician will have the proper tools for your requested service' required={false} onChange={(e) => setSmartHomeTheaterOtherDevicesDesc(e.target.value)} />
                                <div className="button">
                                    <button className='continue_btn'>Continue</button>
                                </div>
                            </form>
                        </div>
                    </div>
                }


                {(hashValue == 5) &&
                    <div>
                        <div className="button">
                            {/* <button className='continue_btn' onClick={() => { navigate(`/services`) }}>Add Another Service</button> */}
                        </div>
                        <div className="button">
                            <button className='continue_btn' onClick={() => navigate(`#${hashValue + 1}`)}>Continue</button>
                        </div>
                    </div>
                }

                {(hashValue == 6 && !calendar) &&
                    <div>
                        <ImageUploadComponent onChange={(e) => onChange(e)} img={SmartHomeTheaterOtherDevicesPics} />
                        <div className="button">
                            <button className='continue_btn' onClick={() => {
                                setcalendar(true);
                                setCart({
                                    'product': [
                                        [
                                            {
                                                'no': 1,
                                                'id': 1,
                                                'q': 'Smart Home Other Devices Installation',
                                                'a': SmartHomeTheaterOtherDevices,
                                                'price': 99
                                            },
                                            {
                                                'no': 2,
                                                'id': 1,
                                                'q': 'Which brand/model of devices will be setup and connected to your TV?',
                                                'a': SmartHomeTheaterOtherDevicesDeviceModel,
                                                'price': 0
                                            },
                                            {
                                                'no': 3,
                                                'id': 1,
                                                'q': 'Installation Or Replacement?',
                                                'a': SmartHomeTheaterOtherDevicesInstallation,
                                                'price': 0
                                            },
                                            {
                                                'no': 4,
                                                'id': 1,
                                                'q': 'Anythink Else?',
                                                'a': SmartHomeTheaterOtherDevicesDesc,
                                                'price': 0
                                            },
                                            {
                                                'no': 5,
                                                'id': 1,
                                                'q': 'Images',
                                                'a': SmartHomeTheaterOtherDevicesPics,
                                                'price': 0
                                            },
                                        ],
                                    ]
                                });
                            }}>Schedule Your Service</button>
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

export default SmartHomeTheaterOtherDevices;