import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditJob = () => {
    const { id } = useParams(); // Mendapatkan ID dari parameter URL
    const [jobData, setJobData] = useState({
        title: '',
        description: '',
        qualification: '',
        type: '',
        tenure: '',
        status: '',
        company_name: '',
        company_image_url: '',
        company_city: '',
        min_salary: '',
        max_salary: ''
    });
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false); // Tambahkan state untuk proses update
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false); // Tambahkan state untuk success
    const navigate = useNavigate();

    useEffect(() => {
        const fetchJobData = async () => {
            try {
                const response = await axios.get(`https://job-vacancy-api.vercel.app/api/jobs/${id}`);
                setJobData(response.data);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch job data');
                setLoading(false);
            }
        };
        fetchJobData();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setJobData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUpdating(true); 
        try {
            await axios.put(`https://job-vacancy-api.vercel.app/api/jobs/${id}`, jobData);
            setSuccess(true); 
            setTimeout(() => {
                navigate('/list-jobs');
            }, 1500);
        } catch (error) {
            console.error('Failed to update job', error);
            setError('Failed to update job');
        } finally {
            setUpdating(false); 
        }
    };

    if (loading) {
        return <div>Loading job data...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="max-w-3xl mx-auto lg:mt-24 p-6">
            <h1 className="text-2xl font-bold mb-6">Edit Job</h1>

            {/* Tampilkan pesan sukses */}
            {success && <div className="mb-4 p-2 bg-green-100 text-green-800 rounded">Job updated successfully!</div>}

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-gray-700">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={jobData.title}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Job Description</label>
                        <input
                            type="text"
                            name="description"
                            value={jobData.description}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Job Qualification</label>
                        <input
                            type="text"
                            name="qualification"
                            value={jobData.qualification}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Job Type</label>
                        <input
                            type="text"
                            name="type"
                            value={jobData.type}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Job Tenure</label>
                        <input
                            type="text"
                            name="tenure"
                            value={jobData.tenure}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Job Status</label>
                        <input
                            type="text"
                            name="status"
                            value={jobData.status}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Company Name</label>
                        <input
                            type="text"
                            name="company_name"
                            value={jobData.company_name}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Company Image URL</label>
                        <input
                            type="text"
                            name="company_image_url"
                            value={jobData.company_image_url}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Company City</label>
                        <input
                            type="text"
                            name="company_city"
                            value={jobData.company_city}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Min Salary</label>
                        <input
                            type="number"
                            name="min_salary"
                            value={jobData.min_salary}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Max Salary</label>
                        <input
                            type="number"
                            name="max_salary"
                            value={jobData.max_salary}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className={`mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 ${updating ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={updating} 
                >
                    {updating ? 'Saving...' : 'Save Changes'}
                </button>
            </form>
        </div>
    );
};

export default EditJob;
