import { useLocation, useNavigate } from 'react-router-dom';
import { React, useEffect, useState } from 'react'
import usePersistedState from 'use-persisted-state-hook'
import IncDecComponent from '../../components/services components/IncDecComponent';
import TextComponent from '../../components/services components/TextComponent';
import TextAreaComponent from '../../components/services components/TextAreaComponent';
import ImageUploadComponent from '../../components/services components/ImageUploadComponent';
import Navbar from '../../components/Navbar';
import Calendar from '../../components/services components/calendar';



function LightFixtureInstalltion() {

    const navigate = useNavigate();
    const { hash } = useLocation();
    const [cart, setCart] = usePersistedState('thisCart', {})
    const [quiz, setQuiz] = usePersistedState('thisQuiz', "LightFixtureInstalltion")

    let [faltu, getHashValue] = hash.split('#')
    const url = useLocation().pathname;
    const hashValue = parseInt(getHashValue) || 1;

    // const [LightFixtureReplacement, setLightFixtureReplacement] = useState(0)
    const [LightFixtureReplacement, setLightFixtureReplacement] = usePersistedState('LightFixtureReplacement', 0)
    const [ExteriorLightFixtureReplacement, setExteriorLightFixtureReplacement] = usePersistedState('ExteriorLightFixtureReplacement', 0)
    const [ChandelierReplacement, setChandelierReplacement] = usePersistedState('ChandelierReplacement', 0)
    const [TotalILightFixtureQuantity, setTotalILightFixtureQuantity] = usePersistedState('TotalILightFixtureQuantity', 0)

    const [LightFixtureInstallationHeight, setLightFixtureInstallationHeight] = usePersistedState('LightFixtureInstallationHeight', '')
    const [LightFixtureInstallationDesc, setLightFixtureInstallationDesc] = usePersistedState('LightFixtureInstallationDesc', '')
    const [LightFixtureInstallationPics, setLightFixtureInstallationPics] = usePersistedState('LightFixtureInstallationPics', '')

    const [price, setprice] = useState(0)
    const [selected, setselected] = useState([])

    const [calendar, setcalendar] = useState(false)


    const Items = [
        {
            no: 1,
            heading: `How many lights will be installed?`,
        },

        {
            no: 2,
            heading: `How high is your ceiling?`,
            opt: [
                {
                    id: 1,
                    q: `Under 10 ft.`,
                },
                {
                    id: 2,
                    q: `10 to 14 ft.`,
                },
                {
                    id: 3,
                    q: `Above 14 ft.`,
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
        setLightFixtureInstallationPics(fileString)
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


    useEffect(() => {
        setTotalILightFixtureQuantity(LightFixtureReplacement + ExteriorLightFixtureReplacement + ChandelierReplacement)
    }, [LightFixtureReplacement, ExteriorLightFixtureReplacement, ChandelierReplacement])

    return <>

        <Navbar />

        <section className='hieght my-5'>
            <div className='container'>
                {
                    Items.map((e, i) => {
                        if (e.no == hashValue && hashValue == 1) {
                            return <div key={e.no}>
                                <h2 className='e-heading'>{e.heading}</h2>
                                <IncDecComponent text={'Light Fixture Replacement'} inc={() => setLightFixtureReplacement(LightFixtureReplacement + 1)} dec={() => setLightFixtureReplacement(LightFixtureReplacement - 1)} qty={LightFixtureReplacement} />
                                <IncDecComponent text={'Exterior LightFixture Replacement'} inc={() => setExteriorLightFixtureReplacement(ExteriorLightFixtureReplacement + 1)} dec={() => setExteriorLightFixtureReplacement(ExteriorLightFixtureReplacement - 1)} qty={ExteriorLightFixtureReplacement} />
                                <IncDecComponent text={'Chandelier Replacement'} inc={() => setChandelierReplacement(ChandelierReplacement + 1)} dec={() => setChandelierReplacement(ChandelierReplacement - 1)} qty={ChandelierReplacement} />
                                <div className="button">
                                    <button className='continue_btn' disabled={TotalILightFixtureQuantity <= 0} onClick={() => { TotalILightFixtureQuantity > 0 ? navigate(`#${hashValue + 1}`) : alert('Add Items') }}>Continue</button>
                                </div>
                            </div>
                        }
                        else if (e.no == 2 && hashValue == 2) {
                            return <div key={e.no}>
                                <h2 className='e-heading'>{e.heading}</h2>
                                {e.opt.map(item => {
                                    return <TextComponent onClick={() => { setLightFixtureInstallationHeight(item.q); navigate(`#${hashValue + 1}`) }} text={item.q} />
                                })}
                            </div>
                        }
                    })
                }

                {hashValue == 3 &&
                    <div>
                        <h2 className='e-heading'>Please describe the job in detail.</h2>
                        <div>
                            <form action="" onSubmit={(e) => { e.preventDefault(); navigate(`#${hashValue + 1}`) }}>
                                <TextAreaComponent value={LightFixtureInstallationDesc} placeholder='Optional' required={false} onChange={(e) => setLightFixtureInstallationDesc(e.target.value)} />
                                <div className="button">
                                    <button className='continue_btn'>Continue</button>
                                </div>
                            </form>
                        </div>
                    </div>
                }

                {(hashValue == 4 && !calendar) &&
                    <div>
                        <ImageUploadComponent onChange={(e) => onChange(e)} img={LightFixtureInstallationPics} />
                        <div className="button">
                            <button className='continue_btn' onClick={() => {
                                setcalendar(true);
                                setCart({
                                    price: 97,
                                    estimated_time: '2-3 hours',
                                    q: 'Light Fixture Installation',
                                    LightFixtureReplacement,
                                    ExteriorLightFixtureReplacement,
                                    ChandelierReplacement,
                                    TotalILightFixtureQuantity,
                                    LightFixtureInstallationHeight,
                                    LightFixtureInstallationDesc,
                                    LightFixtureInstallationPics,
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

export default LightFixtureInstalltion;