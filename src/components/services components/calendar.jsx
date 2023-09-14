import React from 'react'
import { useEffect, useMemo, useRef, useState } from 'react';
import usePersistedState from 'use-persisted-state-hook'



const Calendar = () => {
    const [num, setNum] = usePersistedState('num', 0)
    const timeSlots = ['11am - 1pm', '12pm - 2pm', '1pm - 3pm', '2pm - 4pm', '3pm - 5pm', '4pm - 6pm', '5pm - 7pm', '6pm - 8pm']
    const daysName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const [SelectedTimeSlot, setSelectedTimeSlot] = useState('11am - 1pm')

    let ___date = new Date()
    let day = ___date.getDate()
    let month = ___date.getMonth() + 1
    let year = ___date.getFullYear()
    let formatedDate = `${year}-${month}-${day}`

    const obj123 = {
        date: formatedDate,
        slots: [
            {
                time: "11am - 1pm",
                bookes: false
            },
            {
                time: "12pm - 2pm",
                bookes: false
            },
            {
                time: "1pm - 3pm",
                bookes: false
            },
            {
                time: "2pm - 4pm",
                bookes: false
            },
            {
                time: "3pm - 5pm",
                bookes: false
            },
            {
                time: "4pm - 6pm",
                bookes: false
            },
            {
                time: "5pm - 7pm",
                bookes: false
            },
            {
                time: "6pm - 8pm",
                bookes: false
            },
        ]
    }

    const [SelectedDate, setSelectedDate] = useState(obj123)
    // const [SelectedDate, setSelectedDate] = useState(null)
    const [data, setData] = useState([])
    const [customerData2, setcustomerData2] = useState([])

    // const [Dates, setDates] = useState([])

    const nextTenDays = () => {
        const _date = new Date();
        let calendar = []
        for (let index = 0; index <= 10; index++) {
            let day = _date.getDate()
            let month = _date.getMonth() + 1
            let year = _date.getFullYear()
            let formatedDate = `${year}-${month}-${day}`
            calendar.push({
                date: formatedDate,
                slots: [
                    {
                        time: "11am - 1pm",
                        bookes: false
                    },
                    {
                        time: "12pm - 2pm",
                        bookes: false
                    },
                    {
                        time: "1pm - 3pm",
                        bookes: false
                    },
                    {
                        time: "2pm - 4pm",
                        bookes: false
                    },
                    {
                        time: "3pm - 5pm",
                        bookes: false
                    },
                    {
                        time: "4pm - 6pm",
                        bookes: false
                    },
                    {
                        time: "5pm - 7pm",
                        bookes: false
                    },
                    {
                        time: "6pm - 8pm",
                        bookes: false
                    },
                ]
            })
            _date.setDate(day + 1);
            let customerData = getCustomerData();
            if (customerData == null) {
                customerData = calendar
                setData(calendar);
            } else return
        }
    }

    function showDate(__data) {
        const d = new Date(__data)
        return d.getDate()
    }

    const getCustomerData = () => {
        return JSON.parse(localStorage.getItem('Calendar'));
    }

    const submitData = (e) => {

        e.preventDefault()

        let customerData = getCustomerData()

        if (customerData == null) customerData = [];

        let found = data.find(e => SelectedDate.date == e.date)
        let index = 0;

        (found.slots).forEach((e, i) => {
            if ((SelectedTimeSlot.time) == (e.time)) {
                index = i
            }
        });

        found.slots[index].bookes = true

        console.log(found);

        data.forEach(e => {
            if (e.date == found.date) {
                e.slots[index].bookes = true
            }
        });

        console.log(data);

        localStorage.setItem('Calendar', JSON.stringify(data))
    }

    useEffect(() => {
        let customerData = getCustomerData();
        if (customerData == null) {
            customerData = []
            nextTenDays();
        } else {
            setData(customerData);
        }
        return () => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
    }, [])

    return <>
        <form onSubmit={(e) => submitData(e)}>
            <section className='calendar my-5'>
                <div className="container">
                    <h4 className='heading text-center mb-5'>Select an arrival time and date that suits you</h4>
                    <div className="days">
                        <div className="row d-flex jc-center mb-5">
                            {
                                (data).map((thisDate) => {
                                    return <div key={thisDate.date} className="col-1">
                                        <button type='button' className={`btn ${SelectedDate == thisDate ? 'active' : 'date_btn'}`} onClick={() => { setSelectedDate(thisDate) }}>
                                            {/* <small>Thu</small> */}
                                            <p className='mb-0'>{thisDate.date == undefined ? '' : showDate(thisDate.date)}</p>
                                        </button>
                                    </div>
                                })
                            }

                        </div>
                    </div>

                    <div className="time">
                        <div className="row d-flex jc-center mb-4">
                            {
                                SelectedDate &&
                                (SelectedDate.slots).map((e, i) => {
                                    return <div key={e.time} className="col-1 me-5">
                                        <button type='button' disabled={e.bookes} onClick={() => setSelectedTimeSlot(e)} className={`btn ${SelectedTimeSlot == e ? 'active' : 'time_btn'}`}>{e.time}</button>
                                    </div>
                                })
                            }
                        </div>
                    </div>

                    <div className="button d-flex jc-center">
                        <button className='btn continue_btn'>Schedule It</button>
                    </div>
                </div>
            </section>
        </form>
    </>
}




export default Calendar