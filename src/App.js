// App.js
import React, { useState } from 'react';
import './App.css'; // Import your CSS file

const Login = ({ onLogin, onSignupClick }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here
    onLogin(username, password);
  };

  return (
    <div className="container"> {/* Apply container styling */}
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ width: "100%" }} // Make username box wider
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%" }} // Make password box wider
      />
      <button className="blue-button" onClick={handleLogin}>Login</button> {/* Apply blue button styling */}
      <p>Don't have an account? <button className="link-button" onClick={onSignupClick}>Sign up now</button></p>
    </div>
  );
};

const Signup = ({ onSignup, onLoginClick }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSignup = () => {
    // Perform signup logic here
    onSignup(username, password, role);
  };

  return (
    <div className="container"> {/* Apply container styling */}
      <h2>Sign up</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ width: "100%" }} // Make username box wider
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%" }} // Make password box wider
      />
      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        style={{ width: "100%" }} // Make role box wider
      />
      <button className="blue-button" onClick={handleSignup}>Sign up</button> {/* Apply blue button styling */}
      <p>Already have an account? <button className="link-button" onClick={onLoginClick}>Login</button></p>
    </div>
  );
};

const App = () => {
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = (username, password) => {
    // Implement login logic
    console.log("Login with:", username, password);
  };

  const handleSignupClick = () => {
    setShowSignup(true);
  };

  const handleSignup = (username, password, role) => {
    // Implement signup logic
    console.log("Signup with:", username, password, role);
    setShowSignup(false);
  };

  const handleLoginClick = () => {
    setShowSignup(false);
  };

  return (
    <div className="page-container"> {/* Apply page container styling */}
      {!showSignup ? (
        <Login onLogin={handleLogin} onSignupClick={handleSignupClick} />
      ) : (
        <Signup onSignup={handleSignup} onLoginClick={handleLoginClick} />
      )}
    </div>
  );
};

export default App;
