import { useLocation, useNavigate } from 'react-router-dom';
import { React, useEffect, useState } from 'react'
import usePersistedState from 'use-persisted-state-hook'
import TextComponent from '../../components/services components/TextComponent';
import IncDecComponent from '../../components/services components/IncDecComponent';
import TextAreaComponent from '../../components/services components/TextAreaComponent';
import ImageUploadComponent from '../../components/services components/ImageUploadComponent';
import WallHangSelect from '../../components/services components/WallHangSelect';
import Navbar from '../../components/Navbar';
import Calendar from '../../components/services components/calendar';


function HandymanWallhanging() {

    const navigate = useNavigate();
    const { hash } = useLocation();

    let [faltu, getHashValue] = hash.split('#')
    const url = useLocation().pathname;
    const hashValue = parseInt(getHashValue) || 1;

    // const [SmallItems, setSmallItems] = useState(0)
    const [SmallItems, setSmallItems] = usePersistedState('SmallItems', 0)
    const [LargeItems, setLargeItems] = usePersistedState('LargeItems', 0)
    const [ExtraLargeItems, setExtraLargeItems] = usePersistedState('ExtraLargeItems', 0)
    const [TotalItemsQuantity, setTotalItemsQuantity] = usePersistedState('TotalItemsQuantity', 0)
    const [WallHangingDesc, setWallHangingDesc] = usePersistedState('WallHangingDesc', '')
    const [WallHangingHeight, setWallHangingHeight] = usePersistedState('WallHangingHeight', '')
    const [WallHangingPics, setWallHangingPics] = usePersistedState('WallHangingPics', '')

    const [selected, setselected] = useState([])

    const [price, setprice] = useState(0)

    const [calendar, setcalendar] = useState(false)

    const Items = [
        {
            no: 1,
            heading: `How many pieces of Items do you need assembled?`,
        },
        {
            no: 2,
            heading: `What kind of wall types will we be hanging items on?`,
            opt: [
                {
                    id: 1,
                    q: `Drywall or Wood`,
                },
                {
                    id: 2,
                    q: `Brick`,
                },
                {
                    id: 3,
                    q: `Concrete`,
                },
                {
                    id: 4,
                    q: `Paneling`,
                },
                {
                    id: 5,
                    q: `Other`,
                },
            ]
        },
        {
            no: 3,
            heading: `What’s the height of your ceiling?`,
            opt: [
                {
                    id: 1,
                    q: `Standard Ceiling`,
                    size: `(8 - 12 ft)`
                },
                {
                    id: 2,
                    q: `Higher Ceiling`,
                    size: `(12.1ft or higher)`
                },
            ]
        },
        {
            no: 4,
            heading: `Please provide additional details about the job`,
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
        setWallHangingPics(fileString)
    };

    const getBase64 = (file) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            onLoad(reader.result);
        };
    };

    const checkboxData = (item, id, no) => {
        item.no = no
        let dataWallhanging = JSON.parse(window.sessionStorage.getItem('dataWallhanging'))
        if (dataWallhanging == null) dataWallhanging = [[]];

        let checkbox = window.document.getElementById(`checkValue${id}`)

        if (checkbox.checked) {
            dataWallhanging[dataWallhanging.length - 1].push(item)
            window.sessionStorage.setItem('dataWallhanging', JSON.stringify(dataWallhanging))
            setselected(dataWallhanging)
        } else if (!checkbox.checked) {
            const t = dataWallhanging[dataWallhanging.length - 1]
            let found = [];
            for (let i = 0; i < t.length; i++) {
                const e = t[i];
                if (e.id == id && e.no == no) {
                    found = i
                    dataWallhanging[dataWallhanging.length - 1].splice(i, 1)
                    window.sessionStorage.setItem('dataWallhanging', JSON.stringify(dataWallhanging))
                    setselected(dataWallhanging)
                    return e
                }
            }
        }

    }

    const findCheckValue = (id, no) => {
        let dataWallhanging = JSON.parse(window.sessionStorage.getItem('dataWallhanging'))
        if (dataWallhanging == null) dataWallhanging = [[]];

        if (dataWallhanging.length > 0) {
            const found = dataWallhanging[dataWallhanging.length - 1].find((e) => (e.id == id && e.no == no))
            if (found) return true
            else return false
        }
    }

    console.log(selected);

    useEffect(() => {
        setcalendar(false)
    }, [hashValue])

    useEffect(() => {

        setTotalItemsQuantity(SmallItems + LargeItems + ExtraLargeItems)

    }, [SmallItems, LargeItems, ExtraLargeItems])

    return <>

        <Navbar />

        <section className='my-5'>
            <div className='container'>
                {
                    Items.map((e, i) => {
                        if (e.no == 4 && hashValue == 4) {
                            return <div key={e.no}>
                                <h2 className='e-heading'>{e.heading}</h2>
                                <div>
                                    <form onSubmit={(e) => { e.preventDefault(); navigate(`#${hashValue + 1}`) }}>
                                        <TextAreaComponent value={WallHangingDesc} min={'10'} onChange={(e) => setWallHangingDesc(e.target.value)} required={true} placeholder='This helps ensure the technician will have the proper tools for your requested service. e.g. pictures frames, large mirror in hallway, etc.' />
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
                                <IncDecComponent text={'Small Items'} dec={() => setSmallItems(SmallItems - 1)} inc={() => setSmallItems(SmallItems + 1)} qty={SmallItems} />
                                <IncDecComponent text={'Large Items'} dec={() => setLargeItems(LargeItems - 1)} inc={() => setLargeItems(LargeItems + 1)} qty={LargeItems} />
                                <IncDecComponent text={'Mirrors and heavy objects'} dec={() => setExtraLargeItems(ExtraLargeItems - 1)} inc={() => setExtraLargeItems(ExtraLargeItems + 1)} qty={ExtraLargeItems} />

                                <div className="button">
                                    <button className='continue_btn' onClick={() => { TotalItemsQuantity > 0 ? navigate(`#${hashValue + 1}`) : alert('Add Items') }}>Continue</button>
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

                        else if (e.no == 3 && hashValue == 3) {
                            return <div key={e.no}>
                                <h2 className='e-heading'>{e.heading}</h2>
                                {e.opt.map(item => {
                                    return <TextComponent onClick={() => { setWallHangingHeight(item.q); navigate(`#${hashValue + 1}`) }} text={item.q} size={item.size} />
                                })}
                            </div>
                        }
                    })
                }
                {(hashValue == 5 && !calendar) &&
                    <div>
                        <ImageUploadComponent onChange={(e) => onChange(e)} img={WallHangingPics} />
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

export default HandymanWallhanging;