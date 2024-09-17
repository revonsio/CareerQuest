import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const Registration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); 
    const [isLoading, setIsLoading] = useState(false);  
    const navigate = useNavigate(); 

    const handleRegister = async (e) => {
        e.preventDefault();
        setIsLoading(true);  
        try {
            const response = await axios.post("https://job-vacancy-api.vercel.app/api/auth/register", {
                name,
                email,
                password,
                image_url: imageUrl
            });

            console.log("Registration successful", response.data);

            Cookies.set('profile_image_url', imageUrl);  
            
            navigate("/Login");
        } catch (error) {
            console.error("Error during registration", error.response?.data || error.message);
            setErrorMessage("Registration failed. Please check your input.");
        } finally {
            setIsLoading(false); 
        }
    };

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Create your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleRegister} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="imageUrl" className="block text-sm font-medium leading-6 text-gray-900">
                                Profile Image URL
                            </label>
                            <div className="mt-2">
                                <input
                                    id="imageUrl"
                                    name="imageUrl"
                                    type="text"
                                    required
                                    value={imageUrl}
                                    onChange={(e) => setImageUrl(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                disabled={isLoading}  
                            >
                                {isLoading ? 'Registering...' : 'Register'}
                            </button>
                        </div>

                        {errorMessage && (
                            <div className="mt-2 text-red-600 text-sm">
                                {errorMessage}
                            </div>
                        )}
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already have an account?{' '}
                        <Link to="/Login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Registration;
