import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
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
    
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6">Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              id="name"
              name="name"
              className="mt-1 p-2 w-full rounded border-gray-300"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              id="email"
              name="email"
              className="mt-1 p-2 w-full rounded border-gray-300"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              id="password"
              name="password"
              className="mt-1 p-2 w-full rounded border-gray-300"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white p-2 w-full rounded hover:bg-green-600"
          >
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
        <p className="mt-4">Already have an account?</p>
        <Link
          to="/login"
          className="mt-2 block text-center text-gray-600 underline hover:text-gray-800"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;
