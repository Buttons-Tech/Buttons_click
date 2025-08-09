import {Lightbulb, Handshake,Shield } from 'lucide-react';
const About = () => {
  return (
    <>
    <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#964B00] font">Our Journey: From Vision to Impact</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Since 2015, we've been at the forefront of software innovation, evolving from foundational platforms to cutting-edge Technological solutions. At Buttons, we believe in the power of technology to simplify the complex and empower communities.
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-6 rounded-lg shadow-xl bg-blue-50 transform hover:scale-105 transition duration-300 ease-in-out">
              <Lightbulb className="text-indigo-600 mb-4 mx-auto" size={48} />
              <h3 className="text-2xl font-semibold mb-3 text-indigo-700">Innovative Solutions</h3>
              <p className="text-gray-600">
                We research, design, and code web and mobile applications that are not just functional, but truly transformative.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-xl bg-blue-50 transform hover:scale-105 transition duration-300 ease-in-out">
              <Handshake className="text-indigo-600 mb-4 mx-auto" size={48} />
              <h3 className="text-2xl font-semibold mb-3 text-indigo-700">Local Empowerment</h3>
              <p className="text-gray-600">
                Our focus is on building sustainable software tailored for Nigerian local businesses, government, and military needs.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-xl bg-blue-50 transform hover:scale-105 transition duration-300 ease-in-out">
              <Shield className="text-indigo-600 mb-4 mx-auto" size={48} />
              <h3 className="text-2xl font-semibold mb-3 text-indigo-700">Reliability & Trust</h3>
              <p className="text-gray-600">
                We aim to create software that millions will depend on for the critical aspects of their lives.
              </p>
            </div>
          </div>
        </div>
    </>
  )
}

export default About
