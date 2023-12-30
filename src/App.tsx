import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Solutions, About, Careers, ContactUs, Home } from "./pages/";
import { Navbar, Footer } from "./components";
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
    <div className='bg-grey'>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/solutions' element={<Solutions />} />
          <Route path='/about' element={<About />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/contactus' element={<ContactUs />} />

          {/* Default route, typically Home */}
          <Route path='/' element={<Home />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
