import axios from "axios";
const route = "http://localhost:8000";

export const getRooms = async () => {
  return await axios.get(`${route}/api/rooms`);
};

// export const profileUser = async ( token) => {
//   var config = {
//     headers: { 
//       'Authorization': 'Bearer '+ token,  
//     }
//   };
//   return await axios.get(`${route}/api/rooms`, config);
// };




