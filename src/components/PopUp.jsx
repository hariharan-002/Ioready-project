import React from 'react';
import status from './Assets/image copy 6.png'

const Popup = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="popup-overlay">
      <div className="popup-content">

        <div className="popup-header"><h2>Trip Summary</h2> <button className="close-btn" onClick={onClose}   >&times;</button> </div>

        <div className="rout-details"><h2>Indor &#8594; NewDelhi</h2>  <p>Duration<br /> 1hr 25min</p>  <button>Book Now</button></div>

        <div className="ticket-details">
          <div className="first">
            <h3> 20:10 <br /><span style={{ fontWeight: '200', fontSize: 'small' }}>Wed 18 Sep</span>
              <br /><br />
              <span style={{ fontWeight: '200', fontSize: 'small' }}>1h 25m</span>
              <br /><br /><br /><br /><br /><br /><br /><br />
              <span >1h 25m</span> <br />
              <span style={{ fontWeight: '200', fontSize: 'small' }}>Wed 18 Sep</span>
            </h3>
            <img src={status} height={350} width={25} style={{ marginTop: '20px' }} />
            <h3>Indore ∙ IDR  <br />
              <span style={{ fontWeight: '200', fontSize: 'small' }}>Devi Ahilya Bai Holkar</span>
              <br /><br />
              <span style={{ fontWeight: '200', fontSize: 'small' }}>Air Vistara</span>
              <br /><br />
              <span style={{ fontWeight: '400', fontSize: 'small' }}>Connection info<br /> Airline <br />Operating airline: <br /> Flight no</span>
              <br /><br /><br />
              <span >New Delhi ∙ DEL</span><br />
              <span style={{ fontWeight: '200', fontSize: 'small' }}>Indira Gandhi International</span><br/>
              <span style={{ fontWeight: '200', fontSize: 'small',color:'skyblue' }}>  4h 55m layover</span><br/><br/>
              <span style={{ fontWeight: '200', fontSize: 'small',color:'skyblue' }}> You have a Self-tranfer in santo Domingo. Please review the Travel</span>

            </h3></div>
        </div>
        <p style={{color:'gray'}}>----------------------------------10 nights in New Delhi--------------------------------------</p>
        <div className="rout-details"><h2>  NewDelhi&#8594; Indor </h2>  </div>

        <div className="ticket-details">
          <div className="first">
            <h3> 20:10 <br /><span style={{ fontWeight: '200', fontSize: 'small' }}>Wed 18 Sep</span>
              <br /><br />
              <span style={{ fontWeight: '200', fontSize: 'small' }}>1h 25m</span>
              <br /><br /><br /><br /><br /><br /><br /><br />
              <span >1h 25m</span> <br />
              <span style={{ fontWeight: '200', fontSize: 'small' }}>Wed 18 Sep</span>
            </h3>
            <img src={status} height={280} width={30} style={{ marginTop: '20px' }} />
            <h3>Indore ∙ IDR  <br />
              <span style={{ fontWeight: '200', fontSize: 'small' }}>Devi Ahilya Bai Holkar</span>
              <br /><br />
              <span style={{ fontWeight: '200', fontSize: 'small' }}>Air Vistara</span>
              <br /><br />
              <span style={{ fontWeight: '400', fontSize: 'small' }}>Connection info<br /> Airline <br />Operating airline: <br /> Flight no</span>
              <br /><br /><br />
              <span >New Delhi ∙ DEL</span><br />
              <span style={{ fontWeight: '200', fontSize: 'small' }}>Devi Ahilya Bai Holkar</span>

            </h3></div>
        </div>
      </div>
    </div>
  );
};

export default Popup;


