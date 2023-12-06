import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate=useNavigate();
  const [errorMessages, setErrorMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Validate form fields (you can add more validation logic if needed)
  
      const response = await axios.post("http://localhost:3001/register", {
        name,
        email,
        password,
      });
  
      console.log(response.data);
      navigate('/login');
    } catch (err) {
      if (err.response && err.response.status === 400) {
        // Handle validation errors
        const serverErrors = err.response.data.validationErrors;
        const customErrorMessages = [];
  
        // Customize error messages based on validation errors
        if (serverErrors && serverErrors.name) {
          customErrorMessages.push("Invalid name format");
        }
        if (serverErrors && serverErrors.email) {
          customErrorMessages.push("Invalid email format");
        }
        if (serverErrors && serverErrors.password) {
          customErrorMessages.push(
            "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character."
          );
        }
  
        setErrorMessages(customErrorMessages);
      } else {
        // Handle other types of errors
        console.error(err);
      }
    }
  };
  return (
    <div className="d-flex justify-content-corner align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              id="name"
              name="name"
              className="form-control rounded-0"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              id="email"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              id="password"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Register
          </button>
        </form>
        {errorMessages.length > 0 && (
          <div className="alert alert-danger mt-3" role="alert">
            {/* Display custom error messages */}
            {errorMessages.map((message, index) => (
              <p key={index}>{message}</p>
            ))}
          </div>
        )}
        <p>Already have an account?</p>
        <Link
          to="/login"
          className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;
