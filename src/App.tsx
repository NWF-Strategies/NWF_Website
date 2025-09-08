import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { 
  NotFound, 
  Solutions, 
  About, 
  Careers, 
  Home,
  PeltolaCaseStudy,
  VenturaCaseStudy,
  McDuffieCaseStudy
} from "./pages/";
import ZohranCaseStudy from "./pages/solutions/ZohranCaseStudy";
import SummerLeeCaseStudy from "./pages/solutions/SummerLeeCaseStudy";
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
          <Route path='/solutions/mary-peltola-2022' element={<PeltolaCaseStudy />} />
          <Route path='/solutions/rachel-ventura-2022' element={<VenturaCaseStudy />} />
          <Route path='/solutions/kenyan-mcduffie-2022' element={<McDuffieCaseStudy />} />
          <Route path='/solutions/zohran' element={<ZohranCaseStudy />} />
          <Route path='/solutions/summer-lee' element={<SummerLeeCaseStudy />} />
          <Route path='/about' element={<About />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <Footer />
      </Router>
      <Cursor />
    </div>
  );
}

export default App;
