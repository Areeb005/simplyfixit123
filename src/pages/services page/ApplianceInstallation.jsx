import { useLocation, useNavigate } from 'react-router-dom';
import { React, useEffect, useState } from 'react'
import usePersistedState from 'use-persisted-state-hook'
import TextComponent from '../../components/services components/TextComponent';
import TextAreaComponent from '../../components/services components/TextAreaComponent';
import ImageUploadComponent from '../../components/services components/ImageUploadComponent';
import Navbar from '../../components/Navbar';
import Calendar from '../../components/services components/calendar';



function ApplianceInstallation() {

    const navigate = useNavigate();
    const { hash } = useLocation();

    let [faltu, getHashValue] = hash.split('#')
    const url = useLocation().pathname;
    const hashValue = parseInt(getHashValue) || 1;

    const [InstallationType, setInstallationType] = usePersistedState('InstallationType', '')
    const [InstallationTime, setInstallationTime] = usePersistedState('InstallationTime', '')
    const [FuelSource, setFuelSource] = usePersistedState('FuelSource', '')
    const [WireOrGaseAvail, setWireOrGaseAvail] = usePersistedState('WireOrGaseAvail', '')
    const [ApplianceInstallationDesc, setApplianceInstallationDesc] = usePersistedState('ApplianceInstallationDesc', '')
    const [ApplianceInstallationPics, setApplianceInstallationPics] = usePersistedState('ApplianceInstallationPics', '')

    console.log(`${InstallationType} + ${InstallationTime} + ${FuelSource} + ${WireOrGaseAvail} + ${ApplianceInstallationDesc}`);


    const [calendar, setcalendar] = useState(false)


    const Items = [
        {
            no: 1,
            heading: `What type of appliance do you need to install/replace?`,
            opt: [
                {
                    id: 1,
                    q: `Cooktop Installation`,
                },
            ]
        },
        {
            no: 2,
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
            no: 3,
            heading: `What is the fuel source for the cooktop?`,
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
            no: 4,
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
        {
            no: 5,
            heading: `You can help us understand the scope of work by providing photos or links.`,
        },
    ]

    const onChange = (e) => {
        const files = e.target.files;
        const file = files[0];
        getBase64(file);
    };

    const onLoad = (fileString) => {
        setApplianceInstallationPics(fileString)
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
                        if (e.no == 5 && hashValue == 5) {
                            return <div key={e.no}>
                                <h2 className='e-heading'>{e.heading}</h2>
                                <div>
                                    <form action="" onSubmit={(e) => { e.preventDefault(); navigate(`#${hashValue + 1}`) }}>
                                        <TextAreaComponent value={ApplianceInstallationDesc} min={10} onChange={(e) => setApplianceInstallationDesc(e.target.value)} required={true} placeholder='This helps ensure the technician will have the proper tools for your requested service. e.g. pictures frames, large mirror in hallway, etc.' />
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
                                    return <TextComponent onClick={() => { setInstallationType(item.q); navigate(`#${hashValue + 1}`) }} text={item.q} />
                                })}
                            </div>
                        }

                        else if (e.no == 2 && hashValue == 2) {
                            return <div key={e.no}>
                                <h2 className='e-heading'>{e.heading}</h2>
                                {e.opt.map(item => {
                                    return <TextComponent onClick={() => { setInstallationTime(item.q); navigate(`#${hashValue + 1}`) }} text={item.q} />
                                })}
                            </div>
                        }

                        else if (e.no == 3 && hashValue == 3) {
                            return <div key={e.no}>
                                <h2 className='e-heading'>{e.heading}</h2>
                                {e.opt.map(item => {
                                    return <TextComponent onClick={() => { setFuelSource(item.q); navigate(`#${hashValue + 1}`) }} text={item.q} />
                                })}
                            </div>
                        }
                        else if (e.no == 4 && hashValue == 4) {
                            return <div key={e.no}>
                                <h2 className='e-heading'>{e.heading}</h2>
                                {e.opt.map(item => {
                                    return <TextComponent onClick={() => { setWireOrGaseAvail(item.q); navigate(`#${hashValue + 1}`) }} text={item.q} />
                                })}
                            </div>
                        }
                    })
                }
                {(hashValue == 6 && !calendar) &&
                    <div>
                        <ImageUploadComponent onChange={(e) => onChange(e)} img={ApplianceInstallationPics} />
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

export default ApplianceInstallation;