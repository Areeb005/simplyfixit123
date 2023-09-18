import usePersistedState from 'use-persisted-state-hook'
import { useLocation, useNavigate } from 'react-router-dom';
import { React, useEffect, useState } from 'react'
import TextComponent from '../../components/services components/TextComponent';
import MultipleSelectComponet from '../../components/services components/MultipleSelectComponet';
import Navbar from '../../components/Navbar';
import Calendar from '../../components/services components/calendar';


const TvMounting = () => {

    const navigate = useNavigate();
    const { hash } = useLocation();
    const [cart, setCart] = usePersistedState('thisCart', {})
    const [quiz, setQuiz] = usePersistedState('thisQuiz', "")

    let [faltu, getHashValue] = hash.split('#')
    const url = useLocation().pathname;
    const hashValue = parseInt(getHashValue) || 1;

    const [price, setprice] = useState(0)
    const [selected, setselected] = useState([])

    const [calendar, setcalendar] = useState(false)

    const Tv = [
        {
            no: 1,
            heading: `What size is your tv?`,
            opt: [{
                id: 1,
                q: `Up to 31"`,
                price: 76
            },
            {
                id: 2,
                q: `32" - 60"`,
                price: 109
            },
            {
                id: 3,
                q: `61" - 80"`,
                price: 164
            },
            {
                id: 4,
                q: `Over 81"`,
                price: 197
            },
            ]
        },
        {
            no: 2,
            heading: `Select Brack Type`,
            opt: [{
                id: 1,
                q: `Fixed`,
                price: 39
            },
            {
                id: 2,
                q: `Tilting`,
                price: 39
            },
            {
                id: 3,
                q: `Full Motion`,
                price: 59
            },
            {
                id: 4,
                q: `None - I already have a bracket`,
                price: 0
            },
            ]
        },
        {
            no: 3,
            heading: `Where would you like your TV mounted?`,
            opt: [{
                id: 1,
                q: `On the wall`,
                price: 0
            },
            {
                id: 2,
                q: `Above a fireplace`,
                price: 0
            }
            ]
        },
        {
            no: 4,
            heading: `Select your wall type`,
            opt: [{
                id: 1,
                q: `Dry wall or wood`,
                price: 0
            },
            {
                id: 2,
                q: `Brick`,
                price: 35
            },
            {
                id: 3,
                q: `Concrete `,
                price: 49
            },
            {
                id: 4,
                q: `Other`,
                price: 35
            },
            ]
        },
        {
            no: 5,
            heading: `Do you need anything else?`,
            opt: [{
                id: 1,
                q: `In-wall cord concealment with power`,
                price: 120
            },
            {
                id: 2,
                q: `In-wall cord concealment without power`,
                price: 79
            },
            {
                id: 3,
                q: `External cord concealment`,
                price: 49
            },
            {
                id: 4,
                q: `Install sound-bar`,
                price: 49
            },
            {
                id: 5,
                q: `Install wall shelf`,
                price: 49
            },
            ]
        }
    ]


    const collect = (item, no) => {

        let dataTvMounting = JSON.parse(window.localStorage.getItem('dataTvMounting'))
        if (!dataTvMounting) dataTvMounting = []


        console.log(dataTvMounting, 'before');

        item.no = no

        if (no === 1) {
            dataTvMounting.push([item])
        }
        else if (dataTvMounting) {
            let itemData = (dataTvMounting[dataTvMounting.length - 1]);
            let foundItem = itemData.find(e => e.no == no);
            let index = (dataTvMounting[dataTvMounting.length - 1]).indexOf(foundItem);

            if (foundItem) {
                if (foundItem.no == no) itemData[index] = item;

            } else {
                dataTvMounting[dataTvMounting.length - 1].push(item);
            }
        }

        window.localStorage.setItem('dataTvMounting', JSON.stringify(dataTvMounting));
        setselected(dataTvMounting);
    }

    const checkboxData = (item, id, no) => {
        item.no = no

        let dataTvMounting = JSON.parse(window.localStorage.getItem('dataTvMounting'))

        console.log(dataTvMounting, 'before');

        let checkbox = window.document.getElementById(`checkValue${id}`)

        console.log(checkbox.checked);
        console.log(checkbox.value);

        if (checkbox.checked) {
            dataTvMounting[dataTvMounting.length - 1].push(item)
            localStorage.setItem('dataTvMounting', JSON.stringify(dataTvMounting))
            setselected(dataTvMounting)

        } else if (!checkbox.checked) {
            const t = dataTvMounting[dataTvMounting.length - 1]
            let found = [];
            for (let i = 0; i < t.length; i++) {
                const e = t[i];
                if (e.id == id && e.no == no) {
                    found = i
                    dataTvMounting[dataTvMounting.length - 1].splice(i, 1)
                    localStorage.setItem('dataTvMounting', JSON.stringify(dataTvMounting))
                    setselected(dataTvMounting)
                    return e
                }

            }
            console.log("i", found);

        }

        console.log(dataTvMounting, 'after');

    }


    const findCheckValue = (id, no) => {
        let dataTvMounting = JSON.parse(window.localStorage.getItem('dataTvMounting'))
        const found = dataTvMounting[dataTvMounting.length - 1].find((e) => (e.id == id && e.no == no))

        if (found) return true
        else return false
    }

    useEffect(() => {
        setcalendar(false)
    }, [hashValue])

    useEffect(() => {
        let dataTvMounting = JSON.parse(window.localStorage.getItem('dataTvMounting'))
        if (!dataTvMounting) {
            dataTvMounting = []
        }
        setselected(dataTvMounting)
    }, [])

    useEffect(() => {
        let total = 0;
        selected.forEach(e => {
            e.forEach(item => {
                total += item.price;
            })
            setprice(total)
            console.log(total);
        })

    }, [selected])



    return <>

        <Navbar />

        <section className='hieght my-5'>
            <div className='container'>
                <div className="row">
                    <div className="col-md-8">
                        {
                            Tv.map((e) => {
                                if (e.no == 5 && hashValue == 5) {
                                    return <div key={e.no}>
                                        <h2 className='e-heading'>{e.heading}</h2>
                                        <div className='multi-select-card my-5'>
                                            <div className='container'>
                                                <div className="accordion" id="accordionExample">
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="headingOne">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                The Most Popular
                                                            </button>
                                                        </h2>
                                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                            <div className="accordion-body">
                                                                <div className="row">
                                                                    {e.opt.map(item => {
                                                                        return <MultipleSelectComponet text={item.q} checked={findCheckValue(item.id, e.no)} id={`checkValue${item.id}`} price={item.price} onClick={() => checkboxData(item, item.id, e.no)} />
                                                                        // return <div>
                                                                        //     <label htmlFor={`checkValue${item.id}`}>
                                                                        //         <input type="checkbox" name="" checked={findCheckValue(item.id, e.no)} id={`checkValue${item.id}`} value={item.q} onClick={() => checkboxData(item, item.id, e.no)} />
                                                                        //         {item.q}
                                                                        //     </label>
                                                                        // </div>
                                                                    })}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="button">
                                            <button className='continue_btn' onClick={() => { navigate(`#${hashValue + 1}`) }}>Continue</button>
                                        </div>
                                    </div>
                                }
                                else if (e.no == hashValue && e.no !== 5 && e.no !== 6) {
                                    return <div key={e.no}>
                                        <h2 className='e-heading'>{e.heading}</h2>
                                        {e.opt.map(item => {
                                            return <TextComponent onClick={() => { collect(item, e.no); navigate(`#${hashValue + 1}`) }} text={item.q} />
                                        })}
                                    </div>
                                }
                            })
                        }

                        {(hashValue == 6 && !calendar) &&
                            <div>
                                <div className="button">
                                    <button className='continue_btn' onClick={() => { navigate(`#1`) }}>Add Another Tv</button>
                                </div>
                                <div className="button">
                                    <button className='continue_btn' onClick={() => {
                                        setcalendar(true);
                                        setCart(selected);
                                        setQuiz("TvMounting")
                                    }}>
                                        Schedule Your Service
                                    </button>
                                </div>
                            </div>
                        }

                        {
                            calendar &&
                            <Calendar daysCol="col-lg-2 mb-4 days_col" timeCol="col-lg-3 time_col" />
                        }

                    </div>
                    <div className="col-md-4">

                        <div className='tv-mountaing-table'>
                            <div className="table-responsive">
                                <table className='w-100'>
                                    <h2>Tv Mounting</h2>

                                    {
                                        selected.map(ele => {
                                            return <>
                                                <tbody>
                                                    {
                                                        ele.map(element => {
                                                            return <tr className='tbody'>
                                                                <td>{element.q}</td>
                                                                <td className='text-end'>${element.price}</td>
                                                            </tr>
                                                        })
                                                    }
                                                </tbody>
                                            </>
                                        })
                                    }

                                    <tr className='tfoot'>
                                        <td>Estimated</td>
                                        <td>${price}</td>
                                    </tr>

                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    </>
}

export default TvMounting