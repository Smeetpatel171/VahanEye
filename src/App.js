import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./components/pages/Profile";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import BottomToTop from "./components/BottomToTop";
import PageNotFound from "./components/pages/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSignup from "./components/pages/LoginSignup";

import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="loginsignup" element={<LoginSignup />} />
           
          </Route>
        </Routes>
        <Footer></Footer>
        <BottomToTop></BottomToTop>
      </BrowserRouter>
    </>  
  );
}

export default App;
