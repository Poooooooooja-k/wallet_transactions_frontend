import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogout } from '../Redux/AuthSlice';
import { Link } from 'react-router-dom';
const Sidebar = () => {

const navigate = useNavigate();
const dispatch = useDispatch();

const handleLogout = () => {
  dispatch(userLogout());
  navigate('/');
};
  return (
    <div className="bg-gray-900 text-white h-screen w-64">
    <div className="container mx-auto py-8 px-4">
      <div className="sidebar">
        <ul>
          <li><Link to="/wallet" className="block py-2 px-4">Wallet</Link></li>
          <li><Link to="/contacts" className="block py-2 px-4">Contacts</Link></li>
          <li><Link to="/history" className="block py-2 px-4">Transaction history</Link></li>
          <li><button className='h-45 w-45 rounded-lg bg-red-700 ml-5 mt-3 p-2' onClick={handleLogout}>logout</button></li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Sidebar
