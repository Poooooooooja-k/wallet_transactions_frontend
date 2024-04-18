import React, { useState } from 'react';
import { AxiosInstance } from './AxiosInstance';
import { Link,useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast'; 

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    if (!name || !email || !phoneNumber || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }

    // Password validation regex pattern
    const passwordRegex = /^.{6,}$/;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email format');
      return;
    }

    // Validate password length
    if (!passwordRegex.test(password)) {
      setError('Password must be at least 6 characters long');
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await AxiosInstance.post('app/signup/', {
        name: name,
        phone_number: phoneNumber,
        email: email,
        password: password,
        confirm_password: password,
      });
      console.log('Signup successful:', response.data);
      toast.success("Signup Successfull!!")
      navigate('/')
    } catch (error) {
      console.error('Error submitting signup:', error.response ? error.response.data : error);
    }
  };

  return (
    <>
      <section className="h-screen bg-gray-100 flex justify-center items-center">
        <Toaster />
        <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Password"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Confirm Password"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </form>
          <p className="text-gray-700 text-center mt-4">Already have an account? <Link to="/login" className="text-blue-500">Log in</Link></p>
        </div>
      </section>
    </>
  );
};

export default Signup;
