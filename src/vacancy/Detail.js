import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IoArrowBack } from 'react-icons/io5';

const Detail = () => {
    const { _id } = useParams(); 
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); 

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const response = await axios.get(`https://job-vacancy-api.vercel.app/api/jobs/${_id}`);
                setJob(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch job details');
                setLoading(false);
            }
        };

        fetchJob();
    }, [_id]); 

    if (loading) {
        return <div>Loading job details...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!job) {
        return <div>No job found</div>;
    }

    return (
        <div className="w-full h-screen bg-gray-200">
            <div className="flex justify-center items-center w-full h-full my-4">
                <div className="bg-white w-1/2 py-4">
                    <div className="px-6 cursor-pointer" onClick={() => navigate('/vacancy')}>
                        <IoArrowBack className="text-2xl sm:text-3xl" />
                    </div>
                    <div className="flex flex-col md:flex-row justify-around items-center h-full mb-4">
                        <img 
                            src={job.company_image_url} 
                            alt={job.company_name} 
                            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 h-64 object-contain rounded-lg mb-4 md:mb-0" 
                        />
                        <div className="ml-2 text-center md:text-left">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4">{job.title} ({job.job_type})</h2>
                            <p className="text-lg font-semibold">{job.company_name} - {job.job_type}</p>
                            <p>Status: <span className={job.job_status === "open" ? "text-green-600" : "text-red-600"}>
                                {job.job_status === "open" ? "Open Hiring" : "Closed"}
                            </span></p>
                            <p>City: {job.company_city}</p>
                            <p>Description: {job.job_description}</p>
                            <p>Qualification: {job.job_qualification}</p>
                            <p>Salary: Rp {job.salary_min} - Rp {job.salary_max}</p>
                            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500">
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
