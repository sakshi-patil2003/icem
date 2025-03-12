import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; // Use useLocation hook
import { Helmet } from 'react-helmet'; // Import Helmet
import Computer from './pages/Computer'; // Import your Home (Computer) component
import Mechanical from './pages/Mechanical'; // Import your Home (Mechanical) component
import Navbar from './pages/Navbar'; // Import your Navbar component
import Footer from './pages/Footer';
import Aids from './pages/Aids'; // Import your Home (Aids) component

function App() {
  return (
    <Router> 
      <Navbar /> 
      <Routes> 
        <Route path="/comp" element={<PageWithDynamicTitle title="Comp" />} />
        <Route path="/mech" element={<PageWithDynamicTitle title="Mech" />} />
        <Route path="/aids" element={<PageWithDynamicTitle title="AIDS" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

// Component to handle dynamic title
function PageWithDynamicTitle({ title }) {
  const location = useLocation(); // Get the current route
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
    </>
  );
}

export default App;
