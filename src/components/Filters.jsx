import React from 'react';
import image1 from './Assets/image copy 1.png';
import image2 from './Assets/image copy 2.png';
import image3 from './Assets/image copy 3.png';
import image4 from './Assets/image copy 4.png';
import bag1 from './Assets/image copy 8.png'
import bag2 from './Assets/image copy 9.png'
import RangeSlider from './RangeSlider';
import PriceRangeSlider from './PriceRange';
import Home from './Home';



const Filters = () => {
  return (
    <div className="home-container">
    <aside className="filters-aside">
      <div className="filters">
        <h3>Filters</h3>
        <p>Showing 86 flights</p>
        <hr />
        <div className="airline">
          <h3>Preferred Airlines</h3>
          <button>View All</button>
        </div>
      </div>
      <div className='flight-container'>
        <div className="airlines">
          <input type="checkbox" />
          <p>ABC Air Technologies</p>
          
          <p>$203</p>
          <img src={image1} height={30} width={30} alt="ABC Air Technologies" />
        </div>
        <div className="airlines">
          <input type="checkbox" />
          <p>Emirates Airlines</p>
         
          <p>$520</p>
          <img src={image2} height={30} width={30} alt="Emirates Airlines" />
        </div>
        <div className="airlines">
          <input type="checkbox" />
          <p>Qatar Airlines</p>
         
          <p>$520</p>
          <img src={image3} height={30} width={30} alt="Qatar Airlines" />
        </div>
        <div className="airlines">
          <input type="checkbox" />
          <p>Etihad Airlines</p>
          
          <p>$230</p>
          <img src={image4} height={30} width={35} alt="Etihad Airlines" />
        </div>
      </div>
      <hr />
      <div className="div-stop">
        <h3>Stops</h3>
        <div className="div-stop-category">
          <button>Non Stop</button>
          <button>1 Stop</button>
          <button>2+ Stops</button>
        </div>
      </div>
      <div className="price-range">
        <h3>Price</h3>
        <RangeSlider />
        
      </div>
      <div className="onward-duration">
        <h3>Onward Duration</h3>
        <RangeSlider />
      </div>
      <div className="departure">
        <h3>Departure</h3>
        <div className="day-night">
          <button>12pm-6pm</button>
          <button>After 6pm</button>
        </div>
        <h3>Arrival</h3>
        <div className="arrival">
          <button>12pm-6pm</button>
          <button>After 6pm</button>
          <button>12pm-6pm</button>
          <button>After 6pm</button>
        </div>
      </div>



      <div className="bag-container">
        <h3>Bags </h3>
        <div className='baggage'>  <p> <img src={bag1} height={20} width={20}/>    cabin baggage</p>    <div className='baggage-button'>  <button>-</button><button style={{background:'white', color:'black', border:'transprent'}}>1</button> <button>+</button></div></div>
        <div className='baggage'>  <p> <img src={bag2} height={20} width={20}/>   checked  baggage</p>  <div className='baggage-button'>  <button>-</button> <button style={{background:'white', color:'black', border:'transprent'}}>   0</button><button>+</button></div></div>
      </div>



      <p style={{color:'gray'}}>---------------------------------------------</p>


    <div className="connections">
      <div className="connection-content">  <input type="checkbox"/><p>Self-transfer to different station/airport</p></div>
      <div className="connection-content"> <input type="checkbox"/><p>Allow return from a different station/airport</p></div>
      <div className="connection-content"> <input type="checkbox"/><p>Allow return to a different station/airport</p></div>
    </div>
    <p style={{color:'gray'}}>---------------------------------------------</p>
    <div className="duration">
      <div className="duration-1">
        <h3>Duration    </h3>
    <RangeSlider  />
    </div>
    <div className="duration-2">
    <h3>Stop over </h3>
    <RangeSlider />
    </div>
    </div>
    <p style={{color:'gray'}}>---------------------------------------------</p>
    <div className="for-days">
        <h3>Days </h3>
        <div className="for"> <button  color='blue'>departure</button>    <button>return</button></div>
        <div className="days">
            <button style={{borderRadius:'50%',background:'sky blue'}}>M</button>
            <button style={{borderRadius:'50%',background:'sky blue'}}>T</button>
            <button style={{borderRadius:'50%',background:'sky blue'}}>W</button>
            <button style={{borderRadius:'50%',background:'sky blue'}}>T</button>
            <button style={{borderRadius:'50%',background:'sky blue'}}>F</button>
            <button style={{borderRadius:'50%',background:'sky blue'}}>S</button>
            <button style={{borderRadius:'50%',background:'sky blue'}}>S</button>
        </div>
    </div>
    <p style={{color:'gray'}}>---------------------------------------------</p>
    <h3>Exclude countries</h3>
    

    </aside>

    <div className="main-container">
        <Home/>
    </div>
    </div>
   
  );
};

export default Filters;
