import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const decodeJWT = (token) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(atob(base64));
};

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  // Fungsi untuk login
  const login = (token) => {
    Cookies.set('token', token);
    const decoded = decodeJWT(token);
    const user = {
      name: decoded.name || 'User',
      email: decoded.email || 'user@example.com',
      imageUrl: decoded.imageUrl || 'https://www.gravatar.com/avatar/?d=mp', 
    };
    setUserData(user);
  };

  // Fungsi untuk logout
  const logout = () => {
    Cookies.remove('token');
    setUserData(null);
  };

  // Cek token saat komponen pertama kali di-load
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const decoded = decodeJWT(token);
      const user = {
        name: decoded.name || 'User',
        email: decoded.email || 'user@example.com',
        imageUrl: decoded.imageUrl || 'https://www.gravatar.com/avatar/?d=mp', 
      };
      setUserData(user);
    }
  }, []);

  return (
    <UserContext.Provider value={{ userData, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
