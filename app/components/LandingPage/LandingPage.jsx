import React, { useState, useEffect } from 'react';
import image from '../../../public/img/buttns_bground.png'
import { ChevronRight, Lightbulb, Handshake, Shield, Rocket, Briefcase, Users, Building2, Military, Phone, Mail, MapPin } from 'lucide-react'; // Changed Government to Building2

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState('home'); // State to manage active section for potential future use or internal navigation

  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Effect to set up Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
          // observer.unobserve(entry.target); // Uncomment to animate only once
        } else {
          entry.target.classList.remove('fade-in-up'); // Re-animate on scroll out and in
        }
      });
    }, observerOptions);

    // Observe sections
    document.querySelectorAll('.animate-on-scroll').forEach(section => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-inter text-gray-800">
      {/* Tailwind CSS CDN */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Ensure Inter font is loaded - this is a common practice for local development or within a build process */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-cover bg-center bg-black bg-[url('/img/buttns_bground.png')] "
      //  style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/africa-concept_627494-1785.jpg?w=360')" }}
       >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-black opacity-80"></div>
        <div className="relative z-10 p-8 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl  md:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-down font">
            <span className="block text-yellow-300 font">Buttons:</span> Powering Africa's Future, One Click at a Time.
          </h1>
          <p className="text-xl md:text-2xl mb-10 animate-fade-in-up delay-200">
            Transforming challenges into opportunities with sustainable software solutions for local businesses, government, and the military.
          </p>
          <button
            onClick={() => scrollToSection('about')}
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 animate-bounce-in"
          >
            Discover Our Story <ChevronRight className="inline-block ml-2" size={20} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 bg-white animate-on-scroll">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-indigo-800 font">Our Journey: From Vision to Impact</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Since 2015, we've been at the forefront of software innovation, evolving from foundational platforms to cutting-edge JavaScript/TypeScript solutions. At Buttons, we believe in the power of technology to simplify the complex and empower communities.
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
      </section>

      {/* Our Products Section */}
      <section id="products" className="py-20 px-8 bg-gradient-to-r from-blue-50 to-purple-50 animate-on-scroll">
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
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 px-8 bg-white animate-on-scroll">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-indigo-800 font">Our Grand Vision: The Future of Software</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Our ambition is to build the best software in the world – solutions that millions of people will come to depend on for the easy functioning of the most critical aspects of their lives. We're not just building apps; we're building the future.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-full md:w-1/2 p-6 bg-blue-50 rounded-lg shadow-xl">
              <img
                src="https://placehold.co/600x400/A78BFA/FFFFFF?text=Global+Impact"
                alt="Global Impact"
                className="rounded-lg mb-6 w-full h-auto object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/A78BFA/FFFFFF?text=Image+Unavailable'; }}
              />
              <h3 className="text-2xl font-semibold mb-3 text-indigo-700">Software for Billions</h3>
              <p className="text-gray-600">
                Crafting intuitive and robust software that integrates seamlessly into daily life, making complex tasks simple.
              </p>
            </div>
            <div className="w-full md:w-1/2 p-6 bg-blue-50 rounded-lg shadow-xl">
              <img
                src="https://placehold.co/600x400/6366F1/FFFFFF?text=Sustainable+Growth"
                alt="Sustainable Growth"
                className="rounded-lg mb-6 w-full h-auto object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/6366F1/FFFFFF?text=Image+Unavailable'; }}
              />
              <h3 className="text-2xl font-semibold mb-3 text-indigo-700">Sustainable Innovation</h3>
              <p className="text-gray-600">
                Committed to long-term solutions that are environmentally conscious and socially responsible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action / Partnership Section */}
      <section id="partnership" className="py-20 px-8 bg-gradient-to-br from-indigo-800 to-blue-900 text-white animate-on-scroll">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 font">Ready to Build the Future Together?</h2>
          <p className="text-xl mb-10 opacity-90">
            We are actively seeking visionary entrepreneurs and forward-thinking politicians to partner with us. Let's create impactful, sustainable software that transforms Nigeria.
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 px-10 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Connect with Buttons <ChevronRight className="inline-block ml-2" size={20} />
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 bg-white animate-on-scroll">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-indigo-800 font">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-12">
            Have a project in mind, or want to explore partnership opportunities? We'd love to hear from you.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-blue-50">
              <Phone className="text-indigo-600 mb-3" size={32} />
              <p className="text-lg font-semibold text-gray-700">Phone</p>
              <a href="tel:+2349066596603" className="text-blue-600 hover:underline">+234 906 659 6603</a> {/* Placeholder number */}
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-blue-50">
              <Mail className="text-indigo-600 mb-3" size={32} />
              <p className="text-lg font-semibold text-gray-700">Email</p>
              <a href="mailto:info@buttons.com.ng" className="text-blue-600 hover:underline">info@buttons.click</a> {/* Placeholder email */}
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-blue-50">
              <MapPin className="text-indigo-600 mb-3" size={32} />
              <p className="text-lg font-semibold text-gray-700">Location</p>
              <p className="text-gray-600">Lagos, Nigeria</p> {/* Placeholder location */}
            </div>
          </div>
          {/* Simple Contact Form (Optional, can be expanded) */}
          <div className="mt-16 p-8 bg-blue-50 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-indigo-700">Send Us a Message</h3>
            <form className="grid grid-cols-1 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              ></textarea>
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8 px-8 text-center">
        <div className="max-w-6xl mx-auto">
          <p className="text-lg mb-4">&copy; {new Date().getFullYear()} Buttons. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="#home" onClick={() => scrollToSection('home')} className="hover:text-yellow-400 transition duration-300">Home</a>
            <a href="#about" onClick={() => scrollToSection('about')} className="hover:text-yellow-400 transition duration-300">About Us</a>
            <a href="#products" onClick={() => scrollToSection('products')} className="hover:text-yellow-400 transition duration-300">Products</a>
            <a href="#partnership" onClick={() => scrollToSection('partnership')} className="hover:text-yellow-400 transition duration-300">Partnership</a>
            <a href="#contact" onClick={() => scrollToSection('contact')} className="hover:text-yellow-400 transition duration-300">Contact</a>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        body {
          font-family: 'Inter', sans-serif;
        }

        /* Fade In Down Animation */
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out forwards;
        }

        /* Fade In Up Animation */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }

        /* Bounce In Animation */
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-bounce-in {
          animation: bounceIn 1s ease-out forwards;
        }

        /* Scroll-triggered fade-in-up for sections */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .animate-on-scroll.fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }
        `}
      </style>
    </div>
  );
};

export default App;
