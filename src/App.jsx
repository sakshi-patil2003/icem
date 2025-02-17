import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Computer from './pages/Computer'; // Import your Home (Computer) component
import Mechanical from './pages/Mechanical'; // Import your Home (Mechanical) component
import Navbar from './pages/Navbar'; // Import your Navbar component
import Footer from './pages/Footer';

function App() {
  return (
    <Router> {/* Wrap the app in Router */}
      <Navbar /> {/* Render Navbar permanently */}
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/comp" element={<Computer />} /> {/* Define the route for '/comp' */}
        <Route path="/mech" element={<Mechanical />} /> {/* Define the route for '/mech' */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
