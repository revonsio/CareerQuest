import React from 'react';
import { useUser } from '../context/UserContext';

const Profile = () => {
  const { userData } = useUser(); // Mengakses userData dari context

  if (!userData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-500">No user data available. Please log in.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-8">Your Profile</h1>
      <div className="w-32 h-32 mb-8">
        <img
          src={userData.imageUrl}
          alt="Profile Picture"
          className="w-full h-full object-cover rounded-full border-2 border-gray-300"
        />
      </div>
      <table className="text-lg">
        <tbody>
          <tr>
            <td className="font-semibold pr-4">Name</td>
            <td>:</td>
            <td className="pl-2">{userData.name}</td>
          </tr>
          <tr>
            <td className="font-semibold pr-4">Email</td>
            <td>:</td>
            <td className="pl-2">{userData.email}</td>
          </tr>
          <tr>
            <td className="font-semibold pr-4">Image URL</td>
            <td>:</td>
            <td className="pl-2">{userData.imageUrl}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
