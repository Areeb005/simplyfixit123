import { useLocation, useNavigate } from 'react-router-dom';
import { React, useEffect, useState } from 'react'
import usePersistedState from 'use-persisted-state-hook'
import TextComponent from '../../components/services components/TextComponent';
import IncDecComponent from '../../components/services components/IncDecComponent';
import TextAreaComponent from '../../components/services components/TextAreaComponent';
import ImageUploadComponent from '../../components/services components/ImageUploadComponent'
import Navbar from '../../components/Navbar';
import Calendar from '../../components/services components/calendar';

function FanInstallation() {

    const navigate = useNavigate();
    const { hash } = useLocation();
    const [cart, setCart] = usePersistedState('thisCart', {})
    const [quiz, setQuiz] = usePersistedState('thisQuiz', "FanInstallation")

    let [faltu, getHashValue] = hash.split('#')
    const url = useLocation().pathname;
    const hashValue = parseInt(getHashValue) || 1;

    // const [FanCeilingFans, setFanCeilingFans] = useState(0)
    const [FanCeilingFans, setFanCeilingFans] = usePersistedState('FanCeilingFans', 0)
    const [FanBathroomFans, setBathroomFans] = usePersistedState('FanBathroomFans', 0)
    const [TotalIFanAreasQuantity, setTotalIFanAreasQuantity] = usePersistedState('TotalIFanAreasQuantity', 0)

    const [FanInstallationHeight, setFanInstallationHeight] = usePersistedState('FanInstallationHeight', '')
    const [FanInstallationLadder, setFanInstallationLadder] = usePersistedState('FanInstallationLadder', '')
    const [FanInstallationDesc, setFanInstallationDesc] = usePersistedState('FanInstallationDesc', '')
    const [FanInstallationPics, setFanInstallationPics] = usePersistedState('FanInstallationPics', '')

    const [calendar, setcalendar] = useState(false)

    const [price, setprice] = useState(0)
    const [selected, setselected] = useState([])

    const Items = [
        {
            no: 1,
            heading: `How many fans will be installed?`,
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
        {
            no: 3,
            heading: `Will the handyman need a ladder?`,
            opt: [
                {
                    id: 1,
                    q: `No`,
                },
                {
                    id: 2,
                    q: `Yes - step ladder`,
                },
                {
                    id: 3,
                    q: `Yes - extension ladder`,
                },
            ]
        },
    ]

    const onChange = (e) => {
        const files = e.target.files;
        const file = files[0];
        if (file.size > 2097152) {
            alert("File is too big!");
            file.value = "";
        } else {
            getBase64(file);
        }
    };

    const onLoad = (fileString) => {
        setFanInstallationPics(fileString)
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
        setTotalIFanAreasQuantity(FanCeilingFans + FanBathroomFans)
    }, [FanCeilingFans, FanBathroomFans])

    return <>

        <Navbar />

        <section className='hieght my-5'>
            <div className='container'>
                {

                    Items.map((e, i) => {

                        if (e.no == hashValue && hashValue == 1) {

                            return <div key={e.no}>
                                <h2 className='e-heading'>{e.heading}</h2>
                                <IncDecComponent text={'Ceiling Fans'} dec={() => setFanCeilingFans(FanCeilingFans - 1)} inc={() => setFanCeilingFans(FanCeilingFans + 1)} qty={FanCeilingFans} />
                                <IncDecComponent text={'Bathroom Fans'} dec={() => setBathroomFans(FanBathroomFans - 1)} inc={() => setBathroomFans(FanBathroomFans + 1)} qty={FanBathroomFans} />
                                <div className="button">
                                    <button className='continue_btn' disabled={TotalIFanAreasQuantity <= 0} onClick={() => { TotalIFanAreasQuantity > 0 ? navigate(`#${hashValue + 1}`) : alert('Add Items') }}>Continue</button>
                                </div>
                            </div>
                        }

                        else if (e.no == 2 && hashValue == 2) {
                            return <div key={e.no}>
                                <h2 className='e-heading'>{e.heading}</h2>
                                {e.opt.map(item => {
                                    return <TextComponent onClick={() => { setFanInstallationHeight(item.q); navigate(`#${hashValue + 1}`) }} text={item.q} />
                                })}
                            </div>
                        }

                        else if (e.no == 3 && hashValue == 3) {
                            return <div key={e.no}>
                                <h2 className='e-heading'>{e.heading}</h2>
                                {e.opt.map(item => {
                                    return <TextComponent onClick={() => { setFanInstallationLadder(item.q); navigate(`#${hashValue + 1}`) }} text={item.q} />
                                })}
                            </div>
                        }
                    })
                }

                {hashValue == 4 &&
                    <div>
                        <h2 className='e-heading'>Please describe the job in detail.</h2>
                        <div>
                            <form action="" onSubmit={(e) => { e.preventDefault(); navigate(`#${hashValue + 1}`) }}>
                                <TextAreaComponent value={FanInstallationDesc} min={10} onChange={(e) => setFanInstallationDesc(e.target.value)} required={false} placeholder='Example: Ceiling is 10 feet, need to install 2 fans (Optional)' />
                                <div className="button">
                                    <button className='continue_btn'>Continue</button>
                                </div>
                            </form>
                        </div>
                    </div>
                }

                {(hashValue == 5 && !calendar) &&
                    <div>
                        {/* <img src={FanInstallationPics} alt="" height={'200px'} width={'200px'} /> */}
                        <ImageUploadComponent onChange={(e) => onChange(e)} img={FanInstallationPics} />
                        <div className="button">
                            <button className='continue_btn' onClick={() => {
                                setcalendar(true);
                                setCart({
                                    FanCeilingFans,	
                                    FanBathroomFans,	
                                    TotalIFanAreasQuantity,	
                                    FanInstallationHeight,	
                                    FanInstallationLadder,	
                                    FanInstallationDesc,	
                                    FanInstallationPics,
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

export default FanInstallation;