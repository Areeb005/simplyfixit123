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



function SmartHomeWifiConnectionSetup() {

    const navigate = useNavigate();
    const { hash } = useLocation();

    let [faltu, getHashValue] = hash.split('#')
    const url = useLocation().pathname;
    const hashValue = parseInt(getHashValue) || 1;

    // const [SmartHomeWifiConnectionSetup, setSmartHomeWifiConnectionSetup] = useState(0)
    const [SmartHomeWifiConnectionSetup, setSmartHomeWifiConnectionSetup] = usePersistedState('SmartHomeWifiConnectionSetup', 0)


    const [SmartHomeWifiConnectionSetupWifi, setSmartHomeWifiConnectionSetupWifi] = usePersistedState('SmartHomeWifiConnectionSetupWifi', '')
    const [SmartHomeWifiConnectionSetupDeviceModel, setSmartHomeWifiConnectionSetupDeviceModel] = usePersistedState('SmartHomeWifiConnectionSetupDeviceModel', '')
    const [SmartHomeWifiConnectionSetupInternetProvider, setSmartHomeWifiConnectionSetupInternetProvider] = usePersistedState('SmartHomeWifiConnectionSetupInternetProvider', '')
    const [SmartHomeWifiConnectionSetupDesc, setSmartHomeWifiConnectionSetupDesc] = usePersistedState('SmartHomeWifiConnectionSetupDesc', '')
    const [SmartHomeWifiConnectionSetupPics, setSmartHomeWifiConnectionSetupPics] = usePersistedState('SmartHomeWifiConnectionSetupPics', '')

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

    const checkboxData = (item, id, no) => {
        item.no = no
        let SmartHomeWifiConnectionSetupData = JSON.parse(window.sessionStorage.getItem('SmartHomeWifiConnectionSetupData'))
        if (SmartHomeWifiConnectionSetupData == null) SmartHomeWifiConnectionSetupData = [[]];

        let checkbox = window.document.getElementById(`checkValue${id}`)

        if (checkbox.checked) {
            SmartHomeWifiConnectionSetupData[SmartHomeWifiConnectionSetupData.length - 1].push(item)
            window.sessionStorage.setItem('SmartHomeWifiConnectionSetupData', JSON.stringify(SmartHomeWifiConnectionSetupData))
            setselected(SmartHomeWifiConnectionSetupData)
        } else if (!checkbox.checked) {
            const t = SmartHomeWifiConnectionSetupData[SmartHomeWifiConnectionSetupData.length - 1]
            let found = [];
            for (let i = 0; i < t.length; i++) {
                const e = t[i];
                if (e.id == id && e.no == no) {
                    found = i
                    SmartHomeWifiConnectionSetupData[SmartHomeWifiConnectionSetupData.length - 1].splice(i, 1)
                    window.sessionStorage.setItem('SmartHomeWifiConnectionSetupData', JSON.stringify(SmartHomeWifiConnectionSetupData))
                    setselected(SmartHomeWifiConnectionSetupData)
                    return e
                }
            }
        }

    }

    const findCheckValue = (id, no) => {
        let SmartHomeWifiConnectionSetupData = JSON.parse(window.sessionStorage.getItem('SmartHomeWifiConnectionSetupData'))
        if (SmartHomeWifiConnectionSetupData == null) SmartHomeWifiConnectionSetupData = [[]];

        if (SmartHomeWifiConnectionSetupData.length > 0) {
            const found = SmartHomeWifiConnectionSetupData[SmartHomeWifiConnectionSetupData.length - 1].find((e) => (e.id == id && e.no == no))
            if (found) return true
            else return false
        }
    }

    const onChange = (e) => {
        const files = e.target.files;
        const file = files[0];
        getBase64(file);
    };

    const onLoad = (fileString) => {
        setSmartHomeWifiConnectionSetupPics(fileString)
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
                                <IncDecComponent text={'Wifi connection setup'} inc={() => setSmartHomeWifiConnectionSetup(SmartHomeWifiConnectionSetup + 1)} dec={() => setSmartHomeWifiConnectionSetup(SmartHomeWifiConnectionSetup - 1)} qty={SmartHomeWifiConnectionSetup} />
                                <div className="button">
                                    <button className='continue_btn' disabled={SmartHomeWifiConnectionSetup <= 0} onClick={() => { SmartHomeWifiConnectionSetup > 0 ? navigate(`#${hashValue + 1}`) : alert('Add Items') }}>Continue</button>
                                </div>
                            </div>
                        }
                        else if (e.no == 2 && hashValue == 2) {
                            return <div key={e.no}>
                                <h2 className='e-heading'>{e.heading}</h2>
                                {e.opt.map(item => {
                                    return <div key={item.id}>
                                        <WallHangSelect text={item.q} checkvalue={`checkValue${item.id}`} checked={findCheckValue(item.id, e.no)} id={`checkValue${item.id}`} onchange={() => checkboxData(item, item.id, e.no)} />
                                    </div>
                                })}
                                <div className="button">
                                    <button className='continue_btn' disabled={selected.length == 0 || selected[selected.length - 1].length == 0} onClick={() => { navigate(`#${hashValue + 1}`) }}>Continue</button>
                                </div>
                            </div>
                        }
                    })
                }

                {hashValue == 3 &&
                    <div>
                        <h2 className='e-heading'>What is the brand/model of your router?</h2>
                        <div>
                            <form action="" onSubmit={(e) => { e.preventDefault(); navigate(`#${hashValue + 1}`) }}>
                                <TextAreaComponent value={SmartHomeWifiConnectionSetupDeviceModel} placeholder='Please provide the brand & model of the device you want installed.' required={true} onChange={(e) => setSmartHomeWifiConnectionSetupDeviceModel(e.target.value)} />
                                <div className="button">
                                    <button className='continue_btn'>Continue</button>
                                </div>
                            </form>
                        </div>
                    </div>
                }
                {hashValue == 4 &&
                    <div>
                        <h2 className='e-heading'>Please indicate your internet provider here</h2>
                        <div>
                            <form action="" onSubmit={(e) => { e.preventDefault(); navigate(`#${hashValue + 1}`) }}>
                                <TextAreaComponent value={SmartHomeWifiConnectionSetupInternetProvider} placeholder='e.g. AT&T internet, CenturyLink, Comcast etc' required={true} onChange={(e) => setSmartHomeWifiConnectionSetupInternetProvider(e.target.value)} />
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
                                <TextAreaComponent value={SmartHomeWifiConnectionSetupDesc} placeholder='Any additional details will help ensure the technician will have the proper tools for your requested service' required={false} onChange={(e) => setSmartHomeWifiConnectionSetupDesc(e.target.value)} />
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
                            <button className='continue_btn' onClick={() => { navigate(`/services`) }}>Add Another Service</button>
                        </div>
                        <div className="button">
                            <button className='continue_btn' onClick={() => navigate(`#${hashValue + 1}`)}>Continue</button>
                        </div>
                    </div>
                }

                {(hashValue == 7 && !calendar) &&
                    <div>
                        <ImageUploadComponent onChange={(e) => onChange(e)} img={SmartHomeWifiConnectionSetupPics} />
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

export default SmartHomeWifiConnectionSetup;