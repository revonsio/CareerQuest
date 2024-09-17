import React, { useState } from 'react';
import { FaFilter } from 'react-icons/fa';

const Search = ({ searchTerm, setSearchTerm, handleSearch, handleFilter, resetFilters }) => {
    const [showFilters, setShowFilters] = useState(false);

    const toggleFilters = () => {
        setShowFilters(!showFilters); 
    };

    return (
        <>
            <form onSubmit={handleSearch} className="w-full flex items-center justify-center space-x-4 mb-2">
                <div className="flex justify-between w-full max-w-xl gap-4">
                    <input
                        type="text"
                        placeholder="Type job name here..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none"
                    />
                    <button
                        type="button"
                        onClick={toggleFilters}
                        className="px-6 py-3 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 focus:ring-4 focus:ring-gray-300"
                    >
                        <FaFilter /> 
                    </button>
                </div>
                <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 focus:ring-4 focus:ring-blue-300"
                >
                    Search
                </button>
                <button
                    type="button"
                    onClick={resetFilters}
                    className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-500 focus:ring-4 focus:ring-red-300"
                >
                    Clear
                </button>
            </form>

            <div
                className={`transition-all duration-300 ease-in-out ${
                    showFilters ? 'max-h-screen opacity-100 mb-10' : 'max-h-0 opacity-0'
                } overflow-hidden w-full bg-white shadow-xl rounded-lg p-6`}
            >
                <h2 className="text-lg font-semibold mb-4">Filter Jobs</h2>
                <form onSubmit={handleFilter} className="space-y-4">
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold mb-2">Job Title</label>
                        <input
                            type="text"
                            placeholder="e.g. Frontend Developer"
                            className="px-4 py-3 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold mb-2">Company Name</label>
                        <input
                            type="text"
                            placeholder="e.g. Google Inc."
                            className="px-4 py-3 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold mb-2">City</label>
                        <input
                            type="text"
                            placeholder="e.g. San Francisco"
                            className="px-4 py-3 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-6 w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-500 focus:ring-4 focus:ring-blue-300"
                    >
                        Apply Filters
                    </button>
                </form>
            </div>
        </>
    );
};

export default Search;
