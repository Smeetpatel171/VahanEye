import React from "react";
import point from "../../Assets/point.svg";
const About = () => {
  return (
    <div className="aboutpage">
      <div className="container">
        <div className="about-content">
          <div className="heading">
            <h2>About Us</h2>
            <p>
            Vahan-Eye is a cutting-edge license plate recognition and vehicle tracking solution designed to enhance the safety and security of our city's streets. Our mission is to provide law enforcement agencies and concerned citizens with a powerful tool to help monitor and address issues related to vehicles in our community.


            </p>
            <p>We believe that a safer and more secure city is a collective effort. Join us in using Vahan-Eye to make a positive impact on our community. Together, we can work towards a brighter and safer future.

Feel free to customize this template to match the specific details and branding of your application. The goal is to provide users with a clear understanding of your app's purpose, its features, and how they can be a part of the solution.





</p>
          </div>
          <div className="heading">
            <h3>Our Vision</h3>
            <p>
            At Vahan-Eye, we envision a safer and more secure urban environment where citizens can play an active role in ensuring the well-being of their communities. By harnessing the power of modern technology, we aim to empower users to report and track vehicles of interest, ultimately contributing to a safer and more connected city.            </p>
            
          </div>
          <div className="heading">
            <h3>Key Features</h3>
          </div>
          <div className="skills">
            <div>
              <img src={point} alt="" />
              <p>
              License Plate Recognition: Our advanced computer vision technology can accurately detect and record license plates from vehicles passing through cameras stationed throughout the city.
              </p>
            </div>
            <div>
              <img src={point} alt="" />
              <p>
              Complaint Registration: Users can easily register complaints related to specific license plates, helping law enforcement agencies and authorities take swift action when necessary.
              </p>
            </div>
            <div>
              <img src={point} alt="" />
              <p>
              Database Integration: All captured license plate data is securely stored in our database, allowing for easy access and retrieval when needed.
              </p>
            </div>
            
            
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default About;
