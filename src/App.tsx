import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SigninPage from "./pages/Auth/Signin";
import SignupPage from "./pages/Auth/Signup";
import ForgotPassword from "./pages/Auth/FrogotPassword";
import Home from "./pages/Role/PorR";
import PublisherDashboard from "./pages/Publisher/dashboard";
import ReaderDashboard from "./pages/Reader/dashboard";
import Library from "./pages/Reader/Library/dashboard";
import Explore from "./pages/Reader/Explore/dashboard";
import AboutUs from "./pages/aboutus/dashboard";
import PersonCard from "./components/other/PersonCard";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/publisher/dashboard" element={<PublisherDashboard />} />
        <Route path="/reader/dashboard" element={<ReaderDashboard />} />
        <Route path="/library/dashboard" element={<Library />} />
        <Route path="/explore/dashboard" element={<Explore />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/other/PersonCard" element={<PersonCard name={""} role={""} description={""} imageSrc={""} socialMediaLinks={[]} />} />
      </Routes>
    </Router>
  );
};

export default App;
