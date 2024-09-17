import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const ListJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

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

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://job-vacancy-api.vercel.app/api/jobs/${id}`);
            setJobs(jobs.filter(job => job._id !== id));
        } catch (error) {
            console.error('Failed to delete job', error);
        }
    };

    const handleEdit = (id) => {
        navigate(`/edit-job/${id}`);
    };

    if (loading) {
        return <div>Loading jobs...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="overflow-x-auto lg:mt-24 w-full">
            <table className="min-w-full bg-white border">
                <thead>
                    <tr>
                        <th className=" py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">NO</th>
                        <th className=" py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                        <th className=" py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                        <th className=" py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Qualification</th>
                        <th className=" py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                        <th className=" py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Tenure</th>
                        <th className=" py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className=" py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                        <th className=" py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Logo</th>
                        <th className=" py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
                        <th className=" py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Salary</th>
                        <th className=" py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider text">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map((job, index) => (
                        <tr key={job._id} className="border-t">
                            <td className="text-center py-4 whitespace-nowrap text-sm text-gray-900">{index + 1}</td>
                            <td className="text-center py-4 max-w-xs overflow-auto whitespace-nowrap text-sm font-bold text-gray-900">{job.title || '-'}</td>
                            <td className="text-center py-4 max-w-xs overflow-auto whitespace-nowrap text-sm text-gray-900">{job.description || '-'}</td>
                            <td className="text-center py-4 max-w-xs overflow-auto whitespace-nowrap text-sm text-gray-900">{job.qualification || '-'}</td>
                            <td className="text-center py-4 max-w-xs overflow-auto whitespace-nowrap text-sm text-gray-900">{job.type || '-'}</td>
                            <td className="text-center py-4 max-w-xs overflow-auto whitespace-nowrap text-sm text-gray-900">{job.tenure || '-'}</td>
                            <td className="text-center py-4 max-w-xs overflow-auto whitespace-nowrap text-sm text-gray-900">{job.status || '-'}</td>
                            <td className="text-center py-4 max-w-xs overflow-auto whitespace-nowrap text-sm text-gray-900">{job.company_name || '-'}</td>
                            <td className="py-4">
                                <img src={job.company_image_url || 'https://via.placeholder.com/48'} alt={job.company_name} className="h-12 w-12 object-cover" />
                            </td>
                            <td className="text-center py-4 max-w-xs overflow-auto whitespace-nowrap text-sm text-gray-900">{job.company_city || '-'}</td>
                            <td className="text-center py-4 max-w-xs overflow-auto whitespace-nowrap text-sm text-gray-900">{`${job.min_salary || '-'} - ${job.max_salary || '-'}`}</td>
                            <td className="text-center py-4 whitespace-nowrap text-sm">
                                <button
                                    onClick={() => handleEdit(job._id)}
                                    className="text-white hover:bg-indigo-500  mr-4 px-4 py-2 bg-indigo-600 rounded-lg"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(job._id)}
                                    className="text-white hover:bg-red-500 px-4 py-2 bg-red-600 rounded-lg"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListJobs;
