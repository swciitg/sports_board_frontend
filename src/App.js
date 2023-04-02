import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BASEURL } from "./constants";
import HomeScreen from "./screens/HomeScreen";
import ClubsScreen from "./screens/ClubsScreen";
import EventsScreen from "./screens/EventsScreen";
import ClubScreen from "./screens/ClubScreen";
import EventScreen from "./screens/EventScreen";
import ContactScreen from "./screens/ContactScreen";

function App() {
  return (
    <BrowserRouter basename={BASEURL}>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/clubs' element={< ClubsScreen/>} />
        <Route path='/events'element={<EventsScreen />} />
        <Route path='/contacts'element={<ContactScreen />} />
        <Route path={"/clubs/:id"} element={<ClubScreen  />} />
        <Route path={"/events/:id"} element={<EventScreen  />} />
      </BrowserRouter>
  );
}

export default App;
