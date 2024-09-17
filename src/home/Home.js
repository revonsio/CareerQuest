import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import HeroLogged from './HeroLogged';  
import Hero from './Hero';              
import Partner from './Partner';

const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = Cookies.get('token');
        setIsLoggedIn(!!token);
    }, []);

    return (
        <div className='block w-full'>
            {isLoggedIn ? <HeroLogged /> : <Hero />}
            <Partner />
        </div>
    );
};

export default Home;
