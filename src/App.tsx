import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { 
  NotFound, 
  Solutions, 
  About, 
  Careers, 
  Home,
  PeltolaCaseStudy,
  VenturaCaseStudy,
  McDuffieCaseStudy,
  ContactUs,
} from "./pages/";
import ZohranCaseStudy from "./pages/solutions/ZohranCaseStudy";
import SummerLeeCaseStudy from "./pages/solutions/SummerLeeCaseStudy";
import KansasCaseStudy from "./pages/solutions/KansasCaseStudy";
import AlaskaCaseStudy from "./pages/solutions/AlaskaCaseStudy";
import CoriBushCaseStudy from "./pages/solutions/CoriBushCaseStudy";
import { Navbar, Footer } from "./components";
import Cursor from './components/Cursor';

// ... import other pages as well

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  // const DefaultPadding: React.FC<{ children: React.ReactNode }> = ({
  //   children,
  // }) => (
  //   <div className={`${styles.paddingX} ${styles.flexCenter}`}>
  //     <div className={`${styles.boxWidth}`}>{children}</div>
  //   </div>
  // );

  return (
    <div>
    {/*<div className='doublepillgradient'>*/}
      <Router>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/solutions' element={<Solutions />} />
          <Route path='/solutions/mary-peltola-2022' element={<PeltolaCaseStudy />} />
          <Route path='/solutions/rachel-ventura-2022' element={<VenturaCaseStudy />} />
          <Route path='/solutions/kenyan-mcduffie-2022' element={<McDuffieCaseStudy />} />
          <Route path='/solutions/zohran-mamdani-2025' element={<ZohranCaseStudy />} />
          <Route path='/solutions/summer-lee-2024' element={<SummerLeeCaseStudy />} />
          <Route path='/solutions/kansas-democratic-party-2024' element={<KansasCaseStudy />} />
          <Route path='/solutions/alaska-democratic-party-2024' element={<AlaskaCaseStudy />} />
          <Route path='/solutions/cori-bush-2024' element={<CoriBushCaseStudy />} />
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
