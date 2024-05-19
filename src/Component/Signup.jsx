import React, { useState } from 'react';
import COVER_IMAGE from '../assets/rentuplogo.jpg';
import LOGO_IMAGE from '../assets/rentitlogo.jpg';
import { useNavigate } from 'react-router-dom'; // For routing
// import { BrowserRouter, Routes, Route } from 'react-router-dom';



const Signuppage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        createPassword: '',
        confirmPassword: '',
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const result = await fetch('http://localhost:5000/register', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await result.json();
        console.warn(data);
    };


    return (
        <div className="flex min-h-screen">
            {/* Cover Image Section */}
            <div className="flex lg:w-1/2 w-full items-center justify-center">
                <div className='absolute top-[5%] left-[13%] flex flex-col'>
                    <img src={LOGO_IMAGE} alt="logo" className='w-1/2' />
                </div>
                <img src={COVER_IMAGE} alt="cover" className='h-full' />
            </div>

            {/* Signup Form Section */}
            <div className="flex lg:w-1/2 w-full items-center justify-center bg-gray-100 p-8">
                <div className="bg-white p-8 rounded-md shadow-md max-w-md">
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-gray-800">Create a new account</h1>
                    </div>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <label htmlFor="firstName" className="text-sm font-medium text-gray-700 mb-2">
                                First Name
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-2">
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        {/* <div className="flex flex-col">
                            <label htmlFor="dob" className="text-sm font-medium text-gray-700 mb-2">
                                Date of Birth
                            </label>
                            <input
                                type="date"
                                name="dob"
                                id="dob"
                                value={formData.dob}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div> */}
                        <div className="flex flex-col">
                            <label htmlFor="createPassword" className="text-sm font-medium text-gray-700 mb-2">
                                Create Password
                            </label>
                            <input
                                type="password"
                                name="createPassword"
                                id="createPassword"
                                value={formData.createPassword}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700 mb-2">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-700 text-center py-2 rounded-md text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Sign Up
                        </button>
                    </form>
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Already have an account?{' '}
                            <a href="/login" className="text-blue-600 hover:text-blue-700">
                                Login
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signuppage;

