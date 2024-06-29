import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { UilEye, UilEyeSlash } from "@iconscout/react-unicons";
import { ToastContainer, toast } from "react-toastify";

const LoginForm = () => {

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm()

    const [isHidden, setIsHidden] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    async function loginClick(data) {
        const formData = new FormData()
        formData.append('username', data.email)
        formData.append('password', data.password)
        setIsLoading(true)

    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-100">
            <ToastContainer />
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold text-left mb-4">Welcome!</h1>
                <p className="text-left mb-8">Please sign into your account</p>
                <form>
                    <div className="mb-5">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-600"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            {...register('email')}
                            className="border rounded-lg w-full p-3 text-sm"
                            placeholder="Enter your Email"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-600"
                        >
                            Password
                        </label>
                        <div className="border rounded-lg w-full p-3 text-sm flex justify-between">
                            <input
                                type={isHidden ? 'password' : 'text'}
                                id="password"
                                {...register("password", { required: 'This field is required' })}
                                className={`outline-none ${isHidden ? '' : 'border-none focus:border-none'}`}
                                placeholder="Enter password"
                                required
                            />
                            {
                                <div onClick={() => setIsHidden(!isHidden)}>
                                    {isHidden ? <UilEye color="#6c6c6c" /> : <UilEyeSlash color="#6c6c6c" />}
                                </div>
                            }
                        </div>
                    </div>
                    <div className="mb-6 mx-2 flex justify-between items-center">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                {...register('remember')}
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label
                                htmlFor="remember-me"
                                className="ml-2 block text-sm text-gray-900"
                            >
                                Remember me
                            </label>
                        </div>
                        <Link
                            to="/forgot-password"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            <div className="text-sm">Forgot your password?</div>{" "}
                        </Link>
                    </div>
                    <div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md ${isLoading ? 'bg-gray-400 text-gray-800' : 'text-white bg-blue-950 hover:bg-blue-800'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                            onClick={() => { navigate("/dashboard"); handleSubmit(loginClick) }}
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
