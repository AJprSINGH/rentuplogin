import COVER_IMAGE from '../assets/rentuplogo.jpg';
import LOGO_IMAGE from '../assets/rentitlogo.jpg';
import React from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert'
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

const Loginpage = () => {

    const [formData, setFormData] = React.useState(() => (''));
    const [password, setPassword] = React.useState(() => (''));
    const [showPassword, setShowPassword] = React.useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleChange = (e) => {
        if (formData == 'ajit123@gmail.com' && password == 'ajit123') {
            e.preventDefault();
            swal("Login Successfull", "Welcome to RentUp", "success")
        }
        else if (formData == '' && password == '') {
            swal("Please fill the details", "All fields are mandatory", "warning")
        }
        else {
            e.preventDefault();
            swal("Login Failed", "Invalid Credentials", "error")
        }
    }

    return (
        <div className="flex min-h-screen">
            {/* Cover Image Section */}
            <div className='flex lg:w-1/2 w-full items-center justify-center'>
                <div className='absolute top-[5%] left-[13%] flex flex-col'>
                    <img src={LOGO_IMAGE} alt="logo" className='w-1/2' />
                </div>
                <img src={COVER_IMAGE} alt="cover" className='h-full' />
            </div>

            {/* Login Form Section */}
            <div className="flex lg:w-1/2 w-full items-center justify-center bg-gray-100 p-8">
                <div className="bg-white p-8 rounded-md shadow-md max-w-md">
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-gray-800">Welcome Back!</h1>
                    </div>
                    <form className="space-y-4">
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                placeholder="your@email.com"
                                required
                                // show password in input field
                                value={formData}
                                onChange={(e) => setFormData(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col relative">
                            <label htmlFor="password" className="text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 pr-10"
                                    placeholder="Enter your password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div
                                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                                    onClick={toggleShowPassword}
                                >
                                    {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input type="checkbox" id="remember" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-w-2" />
                                <label htmlFor="remember" className="text-sm ml-2 text-gray-700">
                                    <span>Keep me logged in</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </label>
                            </div>
                            <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                                Forgot Password?
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-black hover:bg-black text-center py-2 rounded-md text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            onClick={handleChange}
                        >
                            Login
                        </button>
                        <div className="flex justify-center items-center">
                            <hr className="w-1/3 border-gray-400 border-2 my-4" />
                            <p className="text-sm text-gray-500 mx-2">or</p>
                            <hr className="w-1/3 border-gray-400 border-2 my-4" />
                        </div>
                        {/* Sign in with Google */}
                        <button
                            type="button"
                            className="w-full bg-red-500 hover:bg-red-700 text-center py-2 rounded-md text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            onClick={() => swal("Sign in with Google clicked", "Redirecting to Google sign in page", "info")}
                        >
                            Sign in with Google
                        </button>
                    </form>
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Don't have an account?{' '}
                            <Link to="/signup" className="text-blue-500 hover:underline">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loginpage;
