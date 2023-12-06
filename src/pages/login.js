import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log({ email, password });
      axios
        .post("http://localhost:3001/login", { email, password })
        .then((result) => {
          console.log(result);
          if (result.data === "success") {
            navigate('/home');
          }
        })
        .catch((err) => console.log(err));
    };

    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-200">
        <div className="bg-white p-6 rounded shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <form onSubmit={handleSubmit}>
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
              Login
            </button>
          </form>
          <p className="mt-4">Create an account?</p>
          <Link
            to="/register"
            className="mt-2 block text-center text-gray-600 underline hover:text-gray-800"
          >
            Register
          </Link>
        </div>
      </div>
    );
}

export default Login;
