import React from "react";
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
// import Computer from './pages/Computer';
// import Mechanical from './pages/Mechanical';
import Aids from './pages/Aids';  // Aids page with chatbot
// import IT from './pages/It';  // IT page with chatbot
import Entc from './pages/Entc';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import ApplyNowButton from './components/ApplyNowButton';

function App() {
  return (
    <Router>
      <div className="relative">
        <Navbar />
        <Routes>
          {/* <Route path="/comp" element={<PageWithDynamicTitle title="Comp" />} /> */}
          {/* <Route path="/mech" element={<PageWithDynamicTitle title="Mech" />} /> */}
          <Route path="/aids" element={<PageWithDynamicTitle title="AIDS" />} />
          {/* <Route path="/it" element={<PageWithDynamicTitle title="IT" />} /> */}
          <Route path="/entc" element={<PageWithDynamicTitle title="ENTC" />} />
        </Routes>
        <Footer />
        <ApplyNowButton />
      </div>
    </Router>
  );
}

// Component to handle dynamic title
function PageWithDynamicTitle({ title }) {
  const dynamicTitle = `ICEM | ${title}`;

  return (
    <>
      <Helmet>
        <title>{dynamicTitle}</title>
      </Helmet>

      {/* Render the component based on the route */}
      {/* {title === "Comp" && <Computer />} */}
      {/* {title === "Mech" && <Mechanical />} */}
      {title === "AIDS" && <Aids />} {/* Aids page with chatbot */}
      {/* {title === "IT" && <IT />} IT page with chatbot */}
      {title === "ENTC" && <Entc />}
    </>
  );
}

export default App;
