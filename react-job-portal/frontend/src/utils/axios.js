// src/utils/axios.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://portalforjob.onrender.com/api/v1",
  withCredentials: true,
});

export default API;
