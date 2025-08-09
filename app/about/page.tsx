// src/app/page.tsx
// This is the main landing page component for the Future Steps Fund web application.
// It uses Next.js features like Image optimization and client components for interactivity.
"use client"; // This directive makes this component a Client Component, enabling hooks and interactivity.

import Image from 'next/image'; // Next.js Image component for optimized images.
import Link from 'next/link';   // Next.js Link component for client-side navigation.
// import { Button } from '@/components/ui/button'; // Custom Button component (see components/ui/button.tsx)
import AnimatedCounter from '@/components/AnimatedCounter'; // Custom AnimatedCounter component (see components/AnimatedCounter.tsx)
import Button from '../components/button';
// import Button from '../components/ui/button';

export default function HomePage() {
  return (
    // Main container with a subtle gradient background for a modern feel.
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800 font-inter">
      {/* Header Section: Fixed at the top, includes logo, navigation, and main CTA buttons. */}
      <header className="sticky top-0 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm z-50 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo and App Name */}
          <Link href="/" className="text-2xl font-bold text-blue-800 flex items-center group">
            <span className="text-3xl mr-2 transform group-hover:rotate-6 transition-transform duration-300">🚀</span> Future Steps Fund
          </Link>
          {/* Desktop Navigation Links */}
          <nav className="space-x-6 hidden md:flex">
            <Link href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium">How It Works</Link>
            <Link href="/schools" className="text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium">Schools</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium">About Us</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium">Contact</Link>
          </nav>
          {/* Call to Action Buttons in Header */}
          <div className="space-x-3 flex items-center">
            <Link href="/donate">
              <Button className="bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold hover:from-green-600 hover:to-teal-700 shadow-lg px-5 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105">
                Donate Now
              </Button>
            </Link>
            <Link href="/apply">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-5 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105">
                Apply for Funds
              </Button>
            </Link>
          </div>
          {/* Mobile Menu Icon (Hidden on Desktop) */}
          {/* You would implement a hamburger menu here for mobile */}
          <div className="md:hidden">
            {/* <Button variant="outline" size="icon">
              <MenuIcon className="h-6 w-6" />
            </Button> */}
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section: The main visual impact area with headline, sub-headline, and primary CTAs. */}
        <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
          {/* Background Image with Overlay */}
          <Image
            src="/images/hero-children.jpg" // Path to your hero image in the public folder.
            alt="Children learning happily, symbolizing a brighter future"
            layout="fill" // Makes the image fill the parent container.
            objectFit="cover" // Ensures the image covers the area, cropping if necessary.
            quality={90} // Image quality for optimization.
            className="z-0 opacity-80" // Lower opacity to allow text to stand out.
            priority // Preload this image as it's above the fold.
          />
          {/* Futuristic Gradient Overlay for readability and aesthetic. */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700/70 via-blue-500/70 to-indigo-600/70 z-10"></div>
          {/* Content Wrapper */}
          <div className="relative z-20 text-white p-6 max-w-5xl">
            {/* Main Headline with animation */}
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg animate-fade-in-up">
              Unlock Their Potential. Invest in Tomorrow.
            </h1>
            {/* Sub-headline with animation delay */}
            <p className="mt-6 text-xl md:text-2xl font-light opacity-90 animate-fade-in-up delay-200">
              Future Steps Fund empowers children in our community by covering their school fees, building brighter futures.
            </p>
            {/* Call to Action Buttons with animation delay and hover effects. */}
            <div className="mt-12 space-x-4 animate-fade-in-up delay-400">
              <Link href="/donate">
                <Button className="bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold hover:from-green-600 hover:to-teal-700 shadow-xl px-9 py-4 text-xl rounded-full transform hover:scale-105 transition-all duration-300 animate-pulse-light">
                  Donate Now
                </Button>
              </Link>
              <Link href="/apply">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700 px-9 py-4 text-xl rounded-full transform hover:scale-105 transition-all duration-300">
                  Apply for Funds
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Impact Section: Displays key metrics with animated counters to show tangible results. */}
        <section className="py-20 bg-white text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">See the Difference Your Support Makes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Funds Raised Card */}
              <div className="flex flex-col items-center p-8 bg-blue-50 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-blue-100">
                <div className="text-6xl font-extrabold text-blue-600 mb-4">
                  <AnimatedCounter end={50000000} duration={2500} prefix="₦" /> {/* Example value */}
                </div>
                <p className="text-xl font-semibold text-gray-700">Funds Raised</p>
              </div>
              {/* Children Supported Card */}
              <div className="flex flex-col items-center p-8 bg-green-50 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-green-100">
                <div className="text-6xl font-extrabold text-green-600 mb-4">
                  <AnimatedCounter end={150} duration={2000} suffix="+" /> {/* Example value */}
                </div>
                <p className="text-xl font-semibold text-gray-700">Children Supported</p>
              </div>
              {/* Schools Partnered Card */}
              <div className="flex flex-col items-center p-8 bg-indigo-50 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-indigo-100">
                <div className="text-6xl font-extrabold text-indigo-600 mb-4">
                  <AnimatedCounter end={10} duration={1800} suffix="+" /> {/* Example value */}
                </div>
                <p className="text-xl font-semibold text-gray-700">Schools Partnered</p>
              </div>
            </div>
            {/* Testimonial Section */}
            <div className="mt-16 bg-gray-50 p-8 rounded-lg shadow-inner max-w-4xl mx-auto">
              <blockquote className="text-2xl font-light italic text-gray-700 leading-relaxed">
                &ldquo;Before Future Steps Fund, my child&apos;s education was uncertain. Now, they thrive and dream bigger than ever before, thanks to this incredible community!&rdquo;
                <footer className="mt-6 text-xl font-medium text-gray-800 flex items-center justify-center">
                  <span className="mr-3 text-blue-500">✨</span> &mdash; Mrs. Amina Yusuf, Grateful Parent
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* How It Works Section: Explains the process for both donors and applicants. */}
        <section id="how-it-works" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-14">Simple Steps to a Brighter Future</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* For Donors Card */}
              <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-3xl font-semibold text-blue-700 mb-8 flex items-center">
                  <span className="text-5xl mr-4 text-red-500">❤️</span> For Donors
                </h3>
                <div className="space-y-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-5 shadow-md">1</div>
                    <div>
                      <h4 className="text-2xl font-semibold text-gray-900 mb-1">Choose Your Impact</h4>
                      <p className="text-gray-600 text-lg">Select a one-time or recurring donation amount that suits your generosity.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-5 shadow-md">2</div>
                    <div>
                      <h4 className="text-2xl font-semibold text-gray-900 mb-1">Secure Your Gift</h4>
                      <p className="text-gray-600 text-lg">Complete your payment securely via our trusted payment gateway.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-5 shadow-md">3</div>
                    <div>
                      <h4 className="text-2xl font-semibold text-gray-900 mb-1">Watch Them Grow</h4>
                      <p className="text-gray-600 text-lg">Receive updates on the collective impact of your generosity and see lives transformed.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-12 text-center">
                  <Link href="/donate">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-300">Donate Now</Button>
                  </Link>
                </div>
              </div>

              {/* For Applicants Card */}
              <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-3xl font-semibold text-green-700 mb-8 flex items-center">
                  <span className="text-5xl mr-4 text-yellow-500">📚</span> For Applicants
                </h3>
                <div className="space-y-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-5 shadow-md">1</div>
                    <div>
                      <h4 className="text-2xl font-semibold text-gray-900 mb-1">Submit Your Application</h4>
                      <p className="text-gray-600 text-lg">Fill out our secure online application form with all necessary details.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-5 shadow-md">2</div>
                    <div>
                      <h4 className="text-2xl font-semibold text-gray-900 mb-1">Verification Process</h4>
                      <p className="text-gray-600 text-lg">Our dedicated team confidentially reviews and verifies your eligibility.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-5 shadow-md">3</div>
                    <div>
                      <h4 className="text-2xl font-semibold text-gray-900 mb-1">Future Steps Taken</h4>
                      <p className="text-gray-600 text-lg">Approved funds are disbursed directly to your child&apos;s school, securing their education.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-12 text-center">
                  <Link href="/apply">
                    <Button className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-300">Apply for Funds</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Partner Schools Section: Highlights schools that benefit from the fund. */}
        <section className="py-20 bg-blue-50 text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Partner Schools</h2>
            <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
              We partner with reputable schools across our district, ensuring your donations directly fund quality education where it's needed most.
            </p>
            {/* Example School Cards (replace with dynamic data from a database later) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-blue-800 mb-2">Victory Primary School</h3>
                <p className="text-gray-600 text-lg">📍 District Central, Kaduna</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-blue-800 mb-2">Global Heights Academy</h3>
                <p className="text-gray-600 text-lg">📍 Northside, Lagos</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-blue-800 mb-2">Bright Future College</h3>
                <p className="text-gray-600 text-lg">📍 East End, Abuja</p>
              </div>
            </div>
            <div className="mt-14">
              <Link href="/schools">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-full text-xl transform hover:scale-105 transition-all duration-300">
                  View All Partner Schools
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Final Call to Action Section: A strong, inviting call to action before the footer. */}
        <section className="py-20 bg-gradient-to-r from-blue-700 to-indigo-800 text-white text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to make an impact or need support?</h2>
            <p className="text-xl opacity-90 mb-12 max-w-3xl mx-auto">
              Join the Future Steps Fund community today and help us build a brighter future for every child.
            </p>
            <div className="space-x-4 flex justify-center">
              <Link href="/donate">
                <Button className="bg-white text-blue-700 font-semibold hover:bg-gray-100 shadow-lg px-9 py-4 text-xl rounded-full transform hover:scale-105 transition-all duration-300">
                  Donate Now
                </Button>
              </Link>
              <Link href="/apply">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700 px-9 py-4 text-xl rounded-full transform hover:scale-105 transition-all duration-300">
                  Apply for Funds
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section: Contains copyright, quick links, and social media. */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and Mission */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Future Steps Fund</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Empowering futures through education, guided by faith and community, one step at a time.</p>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-300">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/schools" className="hover:text-white transition-colors">Schools</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-300">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/donate" className="hover:text-white transition-colors">Donate</Link></li>
              <li><Link href="/apply" className="hover:text-white transition-colors">Apply</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          {/* Connect With Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-300">Connect With Us</h4>
            <div className="flex space-x-5 text-3xl">
              {/* Replace with actual Font Awesome icons if you install them, or use SVGs */}
              <a href="#" aria-label="Facebook" className="hover:text-blue-500 transition-colors"><i className="fab fa-facebook-square"></i></a>
              <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition-colors"><i className="fab fa-twitter-square"></i></a>
              <a href="#" aria-label="Instagram" className="hover:text-pink-400 transition-colors"><i className="fab fa-instagram-square"></i></a>
            </div>
          </div>
        </div>
        {/* Copyright Information */}
        <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-8">
          &copy; {new Date().getFullYear()} Future Steps Fund. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
