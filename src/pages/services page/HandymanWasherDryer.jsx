import { useLocation, useNavigate } from 'react-router-dom';
import { React, useEffect, useState } from 'react'
import usePersistedState from 'use-persisted-state-hook'
import TextComponent from '../../components/services components/TextComponent';
import TextAreaComponent from '../../components/services components/TextAreaComponent';
import ImageUploadComponent from '../../components/services components/ImageUploadComponent';
import Navbar from '../../components/Navbar';
import Calendar from '../../components/services components/calendar';



function HandymanWasherDryer() {

    const navigate = useNavigate();
    const { hash } = useLocation();
    const [cart, setCart] = usePersistedState('thisCart', {})
    const [quiz, setQuiz] = usePersistedState('thisQuiz', "")

    let [faltu, getHashValue] = hash.split('#')
    const url = useLocation().pathname;
    const hashValue = parseInt(getHashValue) || 1;

    const [WasherDryerInstallationTime, setWasherDryerInstallationTime] = usePersistedState('WasherDryerInstallationTime', '')
    const [WasherDryerInstallDesc, setWasherDryerInstallDesc] = usePersistedState('WasherDryerInstallDesc', '')
    const [WasherDryerInstallPics, setWasherDryerInstallPics] = usePersistedState('WasherDryerInstallPics', '')


    console.log(`${WasherDryerInstallationTime} + ${WasherDryerInstallDesc}`);

    const [calendar, setcalendar] = useState(false)


    const Items = [
        {
            no: 1,
            heading: `Is this a first-time installation or replacement?`,
            opt: [
                {
                    id: 1,
                    q: `Replacement`,
                },
                {
                    id: 2,
                    q: `First time`,
                }
            ]
        },
    ]

    const onChange = (e) => {
        const files = e.target.files;
        const file = files[0];
        getBase64(file);
    };

    const onLoad = (fileString) => {
        setWasherDryerInstallPics(fileString)
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
                        if (hashValue == 2) {
                            return <div key={e.no}>
                                <h2 className='e-heading'>{e.heading}</h2>
                                <div>
                                    <form action="" onSubmit={(e) => { e.preventDefault(); navigate(`#${hashValue + 1}`) }}>
                                        <TextAreaComponent value={WasherDryerInstallDesc} placeholder='Optional' required={false} onChange={(e) => setWasherDryerInstallDesc(e.target.value)} />
                                        <div className="button">
                                            <button className='continue_btn'>Continue</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        }

                        else if (e.no == hashValue && hashValue == 1) {
                            return <div key={e.no}>
                                <h2 className='e-heading'>{e.heading}</h2>
                                {e.opt.map(item => {
                                    return <TextComponent onClick={() => { setWasherDryerInstallationTime(item.q); navigate(`#${hashValue + 1}`) }} text={item.q} />
                                })}
                            </div>
                        }

                    })
                }
                {(hashValue == 3 && !calendar) &&
                    <div>
                        <ImageUploadComponent onChange={(e) => onChange(e)} img={WasherDryerInstallPics} />
                        <div className="button">
                            <button className='continue_btn' onClick={() => {
                                setcalendar(true);
                                setQuiz("HandymanWasherDryer")
                                setCart({
                                    price: 91,
                                    estimated_time: '2-3 hours',
                                    q: 'Washer And Dryer Installation',
                                    WasherDryerInstallationTime,
                                    WasherDryerInstallDesc,
                                    WasherDryerInstallPics
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
        </section>

    </>
}

export default HandymanWasherDryer;