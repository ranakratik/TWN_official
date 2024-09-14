import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Counter from './components/Counter';
import Clients from './components/Clients';
import Founders from './components/Founders';
import Logoclient from './components/Logoclient';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CampusAmbassador from './components/CampusAmbassador';  // New Page

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Founders />
            <Services />
            <Counter />
            <Logoclient />
            <Clients />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/campus-ambassador" element={<CampusAmbassador />} />  {/* New Route */}
      </Routes>
    </Router>
  );
};

export default App;
