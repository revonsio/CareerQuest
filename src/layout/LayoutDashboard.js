import React from 'react';
import Header from './Header';  
import Footer from './Footer';  
import Sidebar from './Sidebar';  

const LayoutDashboard = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen"> 
            <Header /> 

            <div className="flex flex-1"> 
                <Sidebar /> 
                
                <main className="flex-grow  bg-gray-200">
                    {children}
                </main>
            </div>

            <Footer /> 
        </div>
    );
};

export default LayoutDashboard;
