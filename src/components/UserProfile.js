// src/components/UserProfile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
        setUser(response.data.results[0]);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-xs mx-auto my-8">
      {user && (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="flex items-center p-4">
            <img
              className="w-16 h-16 rounded-full mr-4"
              src={user.picture.large}
              alt={`${user.name.first} ${user.name.last}`}
            />
            <div>
              <h2 className="text-xl font-semibold">{`${user.name.first} ${user.name.last}`}</h2>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-gray-100 p-4 mb-4">
              <h3 className="text-lg font-semibold mb-2">Gender</h3>
              <p className="text-gray-600">{user.gender}</p>
            </div>
            <div className="bg-gray-100 p-4">
              <h3 className="text-lg font-semibold mb-2">Phone Number</h3>
              <p className="text-gray-600">{user.phone}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
