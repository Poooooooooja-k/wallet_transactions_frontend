import React, { useState, useEffect } from 'react';
import { AxiosInstance } from './AxiosInstance';

const History = () => {
  const [sentTransactions, setSentTransactions] = useState([]);
  const [receivedTransactions, setReceivedTransactions] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await AxiosInstance.get('app/transaction/history/');
        setSentTransactions(response.data.sent_transactions);
        setReceivedTransactions(response.data.received_transactions);
      } catch (error) {
        setError('Error fetching transaction history');
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Transaction History</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Sent Transactions:</h3>
          <ul>
            {sentTransactions.map(transaction => (
              <li key={transaction.id} className="mb-2">
                <span className="font-semibold text-green-600">You </span> sent ₹{transaction.amount} to <span className='font-semibold text-green-600'>{transaction.recipient_name.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Received Transactions:</h3>
          <ul>
            {receivedTransactions.map(transaction => (
               
              <li key={transaction.id} className="mb-2">
                 {console.log(transaction,"---")}
                <span className="font-semibold text-green-600">{transaction.sender_name.name}</span> sent you ₹{transaction.amount}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default History;
