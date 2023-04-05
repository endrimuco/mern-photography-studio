import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import NavigateBar from "./Components/TopNavBar/NavigateBar"
import Footer from './Components/Footer';
import AdminDashboard from './Components/adminDashboard/Dashboard.jsx';
import Login from './Components/Login.jsx';
import UpdatePhoto from './Components/adminDashboard/updatePhoto';


function App() {

  // const [isAdminLoggedIn] = useState(localStorage.getItem("loggedIn"));

  return (
    <>
      <header>
        <NavigateBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/loginasadmin" element={<Login />} />
          <Route path="/update/:id" element={<UpdatePhoto />} />
          {/* {isAdminLoggedIn && (
            <Route path="/loginasadmin/myadmin" element={<AdminDashboard />} />

          )} */}
          <Route path="/loginasadmin/myadmin" element={<AdminDashboard />} />
        </Routes>
      </header>

      <footer>
        <Footer />
      </footer>

    </>
  );
}

export default App;
