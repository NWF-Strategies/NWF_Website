import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NotFound, Solutions, About, Careers, ContactUs, Home } from "./pages/";
import { Navbar, Footer } from "./components";
import Cursor from './components/Cursor';


// ... import other pages as well

function App() {
  // const DefaultPadding: React.FC<{ children: React.ReactNode }> = ({
  //   children,
  // }) => (
  //   <div className={`${styles.paddingX} ${styles.flexCenter}`}>
  //     <div className={`${styles.boxWidth}`}>{children}</div>
  //   </div>
  // );

  return (
    <div className='doublepillgradient'>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/solutions' element={<Solutions />} />
          <Route path='/about' element={<About />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <Footer />
      </Router>
      <Cursor />
    </div>
  );
}

export default App;
