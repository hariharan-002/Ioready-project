import React from 'react'

const TripTypes = () => (

    <div className="trip-radio">
        <div>
            <input type="radio" name="tripType" value="oneWay" />
            <label>One Way Trip</label>
        </div>
        <div>
            <input type="radio" name="tripType" value="roundTrip" />
            <label>Round Trip</label>
        </div>
        <div>
            <input type="radio" name="tripType" value="multiWay" />
            <label>Multi Way</label>
        </div>
    </div>
)

export default TripTypes