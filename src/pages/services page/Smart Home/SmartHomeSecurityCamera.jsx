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



function SmartHomeSecurityCamera() {

    const navigate = useNavigate();
    const { hash } = useLocation();
    const [cart, setCart] = usePersistedState('thisCart', {})
    const [quiz, setQuiz] = usePersistedState('thisQuiz', "SmartHomeSecurityCamera")

    let [faltu, getHashValue] = hash.split('#')
    const url = useLocation().pathname;
    const hashValue = parseInt(getHashValue) || 1;

    // const [SmartHomeCamera, setSmartHomeCamera] = useState(0)
    const [SmartHomeCamera, setSmartHomeCamera] = usePersistedState('SmartHomeCamera', 0)


    const [SmartHomeCameraPowerSource, setSmartHomeCameraPowerSource] = usePersistedState('SmartHomeCameraPowerSource', '')
    const [SmartHomeCameraWifi, setSmartHomeCameraWifi] = usePersistedState('SmartHomeCameraWifi', '')
    const [SmartHomeCameraAppReq, setSmartHomeCameraAppReq] = usePersistedState('SmartHomeCameraAppReq', '')
    const [SmartHomeCameraDeviceModel, setSmartHomeCameraDeviceModel] = usePersistedState('SmartHomeCameraDeviceModel', '')
    const [SmartHomeCameraDesc, setSmartHomeCameraDesc] = usePersistedState('SmartHomeCameraDesc', '')
    const [SmartHomeCameraPics, setSmartHomeCameraPics] = usePersistedState('SmartHomeCameraPics', '')

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
            heading: `Where would you like the device installed?`,
            opt: [
                {
                    id: 1,
                    q: `Indoors`,
                },
                {
                    id: 2,
                    q: `Outdoors`,
                },
            ]
        },
        {
            no: 4,
            heading: `Is there a power source nearby?`,
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
        let smartHomeCameraData = JSON.parse(window.localStorage.getItem('smartHomeCameraData'))
        if (smartHomeCameraData == null) smartHomeCameraData = [[]];

        let checkbox = window.document.getElementById(`checkValue${id}`)

        if (checkbox.checked) {
            smartHomeCameraData[smartHomeCameraData.length - 1].push(item)
            window.localStorage.setItem('smartHomeCameraData', JSON.stringify(smartHomeCameraData))
            setselected(smartHomeCameraData)
        } else if (!checkbox.checked) {
            const t = smartHomeCameraData[smartHomeCameraData.length - 1]
            let found = [];
            for (let i = 0; i < t.length; i++) {
                const e = t[i];
                if (e.id == id && e.no == no) {
                    found = i
                    smartHomeCameraData[smartHomeCameraData.length - 1].splice(i, 1)
                    window.localStorage.setItem('smartHomeCameraData', JSON.stringify(smartHomeCameraData))
                    setselected(smartHomeCameraData)
                    return e
                }
            }
        }

    }

    const findCheckValue = (id, no) => {
        let smartHomeCameraData = JSON.parse(window.localStorage.getItem('smartHomeCameraData'))
        if (smartHomeCameraData == null) smartHomeCameraData = [[]];

        if (smartHomeCameraData.length > 0) {
            const found = smartHomeCameraData[smartHomeCameraData.length - 1].find((e) => (e.id == id && e.no == no))
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
        setSmartHomeCameraPics(fileString)
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
                                <IncDecComponent text={'Smart wireless security camera'} inc={() => setSmartHomeCamera(SmartHomeCamera + 1)} dec={() => setSmartHomeCamera(SmartHomeCamera - 1)} qty={SmartHomeCamera} />
                                <div className="button">
                                    <button className='continue_btn' disabled={SmartHomeCamera <= 0} onClick={() => { SmartHomeCamera > 0 ? navigate(`#${hashValue + 1}`) : alert('Add Items') }}>Continue</button>
                                </div>
                            </div>
                        }
                        else if (e.no == 3 && hashValue == 3) {
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

                        else if (e.no == 4 && hashValue == 4) {
                            return <div key={e.no}>
                                <h2 className='e-heading'>{e.heading}</h2>
                                {e.opt.map(item => {
                                    return <TextComponent onClick={() => { setSmartHomeCameraPowerSource(item.q); navigate(`#${hashValue + 1}`) }} text={item.q} />
                                })}
                            </div>
                        }
                        else if (e.no == 5 && hashValue == 5) {
                            return <div key={e.no}>
                                <h2 className='e-heading'>{e.heading}</h2>
                                {e.opt.map(item => {
                                    return <TextComponent onClick={() => { setSmartHomeCameraWifi(item.q); navigate(`#${hashValue + 1}`) }} text={item.q} />
                                })}
                            </div>
                        }
                        else if (e.no == 6 && hashValue == 6) {
                            return <div key={e.no}>
                                <h2 className='e-heading'>{e.heading}</h2>
                                {e.opt.map(item => {
                                    return <TextComponent onClick={() => { setSmartHomeCameraAppReq(item.q); navigate(`#${hashValue + 1}`) }} text={item.q} />
                                })}
                            </div>
                        }
                    })
                }

                {hashValue == 2 &&
                    <div>
                        <h2 className='e-heading'>Please insert the make/model of the device</h2>
                        <div>
                            <form action="" onSubmit={(e) => { e.preventDefault(); navigate(`#${hashValue + 1}`) }}>
                                <TextAreaComponent value={SmartHomeCameraDeviceModel} placeholder='Any additional details will help ensure the technician will have the proper tools for your requested service' required={true} onChange={(e) => setSmartHomeCameraDeviceModel(e.target.value)} />
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
                                <TextAreaComponent value={SmartHomeCameraDesc} placeholder='Any additional details will help ensure the technician will have the proper tools for your requested service' required={false} onChange={(e) => setSmartHomeCameraDesc(e.target.value)} />
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
                            <button className='continue_btn' disabled onClick={() => { navigate(`/services`) }}>Add Another Service</button>
                        </div>
                        <div className="button">
                            <button className='continue_btn' onClick={() => navigate(`#${hashValue + 1}`)}>Continue</button>
                        </div>
                    </div>
                }

                {(hashValue == 9 && !calendar) &&
                    <div>
                        <ImageUploadComponent onChange={(e) => onChange(e)} img={SmartHomeCameraPics} />
                        <div className="button">
                            <button className='continue_btn' onClick={() => {
                                setcalendar(true);
                                setCart({
                                    'product': [
                                        [
                                            {
                                                'no': 1,
                                                'id': 1,
                                                'q': 'Smart Home Camera Installation',
                                                'a': SmartHomeCamera,
                                                'price': 129
                                            },
                                            {
                                                'no': 2,
                                                'id': 1,
                                                'q': 'Brand/Model of Your Device?',
                                                'a': SmartHomeCameraDeviceModel,
                                                'price': 0

                                            },
                                            {
                                                'no': 3,
                                                'id': 1,
                                                'q': 'Where Would You like the Device Installed?',
                                                'a': selected[0].map((e) => e.q),
                                                'price': 0

                                            },
                                            {
                                                'no': 4,
                                                'id': 1,
                                                'q': 'Is There a Powersource Nearby?',
                                                'a': SmartHomeCameraPowerSource,
                                                'price': 0

                                            },
                                            {
                                                'no': 5,
                                                'id': 1,
                                                'q': 'Have Stable and Reliable WiFi?',
                                                'a': SmartHomeCameraWifi,
                                                'price': 0

                                            },
                                            {
                                                'no': 6,
                                                'id': 1,
                                                'q': 'App already Downloaded and Setup on Phone?',
                                                'a': SmartHomeCameraAppReq,
                                                'price': 0

                                            },
                                            {
                                                'no': 7,
                                                'id': 1,
                                                'q': 'Anythink Else?',
                                                'a': SmartHomeCameraDesc,
                                                'price': 0

                                            },
                                            {
                                                'no': 8,
                                                'id': 1,
                                                'q': 'Images',
                                                'a': SmartHomeCameraPics,
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

export default SmartHomeSecurityCamera;