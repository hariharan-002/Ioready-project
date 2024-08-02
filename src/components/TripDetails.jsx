import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const TripDetails = () => {
    return (
        <div className="flight-search">
            <div className="input-group">
                <label htmlFor="from">From</label>
                <input type="text" id="from" placeholder="DEL" />
            </div>
            <div className="input-group">
                <label htmlFor="to">To</label>
                <input type="text" id="to" placeholder="DEL" />
            </div>
            <div className="input-group">
                <label htmlFor="departure-date">Departure Date</label>
                <input type="text" id="departure-date" placeholder="12 JUL '24" />
            </div>
            <div className="input-group">
                <label htmlFor="return-date">Return Date</label>
                <input type="text" id="return-date" placeholder="12 JUL '24" />
            </div>
            <div className="input-group">
                <label htmlFor="class">Class</label>
                <select id="class">
                    <option>Business Class</option>
                    <option>Economy Class</option>
                    <option>First Class</option>
                </select>
            </div>
            <div className="input-group">
                <label htmlFor="passenger">Passenger</label>
                <input type="text" id="passenger" placeholder="1 Adult, 0 Children" />
            </div>
            <button className="find-flight">
                <FontAwesomeIcon icon="fa-solid fa-plane-departure" style={{ color: "#ffffff" }} />
                Find flight
            </button>
        </div>
    );
}

export default TripDetails;
