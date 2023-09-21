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



function SmartHomeVideoDoorbell() {

    const navigate = useNavigate();
    const { hash } = useLocation();
    const [cart, setCart] = usePersistedState('thisCart', {})
    const [quiz, setQuiz] = usePersistedState('thisQuiz', "SmartHomeVideoDoorbell")

    let [faltu, getHashValue] = hash.split('#')
    const url = useLocation().pathname;
    const hashValue = parseInt(getHashValue) || 1;

    // const [SmartHomeVideoDoorbell, setSmartHomeVideoDoorbell] = useState(0)
    const [SmartHomeVideoDoorbell, setSmartHomeVideoDoorbell] = usePersistedState('SmartHomeVideoDoorbell', 0)


    const [SmartHomeVideoDoorbellExist, setSmartHomeVideoDoorbellExist] = usePersistedState('SmartHomeVideoDoorbellExist', '')
    const [SmartHomeVideoDoorbellBattery, setSmartHomeVideoDoorbellBattery] = usePersistedState('SmartHomeVideoDoorbellBattery', '')
    const [SmartHomeVideoDoorbellWifi, setSmartHomeVideoDoorbellWifi] = usePersistedState('SmartHomeVideoDoorbellWifi', '')
    const [SmartHomeVideoDoorbellAppReq, setSmartHomeVideoDoorbellAppReq] = usePersistedState('SmartHomeVideoDoorbellAppReq', '')
    const [SmartHomeVideoDoorbellDeviceModel, setSmartHomeVideoDoorbellDeviceModel] = usePersistedState('SmartHomeVideoDoorbellDeviceModel', '')
    const [SmartHomeVideoDoorbellDesc, setSmartHomeVideoDoorbellDesc] = usePersistedState('SmartHomeVideoDoorbellDesc', '')
    const [SmartHomeVideoDoorbellPics, setSmartHomeVideoDoorbellPics] = usePersistedState('SmartHomeVideoDoorbellPics', '')

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
            heading: `Does your home already have a doorbell?`,
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
            heading: `Is your smart home doorbell battery powered?`,
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
        let smartHomeVideoDoorbellData = JSON.parse(window.localStorage.getItem('smartHomeVideoDoorbellData'))
        if (smartHomeVideoDoorbellData == null) smartHomeVideoDoorbellData = [[]];

        let checkbox = window.document.getElementById(`checkValue${id}`)

        if (checkbox.checked) {
            smartHomeVideoDoorbellData[smartHomeVideoDoorbellData.length - 1].push(item)
            window.localStorage.setItem('smartHomeVideoDoorbellData', JSON.stringify(smartHomeVideoDoorbellData))
            setselected(smartHomeVideoDoorbellData)
        } else if (!checkbox.checked) {
            const t = smartHomeVideoDoorbellData[smartHomeVideoDoorbellData.length - 1]
            let found = [];
            for (let i = 0; i < t.length; i++) {
                const e = t[i];
                if (e.id == id && e.no == no) {
                    found = i
                    smartHomeVideoDoorbellData[smartHomeVideoDoorbellData.length - 1].splice(i, 1)
                    window.localStorage.setItem('smartHomeVideoDoorbellData', JSON.stringify(smartHomeVideoDoorbellData))
                    setselected(smartHomeVideoDoorbellData)
                    return e
                }
            }
        }

    }

    const findCheckValue = (id, no) => {
        let smartHomeVideoDoorbellData = JSON.parse(window.localStorage.getItem('smartHomeVideoDoorbellData'))
        if (smartHomeVideoDoorbellData == null) smartHomeVideoDoorbellData = [[]];

        if (smartHomeVideoDoorbellData.length > 0) {
            const found = smartHomeVideoDoorbellData[smartHomeVideoDoorbellData.length - 1].find((e) => (e.id == id && e.no == no))
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
        setSmartHomeVideoDoorbellPics(fileString)
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
                                <IncDecComponent text={'Smart Video Doorbell'} inc={() => setSmartHomeVideoDoorbell(SmartHomeVideoDoorbell + 1)} dec={() => setSmartHomeVideoDoorbell(SmartHomeVideoDoorbell - 1)} qty={SmartHomeVideoDoorbell} />
                                <div className="button">
                                    <button className='continue_btn' disabled={SmartHomeVideoDoorbell <= 0} onClick={() => { SmartHomeVideoDoorbell > 0 ? navigate(`#${hashValue + 1}`) : alert('Add Items') }}>Continue</button>
                                </div>
                            </div>
                        }
                        else if (e.no == 3 && hashValue == 3) {
                            return <div key={e.no}>
                                <h2 className='e-heading'>{e.heading}</h2>
                                {e.opt.map(item => {
                                    return <TextComponent onClick={() => { setSmartHomeVideoDoorbellExist(item.q); navigate(`#${hashValue + 1}`) }} text={item.q} />
                                })}
                            </div>
                        }
                        else if (e.no == 4 && hashValue == 4) {
                            return <div key={e.no}>
                                <h2 className='e-heading'>{e.heading}</h2>
                                {e.opt.map(item => {
                                    return <TextComponent onClick={() => { setSmartHomeVideoDoorbellBattery(item.q); navigate(`#${hashValue + 1}`) }} text={item.q} />
                                })}
                            </div>
                        }
                        else if (e.no == 5 && hashValue == 5) {
                            return <div key={e.no}>
                                <h2 className='e-heading'>{e.heading}</h2>
                                {e.opt.map(item => {
                                    return <TextComponent onClick={() => { setSmartHomeVideoDoorbellWifi(item.q); navigate(`#${hashValue + 1}`) }} text={item.q} />
                                })}
                            </div>
                        }
                        else if (e.no == 6 && hashValue == 6) {
                            return <div key={e.no}>
                                <h2 className='e-heading'>{e.heading}</h2>
                                {e.opt.map(item => {
                                    return <TextComponent onClick={() => { setSmartHomeVideoDoorbellAppReq(item.q); navigate(`#${hashValue + 1}`) }} text={item.q} />
                                })}
                            </div>
                        }
                    })
                }

                {hashValue == 2 &&
                    <div>
                        <h2 className='e-heading'>What is the brand/model of your smart video doorbell?</h2>
                        <div>
                            <form action="" onSubmit={(e) => { e.preventDefault(); navigate(`#${hashValue + 1}`) }}>
                                <TextAreaComponent value={SmartHomeVideoDoorbellDeviceModel} placeholder='Please provice the brand & model of the device you want installed. e.g. Ring doorbell 2, Nest hello etc' required={true} onChange={(e) => setSmartHomeVideoDoorbellDeviceModel(e.target.value)} />
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
                                <TextAreaComponent value={SmartHomeVideoDoorbellDesc} placeholder='Any additional details will help ensure the technician will have the proper tools for your requested service' required={false} onChange={(e) => setSmartHomeVideoDoorbellDesc(e.target.value)} />
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
                        <ImageUploadComponent onChange={(e) => onChange(e)} img={SmartHomeVideoDoorbellPics} />
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
                                                'a': SmartHomeVideoDoorbell,
                                                'price': 99
                                            },
                                            {
                                                'no': 2,
                                                'id': 1,
                                                'q': 'Brand/Model of Smart Video Doorbell?',
                                                'a': SmartHomeVideoDoorbellDeviceModel,
                                                'price': 0
                                            },
                                            {
                                                'no': 3,
                                                'id': 1,
                                                'q': 'Do you have an existing doorbell?',
                                                'a': SmartHomeVideoDoorbellExist,
                                                'price': 0
                                            },
                                            {
                                                'no': 4,
                                                'id': 1,
                                                'q': 'Is Your Doorbell Battery Powered?',
                                                'a': SmartHomeVideoDoorbellBattery,
                                                'price': 0
                                            },
                                            {
                                                'no': 5,
                                                'id': 1,
                                                'q': 'Have Stable and Reliable WiFi?',
                                                'a': SmartHomeVideoDoorbellWifi,
                                                'price': 0
                                            },
                                            {
                                                'no': 6,
                                                'id': 1,
                                                'q': 'App already Downloaded and Setup on Phone?',
                                                'a': SmartHomeVideoDoorbellAppReq,
                                                'price': 0
                                            },
                                            {
                                                'no': 7,
                                                'id': 1,
                                                'q': 'Anythink Else?',
                                                'a': SmartHomeVideoDoorbellDesc,
                                                'price': 0
                                            },
                                            {
                                                'no': 8,
                                                'id': 1,
                                                'q': 'Images',
                                                'a': SmartHomeVideoDoorbellPics,
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

export default SmartHomeVideoDoorbell;