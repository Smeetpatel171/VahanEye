import React, { useState } from 'react';
import { Tab, Tabs, Form, Button, Alert } from 'react-bootstrap';

const LoginSignup = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [loginFormData, setLoginFormData] = useState({ email: '', password: '' });
  const [signupFormData, setSignupFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Validate login data here (e.g., check credentials)
    // If validation fails, set an error message
    setMessage('Login successful');
    setShowMessage(true);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Validate signup data here (e.g., check passwords match)
    // If validation fails, set an error message
    setMessage('Account created successfully');
    setShowMessage(true);
  };

  return (
   <div className='loginsignup-page'>
     <div className="auth-container">
       <Tabs activeKey={activeTab} onSelect={handleTabChange}>
         <Tab eventKey="login" title="Login">
           <Form onSubmit={handleLoginSubmit}>
             <Form.Group controlId="email">
               
               <Form.Control
                 type="email"
                 placeholder="Enter email"
                 value={loginFormData.email}
                 onChange={(e) => setLoginFormData({ ...loginFormData, email: e.target.value })}
               />
             </Form.Group>
             <Form.Group controlId="password">
               
               <Form.Control
                 type="password"
                 placeholder="Password"
                 value={loginFormData.password}
                 onChange={(e) => setLoginFormData({ ...loginFormData, password: e.target.value })}
               />
             </Form.Group>
             <Button variant="primary" type="submit">
               Log In
             </Button>
           </Form>
         </Tab>
         <Tab eventKey="signup" title="Sign Up">
           <Form onSubmit={handleSignupSubmit}>
             <Form.Group controlId="fullName">
               
               <Form.Control
                 type="text"
                 placeholder="Enter full name"
                 value={signupFormData.fullName}
                 onChange={(e) => setSignupFormData({ ...signupFormData, fullName: e.target.value })}
               />
             </Form.Group>
             <Form.Group controlId="email">
               
               <Form.Control
                 type="email"
                 placeholder="Enter email"
                 value={signupFormData.email}
                 onChange={(e) => setSignupFormData({ ...signupFormData, email: e.target.value })}
               />
             </Form.Group>
             <Form.Group controlId="password">
              
               <Form.Control
                 type="password"
                 placeholder="Password"
                 value={signupFormData.password}
                 onChange={(e) => setSignupFormData({ ...signupFormData, password: e.target.value })}
               />
             </Form.Group>
             <Form.Group controlId="confirmPassword">
               
               <Form.Control
                 type="password"
                 placeholder="Confirm password"
                 value={signupFormData.confirmPassword}
                 onChange={(e) =>
                   setSignupFormData({ ...signupFormData, confirmPassword: e.target.value })
                 }
               />
             </Form.Group>
             <Button variant="primary" type="submit">
               Sign Up
             </Button>
           </Form>
         </Tab>
       </Tabs>
       {showMessage && <Alert variant="success">{message}</Alert>}
       <div className="toggle-tab">
         {activeTab === 'login' ? (
           <p>
             Not have an account yet?{' '}
             <span onClick={() => handleTabChange('signup')}>Click here to sign up</span>
           </p>
         ) : (
           <p>
             Already have an account?{' '}
             <span onClick={() => handleTabChange('login')}>Click here for login</span>
           </p>
         )}
       </div>
     </div>
   </div>
  );
};

export default LoginSignup;
