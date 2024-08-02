import React, { useState } from 'react'
import image1 from './Assets/image copy 1.png';
import image2 from './Assets/image copy 2.png';
import image3 from './Assets/image copy 3.png';
import image4 from './Assets/image copy 4.png';
import image5 from './Assets/image copy.png'
import dot from './Assets/image copy 5.png'
import bag1 from './Assets/image copy 8.png'
import bag2 from './Assets/image copy 9.png'
import PopUp from './PopUp';

const Home = () => {
    const [open, setOpen] = useState(false)
    const handleClick = (e) => {
        console.log(open)
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <>
            <div className="home">
                <div className="date">
                    <div className="date-carousel"> <p>12'JUL'24</p><p>$4000</p></div><div className="vl"></div>
                    <div className="date-carousel-2"> <p>12'JUL'24</p><p>$4000</p></div><div className="vl"></div>
                    <div className="date-carousel"> <p>12'JUL'24</p><p>$4000</p></div><div className="vl"></div>
                    <div className="date-carousel"> <p>12'JUL'24</p><p>$4000</p></div><div className="vl"></div>
                    <div className="date-carousel"> <p>12'JUL'24</p><p>$4000</p></div><div className="vl"></div>
                    <div className="date-carousel"> <p>12'JUL'24</p><p>$4000</p></div><div className="vl"></div>
                    <div className="date-carousel"> <p>12'JUL'24</p><p>$4000</p></div><div className="vl"></div>
                    <div className="date-carousel"> <p>12'JUL'24</p><p>$4000</p></div><div className="vl"></div>
                    <div className="date-carousel"> <p>12'JUL'24</p><p>$4000</p></div><div className="vl"></div>
                    


                </div>
                <div className="specifications">
                    <button> <h4>Recomended <br /><span style={{ fontWeight: '400' }}>$500-10hr 20min </span> </h4> </button>
                    <button><h4>CHEAPEST<br /><span style={{ fontWeight: '400' }}>$500-10hr 20min </span> </h4> </button>
                    <button><h4>FASTEST <br /><span style={{ fontWeight: '400' }}>$500-10hr 20min </span> </h4>  </button>
                    <button><h4>Price Calender <br /><span style={{ fontWeight: '400' }}>$500-10hr 20min </span> </h4>  </button>

                </div>

                <div className="booking-details">
                    <div className="head"><h3> <img src={image1}></img> ABC Airline</h3>   <h2>travel class: Economy</h2></div>

                    <div className="body">
                        <div className="left">
                            <div className="start">
                                <div className="date1"><h3>sun,29 jan 2023</h3></div>
                                <div className="time"><p>14.50</p></div>
                                <div className="location"> <p>Moi Intl, Mombasa ,Kenya</p></div>
                            </div>
                            <div className="center">
                                <img src={dot} height={10} width={10} /> <p>-----------9hr 50min--------</p><img src={image5} height={30} width={30} />
                            </div>
                            <div className="end">

                                <div className="time"><p>14.50</p></div>
                                <div className="location"> <p>JFK Terminal, Nairobi,Kenya</p></div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="price">
                                <h1>$18,500</h1>
                                <p>%500 OFF </p>
                            </div>
                            <div className="booking">
                                <button onClick={(e) => handleClick(e)}>Book now</button>
                            </div>
                        </div>
                    </div>
                    <div className="middle">
                        <p>100 seats remaining</p>
                        <p>Partially Refundable</p>
                        <p>View Flight Details</p>
                    </div>
                    <p style={{color:'gray'}}>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                    <div className="footer">
                        <p>Separate tickets booked together for cheaper price</p>
                        <p>Change of Terminal</p>
                        <p>Self Transfer</p>
                        <p>7 kg</p>
                        <p> <img src={bag1} height={10} width={10} />0</p>
                        <p> <img src={bag2} height={10} width={10} />1</p>
                        <button>Cheapest</button>
                    </div>

                </div>


                <div className="booking-details">
                    <div className="head"><h3> <img src={image2}></img> Emirates Airlines</h3>   <h2>travel class: Economy</h2></div>

                    <div className="body">
                        <div className="left">
                            <div className="start">
                                <div className="date1"><h3>sun,29 jan 2023</h3></div>
                                <div className="time"><p>14.50</p></div>
                                <div className="location"> <p>Moi Intl, Mombasa ,Kenya</p></div>
                            </div>
                            <div className="center">
                                <img src={dot} height={10} width={10} /> <p>--------9hr 50min--------</p><img src={image5} height={30} width={30} />
                            </div>
                            <div className="end">

                                <div className="time"><p>14.50</p></div>
                                <div className="location"> <p>JFK Terminal, Nairobi,Kenya</p></div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="price">
                                <h1>$18,500</h1>
                                <p>%500 OFF </p>
                            </div>
                            <div className="booking">
                                <button onClick={(e) => handleClick(e)}>Book now</button>
                            </div>
                        </div>
                    </div>
                    <div className="middle">
                        <p>100 seats remaining</p>
                        <p>Partially Refundable</p>
                        <p>View Flight Details</p>
                    </div>
                    <p style={{color:'gray'}}>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                    <div className="footer">
                        <p>Separate tickets booked together for cheaper price</p>
                        <p>Change of Terminal</p>
                        <p>Self Transfer</p>
                        <p>7 kg</p>
                        <p> <img src={bag1} height={10} width={10} />0</p>
                        <p> <img src={bag2} height={10} width={10} />1</p>
                        <button>Cheapest</button>
                    </div>

                </div>


                <div className="booking-details">
                    <div className="head"><h3> <img src={image3}></img> Qatar Airlines</h3>   <h2>travel class: Economy</h2></div>

                    <div className="body">
                        <div className="left">
                            <div className="start">
                                <div className="date1"><h3>sun,29 jan 2023</h3></div>
                                <div className="time"><p>14.50</p></div>
                                <div className="location"> <p>Moi Intl, Mombasa ,Kenya</p></div>
                            </div>
                            <div className="center">
                                <img src={dot} height={10} width={10} /> <p>--------9hr 50min--------</p><img src={image5} height={30} width={30} />
                            </div>
                            <div className="end">

                                <div className="time"><p>14.50</p></div>
                                <div className="location"> <p>JFK Terminal, Nairobi,Kenya</p></div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="price">
                                <h1>$18,500</h1>
                                <p>%500 OFF </p>
                            </div>
                            <div className="booking">
                                <button onClick={(e) => handleClick(e)}>Book now</button>
                            </div>
                        </div>
                    </div>
                    <div className="middle">
                        <p>100 seats remaining</p>
                        <p>Partially Refundable</p>
                        <p>View Flight Details</p>
                    </div>
                    <p style={{color:'gray'}}>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                    <div className="footer">
                        <p>Separate tickets booked together for cheaper price</p>
                        <p>Change of Terminal</p>
                        <p>Self Transfer</p>
                        <p>7 kg</p>
                        <p> <img src={bag1} height={10} width={10} />0</p>
                        <p> <img src={bag2} height={10} width={10} />1</p>
                        <button>Cheapest</button>
                    </div>

                </div>


                <div className="booking-details">
                    <div className="head"><h3> <img src={image4}></img> Etihad Airlines</h3>   <h2>travel class: Economy</h2></div>

                    <div className="body">
                        <div className="left">
                            <div className="start">
                                <div className="date1"><h3>sun,29 jan 2023</h3></div>
                                <div className="time"><p>14.50</p></div>
                                <div className="location"> <p>Moi Intl, Mombasa ,Kenya</p></div>
                            </div>
                            <div className="center">
                                <img src={dot} height={10} width={10} /> <p>-------------9hr 50min--------</p><img src={image5} height={30} width={30} />
                            </div>
                            <div className="end">

                                <div className="time"><p>14.50</p></div>
                                <div className="location"> <p>JFK Terminal, Nairobi,Kenya</p></div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="price">
                                <h1>$18,500</h1>
                                <p>%500 OFF </p>
                            </div>
                            <div className="booking">
                                <button onClick={(e) => handleClick(e)}>Book now</button>
                            </div>
                        </div>
                    </div>
                    <div className="middle">
                        <p>100 seats remaining</p>
                        <p>Partially Refundable</p>
                        <p>View Flight Details</p>
                    </div>
                    <p style={{color:'gray'}}>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                    <div className="footer">
                        <p>Separate tickets booked together for cheaper price</p>
                        <p>Change of Terminal</p>
                        <p>Self Transfer</p>
                        <p>7 kg</p>
                        <p> <img src={bag1} height={10} width={10} />0</p>
                        <p> <img src={bag2} height={10} width={10} />1</p>
                        <button>Cheapest</button>
                    </div>

                </div>
            </div>
            <PopUp show={open} onClose={handleClose} />
        </>
    )
}

export default Home