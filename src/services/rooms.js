import axios from "axios";
const route = "http://localhost:8000";

export const getRooms = async () => {
  return await axios.get(`${route}/api/rooms`);
};

export const myReservations = async (token) => {
  var config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };
  return await axios.get(`${route}/api/reservations`, config);
};

export const reservationRoom = async (token, idRoom, body) => {
  var config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };
  return await axios.post(`${route}/api/room/${idRoom}`, body, config);
};





