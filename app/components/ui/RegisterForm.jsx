"use client"
import Link from 'next/link';
import React, { useState } from 'react'

const RegisterForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gradeLevel, setGradeLevel] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch("http://localhost:5000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    password,
                    gradeLevel
                })
            });
            // Optionally handle response here
            setLoading(false);
        } catch (error) {
            setLoading(false);
            // Optionally handle error here
        }
    }

    return (
        <>
            <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white">
                Sign up to our platform
            </h3>
            <form className="space-y-4 w-[20rem] m-auto flex flex-col mt-6" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="First Name"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Last Name"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="name@company.com"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="gradeLevel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Grade Level</label>
                    <input
                        type="text"
                        name="gradeLevel"
                        id="gradeLevel"
                        value={gradeLevel}
                        onChange={e => setGradeLevel(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Grade Level"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    disabled={loading}
                >
                    {loading ? "Registering..." : "Register"}
                </button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Already registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Sign in</a>
                </div>
            </form>
            <Link href={'/dreambox'} className='bg-amber-300 p-2'>Go to DreamBox</Link>
        </>
    )
}

export default RegisterForm
