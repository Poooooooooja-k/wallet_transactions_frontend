import React from 'react';
import Navbar from './Navbar';

const Dashboard = () => {
  return (
    <div className='bg-cover bg-no-repeat h-[695px]' style={{ backgroundImage: `url('https://personetics.com/wp-content/uploads/2021/12/Top_22_Digital_Banking_Trends_2022_02_website.jpg')` }}>
      <div className='grid grid-cols-12'>
        <div className='col-span-2'>
          <Navbar />
        </div>
        <div className='col-span-10'>
          <h1 className='text-white font-semibold mt-96 text-5xl'>Welcome to our Wallet Transcation System </h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
