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



function SmartHomeHubOrSpeaker() {

    const navigate = useNavigate();
    const { hash } = useLocation();
    const [cart, setCart] = usePersistedState('thisCart', {})
    const [quiz, setQuiz] = usePersistedState('thisQuiz', "SmartHomeHubOrSpeaker")

    let [faltu, getHashValue] = hash.split('#')
    const url = useLocation().pathname;
    const hashValue = parseInt(getHashValue) || 1;

    // const [SmartHomeHubOrSpeaker, setSmartHomeHubOrSpeaker] = useState(0)
    const [SmartHomeHubOrSpeaker, setSmartHomeHubOrSpeaker] = usePersistedState('SmartHomeHubOrSpeaker', 0)


    const [SmartHomeHubOrSpeakerCWire, setSmartHomeHubOrSpeakerCWire] = usePersistedState('SmartHomeHubOrSpeakerCWire', '')
    const [SmartHomeHubOrSpeakerWifi, setSmartHomeHubOrSpeakerWifi] = usePersistedState('SmartHomeHubOrSpeakerWifi', '')
    const [SmartHomeHubOrSpeakerAppReq, setSmartHomeHubOrSpeakerAppReq] = usePersistedState('SmartHomeHubOrSpeakerAppReq', '')
    const [SmartHomeHubOrSpeakerDeviceModel, setSmartHomeHubOrSpeakerDeviceModel] = usePersistedState('SmartHomeHubOrSpeakerDeviceModel', '')
    const [SmartHomeHubOrSpeakerDesc, setSmartHomeHubOrSpeakerDesc] = usePersistedState('SmartHomeHubOrSpeakerDesc', '')
    const [SmartHomeHubOrSpeakerPics, setSmartHomeHubOrSpeakerPics] = usePersistedState('SmartHomeHubOrSpeakerPics', '')

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
            heading: `Do you need to connect this device to other devices in your home?`,
            opt: [
                {
                    id: 1,
                    q: `Yes, between 1-4 devices`,
                    price: 49
                },
                {
                    id: 2,
                    q: `Yes, between 5-10 devices`,
                    price: 79
                },
                {
                    id: 2,
                    q: `No, I don't need to connect any devices`,
                    price: ``
                },
            ]
        },
        {
            no: 4,
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
            no: 5,
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
        setSmartHomeHubOrSpeakerPics(fileString)
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
                                <IncDecComponent text={'Smart hub or speaker'} inc={() => setSmartHomeHubOrSpeaker(SmartHomeHubOrSpeaker + 1)} dec={() => setSmartHomeHubOrSpeaker(SmartHomeHubOrSpeaker - 1)} qty={SmartHomeHubOrSpeaker} />
                                <div className="button">
                                    <button className='continue_btn' disabled={SmartHomeHubOrSpeaker <= 0} onClick={() => { SmartHomeHubOrSpeaker > 0 ? navigate(`#${hashValue + 1}`) : alert('Add Items') }}>Continue</button>
                                </div>
                            </div>
                        }
                        else if (e.no == 3 && hashValue == 3) {
                            return <div key={e.no}>
                                <h2 className='e-heading'>{e.heading}</h2>
                                {e.opt.map(item => {
                                    return <TextComponent onClick={() => { setSmartHomeHubOrSpeakerCWire(item.q); navigate(`#${hashValue + 1}`) }} text={item.q} price={item.price} />
                                })}
                            </div>
                        }
                        else if (e.no == 4 && hashValue == 4) {
                            return <div key={e.no}>
                                <h2 className='e-heading'>{e.heading}</h2>
                                {e.opt.map(item => {
                                    return <TextComponent onClick={() => { setSmartHomeHubOrSpeakerWifi(item.q); navigate(`#${hashValue + 1}`) }} text={item.q} />
                                })}
                            </div>
                        }
                        else if (e.no == 5 && hashValue == 5) {
                            return <div key={e.no}>
                                <h2 className='e-heading'>{e.heading}</h2>
                                {e.opt.map(item => {
                                    return <TextComponent onClick={() => { setSmartHomeHubOrSpeakerAppReq(item.q); navigate(`#${hashValue + 1}`) }} text={item.q} />
                                })}
                            </div>
                        }
                    })
                }

                {hashValue == 2 &&
                    <div>
                        <h2 className='e-heading'>What is the brand/model of smart speaker?</h2>
                        <div>
                            <form action="" onSubmit={(e) => { e.preventDefault(); navigate(`#${hashValue + 1}`) }}>
                                <TextAreaComponent value={SmartHomeHubOrSpeakerDeviceModel} placeholder='Please provide the brand & model of the device you want installed. e.g. Google Home, Amazon Alexa etc' required={true} onChange={(e) => setSmartHomeHubOrSpeakerDeviceModel(e.target.value)} />
                                <div className="button">
                                    <button className='continue_btn'>Continue</button>
                                </div>
                            </form>
                        </div>
                    </div>
                }

                {hashValue == 6 &&
                    <div>
                        <h2 className='e-heading'>Anything Else ?</h2>
                        <div>
                            <form action="" onSubmit={(e) => { e.preventDefault(); navigate(`#${hashValue + 1}`) }}>
                                <TextAreaComponent value={SmartHomeHubOrSpeakerDesc} placeholder='Any additional details will help ensure the technician will have the proper tools for your requested service' required={false} onChange={(e) => setSmartHomeHubOrSpeakerDesc(e.target.value)} />
                                <div className="button">
                                    <button className='continue_btn'>Continue</button>
                                </div>
                            </form>
                        </div>
                    </div>
                }


                {(hashValue == 7) &&
                    <div>
                        <div className="button">
                            {/* <button className='continue_btn' disabled onClick={() => { navigate(`/services`) }}>Add Another Service</button> */}
                        </div>
                        <div className="button">
                            <button className='continue_btn' onClick={() => navigate(`#${hashValue + 1}`)}>Continue</button>
                        </div>
                    </div>
                }

                {(hashValue == 8 && !calendar) &&
                    <div>
                        <ImageUploadComponent onChange={(e) => onChange(e)} img={SmartHomeHubOrSpeakerPics} />
                        <div className="button">
                            <button className='continue_btn' onClick={() => {
                                setcalendar(true);
                                setCart({
                                    'product': [
                                        [
                                            {
                                                'no': 1,
                                                'id': 1,
                                                'q': 'Smart Hub or Speaker Installation',
                                                'a': SmartHomeHubOrSpeaker,
                                                'price': 99
                                            },
                                            {
                                                'no': 2,
                                                'id': 1,
                                                'q': 'Brand/Model of Smart Speaker?',
                                                'a': SmartHomeHubOrSpeakerDeviceModel,
                                                'price': 0
                                            },
                                            {
                                                'no': 3,
                                                'id': 1,
                                                'q': 'This Device to Other Devices?',
                                                'a': SmartHomeHubOrSpeakerCWire,
                                                'price': `${(SmartHomeHubOrSpeakerCWire == 'Yes, between 1-4 devices' && 49) || (SmartHomeHubOrSpeakerCWire == 'Yes, between 5-10 devices' && 79)}`
                                            },
                                            {
                                                'no': 4,
                                                'id': 1,
                                                'q': 'Have Stable and Reliable WiFi?',
                                                'a': SmartHomeHubOrSpeakerWifi,
                                                'price': 0
                                            },
                                            {
                                                'no': 5,
                                                'id': 1,
                                                'q': 'App already Downloaded and Setup on Phone?',
                                                'a': SmartHomeHubOrSpeakerAppReq,
                                                'price': 0
                                            },
                                            {
                                                'no': 6,
                                                'id': 1,
                                                'q': 'Anythink Else?',
                                                'a': SmartHomeHubOrSpeakerDesc,
                                                'price': 0
                                            },
                                            {
                                                'no': 7,
                                                'id': 1,
                                                'q': 'Images',
                                                'a': SmartHomeHubOrSpeakerPics,
                                                'price': 0
                                            },
                                        ],
                                    ]
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

export default SmartHomeHubOrSpeaker;