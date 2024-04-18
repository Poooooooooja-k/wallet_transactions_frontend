import React, { useState, useEffect } from 'react';
import { AxiosInstance } from './AxiosInstance';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await AxiosInstance.get('app/contacts/');
        console.log(response.data.data, "-------------");
        setContacts(response.data.data);
      } catch (error) {
        setError('Error fetching contacts');
      }
    };

    fetchContacts();
  }, []);



  const handleSendMoney = (recipientId) => {
    
    navigate(`/transaction?recipient_id=${recipientId}`);
  };

  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-3'>
        <Sidebar />
      </div>
      <h2 className="text-2xl font-semibold mt-32">Contacts</h2>
      <div className='flex justify-center items-center h-screen col-span-2'>
        
        {error && <p className="text-red-500">{error}</p>}
        <ul className="divide-y divide-gray-200">
          {contacts.length > 0 ? (
            contacts.map(contact => (
              <li key={contact.id} className="py-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{contact.name}</div>
                    <div className="text-sm text-gray-500">{contact.phone_number}</div>
                  </div>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded ml-12" onClick={()=>handleSendMoney(contact.id) }>
                        Send Money
                        </button>
                </div>
              </li>
            ))
          ) : (
            <li className="py-4">No contacts found</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
