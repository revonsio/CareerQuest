import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 

const ChangePassword = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newConfirmPassword, setNewConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChangePassword = async (e) => {
        e.preventDefault();
        if (newPassword !== newConfirmPassword) {
            setErrorMessage("New password and confirmation do not match");
            return;
        }
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(
                "https://dev-example.sanbercloud.com/api/change-password",
                {
                    current_password: currentPassword,
                    new_password: newPassword,
                    new_confirm_password: newConfirmPassword
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            setSuccessMessage("Password changed successfully");
            setErrorMessage('');
        } catch (error) {
            setErrorMessage(error.response?.data?.message || "Error changing password");
            setSuccessMessage('');
        }
    };

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Change Your Password
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleChangePassword} className="space-y-6">
                        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
                        {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}

                        <div>
                            <label htmlFor="currentPassword" className="block text-sm font-medium leading-6 text-gray-900">
                                Current Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="currentPassword"
                                    name="currentPassword"
                                    type="password"
                                    required
                                    value={currentPassword}
                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="newPassword" className="block text-sm font-medium leading-6 text-gray-900">
                                New Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="newPassword"
                                    name="newPassword"
                                    type="password"
                                    required
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="newConfirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                                Confirm New Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="newConfirmPassword"
                                    name="newConfirmPassword"
                                    type="password"
                                    required
                                    value={newConfirmPassword}
                                    onChange={(e) => setNewConfirmPassword(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Change Password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ChangePassword;
