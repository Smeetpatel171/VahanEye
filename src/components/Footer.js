import React from "react";
import { Link, useLocation } from "react-router-dom";
import  mail  from '../Assets/mail.svg';
export default function Footer() {
  const location = useLocation();
 
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="footer-first">
              <h1>
                <b>Vahan-Eye</b>
                <span style={{ color: "#1DA1F2" }}>.</span>
              </h1>
              <p>
              Vahan-Eye is a cutting-edge license plate recognition and vehicle tracking solution designed to enhance the safety and security of our city's streets. 
              </p>
              <ul>
                
                <li>
                  <Link to="mailto:smeetpatel171@gmail.com" target="_blank" rel="noreferrer">
                  <img src={mail} alt="" />
                  </Link>
                </li>
                
               
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="footer-second">
              <h4>Useful Links</h4>
              <ul>
              <li>
                <Link
                  className={location.pathname === "/" ? "footeractive" : ""}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/about" ? "footeractive" : ""
                  }
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/profile" ? "footeractive" : ""
                  }
                  to="/profile"
                >
                  Profile
                </Link>
              </li>
            </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-third">
<h4>Contact Details</h4>
<Link className="contactbutton" to="/contact">Contact Us</Link>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}
