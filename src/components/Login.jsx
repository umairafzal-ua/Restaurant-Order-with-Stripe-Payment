import React, { useState } from 'react';
import { Link ,Navigate,useNavigate} from 'react-router-dom';
import api from '../utils/api';
import './Login.css';
import backgroundImage from '../assets/login.jpg';
const Login = ({ setToken }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate=useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting login request with:", formData);
      const response = await api.post('/login', formData);
  
      console.log("Response from server:", response);
  
      if (response.status !== 200) {
        console.log("Login failed with status:", response.status);
        alert("Login failed");
        return;
      }
  
      localStorage.setItem('token', response.data.token);
      setToken=response.data.token;
      alert(response.data.message);
      setFormData({ email: '', password: '' });
      navigate('/dashboard')
    } catch (err) {
      console.error("Error in login:", err);
      alert(err.response?.data?.error || 'Login failed');
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
          width:'100vw'
        }}
      >
    <div className="login-container">
      <div className="back-button-container">
        <Link to="/" className="back-button"> <span>&lt;</span> Back </Link>
      </div>
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit}>
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
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="signup-link">
          Don't have an account? <Link to="/register"><span>Register Now</span></Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
