import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero } from "./components/HeroContainer";
import { Schedule } from "./components/ScheduleContainer";
import { Sponsors } from "./components/SponsorsContainer";
import { FAQContact } from "./components/FAQContainer";
import { Footer } from "./components/FooterContainer";
import { NavBar } from "./components/NavBar";
import { Timer } from "./components/Timer";
import { Contact } from "./components/ContactContainer";
import { Desciption } from "./components/Description";
import RegistrationContainer from "./components/RegistrationContainer"; // Added for the registration route

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Hero />
              <Timer />
              <Desciption />
              <Schedule />
              <Sponsors />
              <FAQContact />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route path="/register" element={<RegistrationContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
