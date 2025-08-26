"use client"
import React, { useState } from 'react'

const RegisterForm = () => {

    const [name, setName] = useState('Ziorammanna');
    const [email, setEmail] = useState('z@chi');
    const [password, setPassword] = useState('1234');
    const [data, setData] = useState([{userName: name, mail:email, pass: password}]);

    const test = (e) => {
        e.preventDefault();
        setName(e.target.value);
       
    }   
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
       
    }
    const handleNameChange = (e) => {
        setName(e.target.value);
       
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
       
    }

  return (
   <>
   {name }
   {data.userName}
   <h3 class="text-xl font-semibold text-center text-gray-900 dark:text-white">
                    Sign in to our platform
                </h3>
   <form class="space-y-4 w-[20rem] m-auto flex flex-col mt-6" action="#">
                    <div>
                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                        <input type="name" onChange={(e)=>handleChange(e)} name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name" required />
                    </div>
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" onChange={(e)=>handleEmailChange(e)} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div> 
                    <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" onChange={(e)=>handlePasswordChange(e)} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                    </div>
                </form>

   </>
  )
}

export default RegisterForm
