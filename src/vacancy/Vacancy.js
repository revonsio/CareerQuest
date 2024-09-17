import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Search from './Search'; // Import the Search component
import List from './List'; // Import the List component

const Vacancy = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyCity, setCompanyCity] = useState('');
    const [showFilters, setShowFilters] = useState(false); // State to toggle filters
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if token exists in cookies to determine if user is logged in
        const token = Cookies.get('token');
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        // Add search functionality here
        console.log("Searching for: ", searchTerm);
    };

    const handleFilter = (e) => {
        e.preventDefault();
        // Add filter functionality here
        console.log("Filtering by: ", { jobTitle, companyName, companyCity });
    };

    const resetFilters = () => {
        setSearchTerm('');
        setJobTitle('');
        setCompanyName('');
        setCompanyCity('');
    };

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

    return (
        <div className="min-h-screen w-full mt-20">
            <div className="flex flex-col items-center px-8 py-10">
                <h1 className="text-4xl font-bold text-center mb-4">Explore Job Vacancies</h1>
                <p className="text-lg text-gray-500 text-center mb-8">Find the best opportunities that match your skills.</p>
    
                <Search
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    showFilters={showFilters}
                    setShowFilters={setShowFilters}
                    jobTitle={jobTitle}
                    setJobTitle={setJobTitle}
                    companyName={companyName}
                    setCompanyName={setCompanyName}
                    companyCity={companyCity}
                    setCompanyCity={setCompanyCity}
                    handleSearch={handleSearch}
                    handleFilter={handleFilter}
                    resetFilters={resetFilters}
                    toggleFilters={toggleFilters}
                />

                <List />
            </div>
        </div>
    );
    
};

export default Vacancy;
