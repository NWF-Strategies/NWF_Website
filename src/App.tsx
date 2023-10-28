import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Solutions, About, Careers, ContactUs, Home  } from './pages/';
// ... import other pages as well

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/solutions" element={<Solutions />} />
        {/* Add routes for other pages similarly */}
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contactus" element={<ContactUs />} />
        {/* Default route, typically Home */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;