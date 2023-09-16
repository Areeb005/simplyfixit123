import { useLocation, useNavigate } from 'react-router-dom';
import { React, useEffect, useState } from 'react'
import usePersistedState from 'use-persisted-state-hook'
import IncDecComponent from '../../components/services components/IncDecComponent';
import TextAreaComponent from '../../components/services components/TextAreaComponent';
import ImageUploadComponent from '../../components/services components/ImageUploadComponent';
import Navbar from '../../components/Navbar';
import Calendar from '../../components/services components/calendar';



function HandymanFurniture() {

    const navigate = useNavigate();
    const { hash } = useLocation();

    let [faltu, getHashValue] = hash.split('#')
    const url = useLocation().pathname;
    const hashValue = parseInt(getHashValue) || 1;

    // const [SmallFurniture, setSmallFurniture] = useState(0)
    const [SmallFurniture, setSmallFurniture] = usePersistedState('SmallFurniture', 0)
    const [MediumFurniture, setMediumFurniture] = usePersistedState('MediumFurniture', 0)
    const [LargeFurniture, setLargeFurniture] = usePersistedState('LargeFurniture', 0)
    const [ExtraLargeFurniture, setExtraLargeFurniture] = usePersistedState('ExtraLargeFurniture', 0)
    const [TotalFurnitureQuantity, setTotalFurnitureQuantity] = usePersistedState('TotalFurnitureQuantity', 0)
    const [Desc, setDesc] = usePersistedState('Desc', '')
    const [Pics, setPics] = usePersistedState('Pics', '')

    const [price, setprice] = useState(0)
    const [selected, setselected] = useState([])

    const [calendar, setcalendar] = useState(false)

    const [cart, setCart] = usePersistedState('thisCart', {
        SmallFurniture,
        MediumFurniture,
        LargeFurniture,
        ExtraLargeFurniture,
        TotalFurnitureQuantity,
        Desc,
        Pics,
    })


    const Furniture = [
        {
            no: 1,
            heading: `How many pieces of furniture do you need assembled?`,
            opt: [{
                id: 1,
                q: `Small furniture`,
                price: 76
            },
            {
                id: 2,
                q: `Medium furniture`,
                price: 109
            },
            {
                id: 3,
                q: `Large furniture`,
                price: 164
            },
            {
                id: 4,
                q: `Extra Large furniture`,
                price: 197
            },
            ]
        },
        {
            no: 2,
            heading: `Please provide additional details about the job`,
        },
        {
            no: 3,
            heading: `You can help us understand the scope of work by providing photos or links.`,
        },
    ]

    const onChange = (e) => {
        const files = e.target.files;
        const file = files[0];
        getBase64(file);
    };

    const onLoad = (fileString) => {
        setPics(fileString)
        setCart({
            ...cart,
            Pics: fileString
        })
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
        let furnitureService = JSON.parse(window.localStorage.getItem('furnitureService'))
        if (!furnitureService) {
            furnitureService = []
        }
        setselected(furnitureService)
    }, [])

    useEffect(() => {
        setTotalFurnitureQuantity(SmallFurniture + MediumFurniture + LargeFurniture + ExtraLargeFurniture)

        setCart({
            ...cart,
            SmallFurniture,
            MediumFurniture,
            LargeFurniture,
            ExtraLargeFurniture,
            TotalFurnitureQuantity,
        })
    }, [SmallFurniture, MediumFurniture, LargeFurniture, ExtraLargeFurniture])





    return <>

        <Navbar />

        <section className='hieght my-5'>
            <div className='container'>
                {
                    Furniture.map((e, i) => {
                        if (e.no == 2 && hashValue == 2) {
                            return <div key={e.no}>
                                <h2 className='e-heading'>{e.heading}</h2>
                                <div>
                                    <form action="" onSubmit={(e) => { e.preventDefault(); navigate(`#${hashValue + 1}`) }}>
                                        <TextAreaComponent value={Desc} min={10} onChange={(e) => { setDesc(e.target.value); setCart({ ...cart, Desc: e.target.value }) }} required={true} placeholder='This helps ensure the technician will have the proper tools for your requested service. e.g. pictures frames, large mirror in hallway, etc.' />
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
                                <IncDecComponent text={'Small furniture'} dec={() => setSmallFurniture(SmallFurniture - 1)} inc={() => setSmallFurniture(SmallFurniture + 1)} qty={SmallFurniture} />
                                <IncDecComponent text={'Medium furniture'} dec={() => setMediumFurniture(MediumFurniture - 1)} inc={() => setMediumFurniture(MediumFurniture + 1)} qty={MediumFurniture} />
                                <IncDecComponent text={'Large furniture'} dec={() => setLargeFurniture(LargeFurniture - 1)} inc={() => setLargeFurniture(LargeFurniture + 1)} qty={LargeFurniture} />
                                <IncDecComponent text={'Extra Large furniture'} dec={() => setExtraLargeFurniture(ExtraLargeFurniture - 1)} inc={() => setExtraLargeFurniture(ExtraLargeFurniture + 1)} qty={ExtraLargeFurniture} />

                                <div className="button">
                                    <button className='continue_btn' disabled={TotalFurnitureQuantity == 0} onClick={() => { TotalFurnitureQuantity > 0 ? navigate(`#${hashValue + 1}`) : alert('Add furniture') }}>Continue</button>
                                </div>
                            </div>
                        }

                    })
                }
                {(hashValue == 3 && !calendar) &&
                    <div>
                        <ImageUploadComponent onChange={(e) => onChange(e)} img={Pics} />
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

export default HandymanFurniture;