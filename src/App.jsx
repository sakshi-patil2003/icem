import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // No need for useLocation anymore
import { Helmet } from 'react-helmet'; // Import Helmet
import Computer from './pages/Computer'; // Import your Computer component
import Mechanical from './pages/Mechanical'; // Import your Mechanical component
import Aids from './pages/Aids'; // Import your Aids component
import IT from './pages/It'; // Import the new IT component
import Entc from './pages/Entc'; // Import your ENTC component (newly added)
import Navbar from './pages/Navbar'; // Import your Navbar component
import Footer from './pages/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/comp" element={<PageWithDynamicTitle title="Comp" />} />
        <Route path="/mech" element={<PageWithDynamicTitle title="Mech" />} />
        <Route path="/aids" element={<PageWithDynamicTitle title="AIDS" />} />
        <Route path="/it" element={<PageWithDynamicTitle title="IT" />} /> {/* Add the IT route */}
        <Route path="/entc" element={<PageWithDynamicTitle title="ENTC" />} /> {/* Add the ENTC route */}
      </Routes>
      <Footer />
    </Router>
  );
}

// Component to handle dynamic title
function PageWithDynamicTitle({ title }) {
  const dynamicTitle = `ICEM | ${title}`;

  return (
    <>
      {/* Update title dynamically */}
      <Helmet>
        <title>{dynamicTitle}</title>
      </Helmet>

      {/* Render the component based on the route */}
      {title === "Comp" && <Computer />}
      {title === "Mech" && <Mechanical />}
      {title === "AIDS" && <Aids />}
      {title === "IT" && <IT />} {/* Add the condition for IT */}
      {title === "ENTC" && <Entc />} {/* Add the condition for ENTC */}
    </>
  );
}

export default App;
