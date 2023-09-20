import React from 'react'
import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import usePersistedState from 'use-persisted-state-hook'




const Calendar = ({ daysCol, timeCol }) => {
    let navigate = useNavigate()
    const url = useLocation().pathname;

    // const [num, setNum] = usePersistedState('num', 0)
    // const timeSlots = ['11am - 1pm', '12pm - 2pm', '1pm - 3pm', '2pm - 4pm', '3pm - 5pm', '4pm - 6pm', '5pm - 7pm', '6pm - 8pm']
    // const daysName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    // const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [ActiveDate, setActiveDate] = useState(null)
    const [data, setData] = useState([])
    // const [customerData2, setcustomerData2] = useState([])


    let ___date = new Date()
    let day = ___date.getDate()
    let month = ___date.getMonth() + 1
    let year = ___date.getFullYear()
    let formatedDate = `${year}-${month}-${day}`



    const [SelectedDate, setSelectedDate] = useState({ date: '', slots: [] })
    const [SelectedTimeSlot, setSelectedTimeSlot] = useState({
        time: "",
        bookes: ""
    })

    // console.log(SelectedDate,"==Date");
    // console.log(SelectedTimeSlot,"===TimeSlot");

    const [cart, setCart] = usePersistedState('thisCart', {})
    // console.log("cart", cart);

    // console.log(SelectedDate);

    const getCustomerData = () => {
        return JSON.parse(localStorage.getItem('Calendar'));
    }


    // const [Dates, setDates] = useState([])

    const nextTenDays = () => {
        const _date = new Date();
        let calendar = []
        for (let index = 0; index <= 9; index++) {
            let day = _date.getDate()
            let month = _date.getMonth() + 1
            let year = _date.getFullYear()
            let formatedDate = `${year}-${month}-${day}`
            calendar.push({
                date: formatedDate,
                slots: [
                    {
                        time: "8am - 10am",
                        bookes: false
                    },
                    {
                        time: "9am - 11am",
                        bookes: false
                    },
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

    const submitData = (e) => {
        e.preventDefault()

        if ((SelectedTimeSlot.time).length < 1) {
            alert('Select A Time Slot')
        } else {

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

            setCart({ ...cart, date: SelectedDate.date, Time_Slot: SelectedTimeSlot.time })
            // setCart({ ...cart,  })

            setTimeout(() => {
                alert('submitted');
                navigate('/cart')
            }, 1000);

        }

    }

    useEffect(() => {
        let customerData = getCustomerData();
        if (customerData == null) {
            customerData = []
            nextTenDays();
        } else {
            setData(customerData);
            setSelectedDate({ date: customerData[0].date, slots: customerData[0].slots })
        }


        return () => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }

    }, [])

    // console.log(data);   

    return <>
        <form onSubmit={(e) => submitData(e)}>
            <section className='calendar my-5'>
                <div className="container">
                    <h4 className='heading text-center mb-5'>Select an arrival time and date that suits you</h4>
                    <div className="days">
                        <div className="row d-flex jc-center text-center mb-5 days_row">
                            {
                                (data).map((thisDate) => {
                                    return <div key={thisDate.date} className={`col-lg-1 col-md-2 col-sm-2 col-3 days_col ${daysCol}`}>
                                        <button type='button' className={`btn ${SelectedDate.date == thisDate.date ? 'active' : 'date_btn'}`}
                                            onClick={() => {
                                                setSelectedDate(thisDate);
                                                setSelectedTimeSlot({
                                                    time: "",
                                                    bookes: ""
                                                })
                                            }}>
                                            {/* <small>Thu</small> */}
                                            <p className='mb-0'>{thisDate.date == undefined ? '' : showDate(thisDate.date)}</p>
                                        </button>
                                    </div>
                                })
                            }

                        </div>
                    </div>

                    <div className="time">
                        <div className="row d-flex jc-center text-center mb-4 time_row">
                            {
                                SelectedDate &&
                                (SelectedDate.slots).map((e) => {
                                    return <div key={e.time} className={`col-lg-2 col-md-2 col-sm-2 col-4 me-4 mb-4 time_col ${timeCol}`}>
                                        <button type='button' disabled={e.bookes} onClick={() => { setSelectedTimeSlot(e) }} className={`btn ${SelectedTimeSlot.time == e.time ? 'active' : 'time_btn'}`}>{e.time}</button>
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