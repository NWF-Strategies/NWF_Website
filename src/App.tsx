import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Solutions, About, Careers, ContactUs, Home } from "./pages/";
import { Navbar, Footer } from "./components";
import styles from "./style";
// ... import other pages as well

function App() {
  const DefaultPadding: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {children}
      </div>
    </div>
  );

  return (
    <div className='bg-black-gradient'>
      <Router>
        <DefaultPadding><Navbar /></DefaultPadding>

        <Routes>
            <Route path='/solutions' element={<DefaultPadding><Solutions /></DefaultPadding>} />
            <Route path='/about' element={<DefaultPadding><About /></DefaultPadding>} />
            <Route path='/careers' element={<DefaultPadding><Careers /></DefaultPadding>} />
            <Route path='/contactus' element={<DefaultPadding><ContactUs /></DefaultPadding>} />
            
            {/* Default route, typically Home */}
            <Route path='/' element={<Home />} />
        </Routes>

        <DefaultPadding><Footer /></DefaultPadding>
      </Router>
    </div>
  );
}

export default App;
