import React from 'react'


const Vision = () => {
  return (
    <>
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
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = 'https://placehold.co/600x400/A78BFA/FFFFFF?text=Image+Unavailable';
                }}
              />
              <h3 className="text-2xl font-semibold mb-3 text-indigo-700">Software for Billions</h3>
              <p className="text-gray-600">
                Crafting intuitive and robust software that integrates seamlessly into daily life, making complex tasks simple.
              </p>
              <img
                src="https://placehold.co/600x400/6366F1/FFFFFF?text=Sustainable+Growth"
                alt="Sustainable Growth"
                className="rounded-lg mb-6 w-full h-auto object-cover"
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = 'https://placehold.co/600x400/6366F1/FFFFFF?text=Image+Unavailable';
                }}
              />
               
              <h3 className="text-2xl font-semibold mb-3 text-indigo-700">Sustainable Innovation</h3>
              <p className="text-gray-600">
                Committed to long-term solutions that are environmentally conscious and socially responsible.
              </p>
            </div>
          </div>
        </div>
    </>
  )
}

export default Vision
