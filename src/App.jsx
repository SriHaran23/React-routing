import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Contacts from "./components/Contacts";
import Productitem from "./components/Productitem";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
     
        <div>
          <Navbar></Navbar>
        </div>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/item/:id" element={<Productitem />} />
        </Routes>
    
    </Router>
  );
}


export default App