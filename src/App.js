import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import TripDetails from './components/TripDetails';
import Filters from './components/Filters';
import PopUp from './components/PopUp';
import TripTypes from './components/TripTypes';
import Footer from './components/Footer';


const App = () => (
  <div className="App">
    <NavBar />
    <TripTypes/>
    <TripDetails />
    <Filters />
    <PopUp />
    <Footer/>

  </div>
);

export default App;
