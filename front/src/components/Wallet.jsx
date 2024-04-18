import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { AxiosInstance } from './AxiosInstance';
import toast, { Toaster } from 'react-hot-toast';

const Wallet = () => {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState(0);
  

  useEffect(() => {
    AxiosInstance.get('app/retrievebalance/') 
      .then((response) => {
        setBalance(response.data.balance);
      })
      .catch((error) => {
        console.error('Error fetching balance:', error);
      });
  },[]); 

  const handleAmountChange = (event) => {
    setAmount(Number(event.target.value));
  };

  const addMoney = () => {
    AxiosInstance.post('app/addmoney/', { amount })
      .then((response) => {
        setBalance(response.data.new_balance);
        toast.success('Money credited successfully');
        setAmount(0)
      })
      .catch((error) => {
        console.error('Error adding money:', error);
      });
  };

  return (
    <>
      <div className='grid grid-cols-12'>
        <div className='col-span-3'>
          <Sidebar />
        </div>
        <Toaster />
        <div className='flex justify-center items-center h-screen col-span-9'>
          <div className='bg-blue-500 text-white p-8 rounded-lg'>
            <h2 className='text-lg mb-4'>Your Wallet Balance: ₹{balance}</h2>
            <div className='mb-4'>
              <input
                type='text'
                className='border border-gray-300 p-2 rounded bg-slate-400'
                value={amount}
                onChange={handleAmountChange}
                placeholder='Enter amount to add'
              />
            </div>
            <button
              className='bg-white text-blue-500 py-2 px-4 rounded'
              onClick={addMoney}
            >
              Add Money
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallet;
