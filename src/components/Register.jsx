import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/api';
import './Login.css';
import backgroundImage from '../assets/login.jpg'

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/register', formData);
      alert(response.data.message);
      setFormData({ username: '', email: '', password: '' });
    } catch (err) {
      alert(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw'
      }}
    >
      <div className="login-container">
        <div className="back-button-container">
          <Link to="/" className="back-button"><span> &lt; </span> Back</Link>
        </div>
        <div className="login-box">
          <h2 className="login-title">Register</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="input-field"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="input-field"
              required
            />
            <button type="submit" className="login-button">Register</button>
          </form>
          <div className="signup-link">
            Already have an account? <Link to="/"><span>Login</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
