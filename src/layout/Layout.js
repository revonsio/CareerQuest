import React from 'react';
import Header from './Header';  
import Footer from './Footer';  

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen"> 
            <Header /> 

            <div className="flex flex-1"> 
                <main className="flex-grow">
                    {children} 
                </main>
            </div>

            <Footer /> 
        </div>
    );
};

export default Layout;
