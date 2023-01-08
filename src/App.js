
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import Rooms from './containers/Rooms/Rooms';
import Events from './containers/Events/Events';
import Register from './containers/Register/Register';
import ReservationsEvents from './containers/User/ReservationsEvents/ReservationsEvents';
import ReservationsRooms from './containers/User/ReservationsRooms/ReservationsRooms';
import About from './containers/About/About';
import Login from './containers/Login/Login';
import Profile from './containers/User/Profile/Profile';
import Admin from './containers/Admin/Admin';
import Footer from './components/Footer/Footer';



function App() {
  return (
    
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/rooms' element={<Rooms/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/reservationsrooms' element={<ReservationsRooms/>} />
        <Route path='/reservationsevents' element={<ReservationsEvents/>} />
      </Routes>
     <Footer/> 
    </BrowserRouter>

  );
}

export default App;
