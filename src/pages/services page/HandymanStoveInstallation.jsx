import { useLocation, useNavigate } from 'react-router-dom';
import { React, useEffect, useState } from 'react'
import usePersistedState from 'use-persisted-state-hook'
import TextComponent from '../../components/services components/TextComponent';
import TextAreaComponent from '../../components/services components/TextAreaComponent';
import ImageUploadComponent from '../../components/services components/ImageUploadComponent';
import Navbar from '../../components/Navbar';
import Calendar from '../../components/services components/calendar';



function HandymanStoveInstallation() {

    const navigate = useNavigate();
    const { hash } = useLocation();

    let [faltu, getHashValue] = hash.split('#')
    const url = useLocation().pathname;
    const hashValue = parseInt(getHashValue) || 1;

    const [StoveInstallationTime, setStoveInstallationTime] = usePersistedState('StoveInstallationTime', '')
    const [StoveFuelSource, setStoveFuelSource] = usePersistedState('StoveFuelSource', '')
    const [StoveWiringGasAvail, setStoveWiringGasAvail] = usePersistedState('StoveWiringGasAvail', '')
    const [StoveInstallationDesc, setStoveInstallationDesc] = usePersistedState('StoveInstallationDesc', '')
    const [StoveInstallationPics, setStoveInstallationPics] = usePersistedState('StoveInstallationPics', '')


    console.log(`${StoveInstallationTime} + ${StoveInstallationDesc} + ${StoveFuelSource} + ${StoveWiringGasAvail}`);

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
        {
            no: 2,
            heading: `What is the fuel source for the Stove?`,
            opt: [
                {
                    id: 1,
                    q: `Electric - hard wired`,
                },
                {
                    id: 2,
                    q: `Electric - plug`,
                },
                {
                    id: 3,
                    q: `Natural gas`,
                },
                {
                    id: 4,
                    q: `Propane gas`,
                },
            ]
        },
        {
            no: 3,
            heading: `Is wiring or gas available at the installation site?`,
            opt: [
                {
                    id: 1,
                    q: `Yes`,
                },
                {
                    id: 2,
                    q: `No`,
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
        setStoveInstallationPics(fileString)
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

        <section className='my-5'>
            <div className='container'>
                {
                    Items.map((e, i) => {
                        if (e.no == hashValue && hashValue == 1) {
                            return <div key={e.no}>
                                <h2 className='e-heading'>{e.heading}</h2>
                                {e.opt.map(item => {
                                    return <TextComponent onClick={() => { setStoveInstallationTime(item.q); navigate(`#${hashValue + 1}`) }} text={item.q} />
                                    // return <button key={item.id} onClick={() => { setInstallationType(item.q); navigate(`#${hashValue + 1}`) }}>{item.q}</button>
                                })}
                            </div>
                        }
                        else if (e.no == hashValue && hashValue == 2) {
                            return <div key={e.no}>
                                <h2 className='e-heading'>{e.heading}</h2>
                                {e.opt.map(item => {
                                    return <TextComponent onClick={() => { setStoveFuelSource(item.q); navigate(`#${hashValue + 1}`) }} text={item.q} />
                                    // return <button key={item.id} onClick={() => { setInstallationType(item.q); navigate(`#${hashValue + 1}`) }}>{item.q}</button>
                                })}
                            </div>
                        }
                        else if (e.no == hashValue && hashValue == 3) {
                            return <div key={e.no}>
                                <h2 className='e-heading'>{e.heading}</h2>
                                {e.opt.map(item => {
                                    return <TextComponent onClick={() => { setStoveWiringGasAvail(item.q); navigate(`#${hashValue + 1}`) }} text={item.q} />
                                    // return <button key={item.id} onClick={() => { setInstallationType(item.q); navigate(`#${hashValue + 1}`) }}>{item.q}</button>
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
                                <TextAreaComponent value={StoveInstallationDesc} min={10} onChange={(e) => setStoveInstallationDesc(e.target.value)} required={true} placeholder='This helps ensure the technician will have the proper tools for your requested service. e.g. pictures frames, large mirror in hallway, etc.' />
                                <div className="button">
                                    <button className='continue_btn'>Continue</button>
                                </div>
                            </form>
                        </div>
                    </div>
                }

                {(hashValue == 5 && !calendar) &&
                    <div>
                        <ImageUploadComponent onChange={(e) => onChange(e)} img={StoveInstallationPics} />
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
        </section>

    </>
}

export default HandymanStoveInstallation;