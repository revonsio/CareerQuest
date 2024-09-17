import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const List = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('https://job-vacancy-api.vercel.app/api/jobs');
                setJobs(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch jobs');
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    if (loading) {
        return <div>Loading jobs...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-10 w-full">
            {jobs.map((job) => (
                <div key={job._id} className="bg-white shadow-lg rounded-lg p-6 min-w-[280px] border-[0.5px] border-gray-400">
                    <img
                        src={job.company_image_url}
                        alt={job.company_name}
                        className="w-full h-64 object-contain mb-6 rounded-md"
                    />
                    <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                    <p className="text-gray-700 text-lg">{job.company_name}</p>
                    <p className="text-gray-500 mb-4">{job.company_city}</p>
                    <Link to={`/jobs/${job._id}`} className="text-indigo-600 hover:text-indigo-500 text-lg">
                        View Details
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default List;
