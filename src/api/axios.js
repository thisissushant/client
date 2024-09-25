// src/api/axios.js
import axios from "axios";

const instance = axios.create({
  API_URL: "https://server-sy8t.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
