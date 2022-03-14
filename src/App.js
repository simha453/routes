import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import Dashborad from "./pages/Dashborad";
import Header from "./pages/Header";
import Reacttopics from "./pages/Reacttopics";
import Topicdata from "./pages/Topicdata";
import Notfound from "./pages/Notfound";
import Home from "./pages/Home";
import Sidebar from "./pages/Sidebar";
import Myprojects from "./pages/Myprojects";
import Topics from "./pages/Topics";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/reactdashboard" element={<Dashborad />}></Route>
        {/* url params*/}
        <Route path="about/:topic" element={<Aboutus />}></Route>
        <Route path="contact-us" element={<Contactus />}></Route>
        {/* nested routes */}
        <Route path="react-topics" element={<Reacttopics />}>
          <Route path=":tname" element={<Topicdata />} />
        </Route>
        {/* not Found Route*/}
        <Route path="*" element={<Notfound />}></Route>

        <Route path="sidebar" element={<Sidebar />}>
          <Route index element={<Myprojects />}></Route>
          <Route path="myprojects" element={<Myprojects />}></Route>
          <Route path="topics" element={<Topics />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
