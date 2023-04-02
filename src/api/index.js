import axios from "axios";
import { BASEAPIURL } from "../constants";

export const API = axios.create({
  baseURL: `${BASEAPIURL}`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchEventData = () => API.get(`eventdata?page=${id}`);