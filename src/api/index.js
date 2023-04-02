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
export const fetchAllEventData = () => API.get(`alleventdata`);
export const fetchHomePageData = () => API.get(`homepagedata`);
export const fetchContactPageData = () => API.get(`contactinfo`);
export const fetchClubData = () => API.get(`clubinfo?page=${id}`);
export const fetchAllClubsData = () => API.get(`clubsdata`);
