import React from 'react'
import { Briefcase, Users, Building2, Shield, Rocket } from 'lucide-react';

const Products = () => {
  return (
   <>
    <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-indigo-800 font">Our Innovations in Action</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            We are proud to present our suite of products, each designed to address specific needs and drive efficiency across various sectors.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Existing Product 1 */}
            <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-indigo-500 transform hover:scale-105 transition duration-300 ease-in-out">
              <Briefcase className="text-indigo-600 mb-4 mx-auto" size={48} />
              <h3 className="text-2xl font-semibold mb-3 text-indigo-700">Business Efficiency Suite</h3>
              <p className="text-gray-600">
                Streamlining operations for local businesses, from inventory management to customer relations.
              </p>
            </div>
            {/* Existing Product 2 */}
            <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-green-500 transform hover:scale-105 transition duration-300 ease-in-out">
              <Users className="text-green-600 mb-4 mx-auto" size={48} />
              <h3 className="text-2xl font-semibold mb-3 text-indigo-700">Community Engagement Platform</h3>
              <p className="text-gray-600">
                Connecting communities and facilitating seamless communication for local initiatives.
              </p>
            </div>
            {/* Existing Product 3 */}
            <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-yellow-500 transform hover:scale-105 transition duration-300 ease-in-out">
              <Building2 className="text-yellow-600 mb-4 mx-auto" size={48} /> {/* Changed Government to Building2 */}
              <h3 className="text-2xl font-semibold mb-3 text-indigo-700">Public Service Automation</h3>
              <p className="text-gray-600">
                Automating key government services to enhance citizen access and administrative efficiency.
              </p>
            </div>
            {/* Existing Product 4 */}
            <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-red-500 transform hover:scale-105 transition duration-300 ease-in-out">
              <Shield className="text-red-600 mb-4 mx-auto" size={48} />
              <h3 className="text-2xl font-semibold mb-3 text-indigo-700">Secure Data Management</h3>
              <p className="text-gray-600">
                Robust solutions ensuring data integrity and security for sensitive operations.
              </p>
            </div>
            {/* New Product in Development */}
            <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-purple-500 transform hover:scale-105 transition duration-300 ease-in-out md:col-span-2 lg:col-span-1 lg:col-start-2">
              <Rocket className="text-purple-600 mb-4 mx-auto" size={48} />
              <h3 className="text-2xl font-semibold mb-3 text-indigo-700">Niger State Ride-Sharing App</h3>
              <p className="text-gray-600">
                Currently in development, this app will revolutionize transportation for the Niger State government and its citizens.
              </p>
            </div>
          </div>
        </div>
   </>
  )
}

export default Products
