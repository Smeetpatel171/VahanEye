import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="homepage">
      <div className="herohome">
        <div className="tint">
          <div className="container">
            <div className="hero">
              <div className="heroinfo">
                <h1>Welcome To <span>Vahan-Eye</span> .</h1>
                <h2>Enhancing City Safety Through License Plate Recognition.</h2>
                <h3>Sign up today and be part of the movement towards safer cities.</h3>
                <Link to="/loginsignup">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="heading">
          <h2>About Vahan-Eye</h2>
          <p>
          At Vahan-Eye, we're on a mission to revolutionize city safety using cutting-edge license plate recognition technology.
          </p>
          <p>Our commitment to creating safer, more secure urban environments drives our vision. We've harnessed the power of advanced computer vision and data analytics to provide a solution that empowers communities and law enforcement agencies alike.</p>
          <p>With Vahan-Eye, we've created a platform that not only detects license plates but also stores this crucial data securely in a database. This information becomes a valuable resource for tracking and addressing important issues in our cities, from security concerns to traffic management. <Link to="/about">Read More...</Link></p>
          <p><Link to="/loginsignup">Join us</Link> in our journey towards safer, smarter cities. Explore the possibilities with Vahan-Eye and be part of the positive change in our communities.</p>
        </div>
      </div>
    </div>
  );
}
