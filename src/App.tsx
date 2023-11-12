import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Solutions, About, Careers, ContactUs, Home } from "./pages/";
import { Navbar, Footer } from "./components";
import styles from "./style";
// ... import other pages as well

function App() {
  return (
    <div className='bg-black-gradient'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Router>
            <Navbar />
            <Routes>
              <Route path='/solutions' element={<Solutions />} />
              {/* Add routes for other pages similarly */}
              <Route path='/about' element={<About />} />
              <Route path='/careers' element={<Careers />} />
              <Route path='/contactus' element={<ContactUs />} />
              {/* Default route, typically Home */}
              <Route path='/' element={<Home />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
