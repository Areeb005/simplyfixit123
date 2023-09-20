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



function SmartHomeThermostat() {

    const navigate = useNavigate();
    const { hash } = useLocation();
    const [cart, setCart] = usePersistedState('thisCart', {})
    const [quiz, setQuiz] = usePersistedState('thisQuiz', "SmartHomeThermostat")

    let [faltu, getHashValue] = hash.split('#')
    const url = useLocation().pathname;
    const hashValue = parseInt(getHashValue) || 1;

    // const [SmartHomeThermostat, setSmartHomeThermostat] = useState(0)
    const [SmartHomeThermostat, setSmartHomeThermostat] = usePersistedState('SmartHomeThermostat', 0)


    const [SmartHomeThermostatCWire, setSmartHomeThermostatCWire] = usePersistedState('SmartHomeThermostatCWire', '')
    const [SmartHomeThermostatBattery, setSmartHomeThermostatBattery] = usePersistedState('SmartHomeThermostatBattery', '')
    const [SmartHomeThermostatWifi, setSmartHomeThermostatWifi] = usePersistedState('SmartHomeThermostatWifi', '')
    const [SmartHomeThermostatAppReq, setSmartHomeThermostatAppReq] = usePersistedState('SmartHomeThermostatAppReq', '')
    const [SmartHomeThermostatDeviceModel, setSmartHomeThermostatDeviceModel] = usePersistedState('SmartHomeThermostatDeviceModel', '')
    const [SmartHomeThermostatDesc, setSmartHomeThermostatDesc] = usePersistedState('SmartHomeThermostatDesc', '')
    const [SmartHomeThermostatPics, setSmartHomeThermostatPics] = usePersistedState('SmartHomeThermostatPics', '')

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
            heading: `Do you need a C-wire installed to complete your thermostat installation?`,
            opt: [
                {
                    id: 1,
                    q: `Yes`,
                    price: 119
                },
                {
                    id: 2,
                    q: `No`,
                    price: ``
                },
                {
                    id: 2,
                    q: `Not Sure`,
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
        setSmartHomeThermostatPics(fileString)
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
                                <IncDecComponent text={'Smart Thermostat'} inc={() => setSmartHomeThermostat(SmartHomeThermostat + 1)} dec={() => setSmartHomeThermostat(SmartHomeThermostat - 1)} qty={SmartHomeThermostat} />
                                <div className="button">
                                    <button className='continue_btn' disabled={SmartHomeThermostat <= 0} onClick={() => { SmartHomeThermostat > 0 ? navigate(`#${hashValue + 1}`) : alert('Add Items') }}>Continue</button>
                                </div>
                            </div>
                        }
                        else if (e.no == 3 && hashValue == 3) {
                            return <div key={e.no}>
                                <h2 className='e-heading'>{e.heading}</h2>
                                {e.opt.map(item => {
                                    return <TextComponent onClick={() => { setSmartHomeThermostatCWire(item.q); navigate(`#${hashValue + 1}`) }} text={item.q} price={item.price} />
                                })}
                            </div>
                        }
                        else if (e.no == 4 && hashValue == 4) {
                            return <div key={e.no}>
                                <h2 className='e-heading'>{e.heading}</h2>
                                {e.opt.map(item => {
                                    return <TextComponent onClick={() => { setSmartHomeThermostatWifi(item.q); navigate(`#${hashValue + 1}`) }} text={item.q} />
                                })}
                            </div>
                        }
                        else if (e.no == 5 && hashValue == 5) {
                            return <div key={e.no}>
                                <h2 className='e-heading'>{e.heading}</h2>
                                {e.opt.map(item => {
                                    return <TextComponent onClick={() => { setSmartHomeThermostatAppReq(item.q); navigate(`#${hashValue + 1}`) }} text={item.q} />
                                })}
                            </div>
                        }
                    })
                }

                {hashValue == 2 &&
                    <div>
                        <h2 className='e-heading'>What is the brand/model of your smart thermostat?</h2>
                        <div>
                            <form action="" onSubmit={(e) => { e.preventDefault(); navigate(`#${hashValue + 1}`) }}>
                                <TextAreaComponent value={SmartHomeThermostatDeviceModel} placeholder='Please provice the brand & model of the device you want installed. e.g. Ring doorbell 2, Nest hello etc' required={true} onChange={(e) => setSmartHomeThermostatDeviceModel(e.target.value)} />
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
                                <TextAreaComponent value={SmartHomeThermostatDesc} placeholder='Any additional details will help ensure the technician will have the proper tools for your requested service' required={false} onChange={(e) => setSmartHomeThermostatDesc(e.target.value)} />
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
                            <button className='continue_btn' disabled onClick={() => { navigate(`/services`) }}>Add Another Service</button>
                        </div>
                        <div className="button">
                            <button className='continue_btn' onClick={() => navigate(`#${hashValue + 1}`)}>Continue</button>
                        </div>
                    </div>
                }

                {(hashValue == 8 && !calendar) &&
                    <div>
                        <ImageUploadComponent onChange={(e) => onChange(e)} img={SmartHomeThermostatPics} />
                        <div className="button">
                            <button className='continue_btn' onClick={() => {
                                setcalendar(true);
                                setCart({
                                    'product': [
                                        [
                                            {
                                                'no': 1,
                                                'id': 1,
                                                'q': 'Smart Home Thermostat Installation',
                                                'a': SmartHomeThermostat,
                                                'price': 213
                                            },
                                            {
                                                'no': 2,
                                                'id': 1,
                                                'q': 'Brand/Model of Smart Lock?',
                                                'a': SmartHomeThermostatDeviceModel,
                                            },
                                            {
                                                'no': 3,
                                                'id': 1,
                                                'q': 'Do you need a C-wire installed to complete your thermostat installation?',
                                                'a': SmartHomeThermostatCWire,
                                            },
                                            {
                                                'no': 4,
                                                'id': 1,
                                                'q': 'Have Stable and Reliable WiFi?',
                                                'a': SmartHomeThermostatWifi,
                                            },
                                            {
                                                'no': 5,
                                                'id': 1,
                                                'q': 'App already Downloaded and Setup on Phone?',
                                                'a': SmartHomeThermostatAppReq,
                                            },
                                            {
                                                'no': 6,
                                                'id': 1,
                                                'q': 'Anythink Else?',
                                                'a': SmartHomeThermostatDesc,
                                            },
                                            {
                                                'no': 7,
                                                'id': 1,
                                                'q': 'Images',
                                                'a': SmartHomeThermostatPics,
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

export default SmartHomeThermostat;