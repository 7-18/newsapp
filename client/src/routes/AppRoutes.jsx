import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { NavBar } from "../components/Navbar/NavBar";
import { Home } from "../containers/Home";
import { CountryNews } from "../pages/CountryNews/CountryNews";

export function AppRoutes () {
    return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news/:code" element={<CountryNews />} />
        </Routes>
        <Footer />
      </Router>
    );
  }
