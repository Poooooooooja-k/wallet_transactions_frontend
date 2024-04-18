import React, { useState } from 'react';
import { AxiosInstance } from '../components/AxiosInstance';
import { Link, useNavigate } from 'react-router-dom';
import { userLogin } from '../Redux/AuthSlice'
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = () => {
    if (!email) {
      setEmailError('Email is required');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  // Validation function for password
  const validatePassword = () => {
    if (!password || password.length < 6) {
      Toaster('Password is required and must be at least 6 characters long');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform validation before submitting the form
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      try {
        const response = await AxiosInstance.post('app/login/', {
          email: email,
          password: password
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (response && response.data) {
          console.log(response.data);
          console.log(response.data.jwt);
          localStorage.setItem('token', response.data.access_token);
          localStorage.setItem('refreshToken', response.data.refresh);
          dispatch(userLogin())
          navigate('/dashboard');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <>
      <div className="py-16">
        <Toaster/>
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div className="hidden lg:block lg:w-1/2 bg-cover"
            style={{ backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20230322/pngtree-online-banking-concept-with-the-businessman-online-banking-concept-with-businessman-photo-image_2041611.jpg')" }}>
          </div>
          <div className="w-full p-8 lg:w-1/2">

            <p className="text-xl text-gray-600 text-center">Welcome back!</p>
            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                {emailError && <div className="text-red-500">{emailError}</div>}
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                  <a href="#" className="text-xs text-gray-500">Forget Password?</a>
                </div>
                <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                {passwordError && <div className="text-red-500">{passwordError}</div>}
              </div>
              <div className="mt-8">
                <button type='submit' className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Login</button>
              </div>
            </form>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <Link to='/signup'>Signup</Link>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
