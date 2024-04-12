import axios from "axios";


const token = localStorage.getItem("token");

const Axios = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    "x-access-token": token,
  },
});

export default Axios;