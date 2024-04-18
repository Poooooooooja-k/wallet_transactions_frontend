import React, { useState } from 'react';
import { AxiosInstance } from './AxiosInstance';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const MoneyTransaction = () => {
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const recipientId = searchParams.get('recipient_id');
  console.log(recipientId,"----------id--------------")

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await AxiosInstance.post('app/moneytransaction/', {
        recipient_id: recipientId,
        amount: amount
      });
      setSuccessMessage(response.data.message);
    } catch (error) {
      setError('Error processing transaction');
    }
  };

  return (
    <>
    <div className='grid grid-cols-12'>
    <div className='col-span-3'>
    <Sidebar/>
    </div>
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-52 col-span-9 h-80">
  <h2 className="text-2xl mb-4">Money Transaction</h2>
  {error && <p className="text-red-500">{error}</p>}
  {successMessage && <p className="text-green-500">{successMessage}</p>}
  <form onSubmit={handleSubmit} className="flex flex-col">
    <div className="mb-4">
      <label htmlFor="amount" className="block mb-2">Amount:</label>
      <input
        type="text"
        id="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="p-2 border rounded-md w-full"
      />
    </div>
    <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-md">
      Send Money
    </button>
  </form>
</div>
</div>
</>

  );
};

export default MoneyTransaction;
