import wonderweave from '../assets/wonderweave_banner.png'
import wonderweave2 from '../assets/ww_banner2.png'

export function WonderWeave() {
  return (
   <div className="relative w-full h-[calc(100vh-3rem)] overflow-y-auto overflow-x-hidden ml-2">
      <div className="w-full h-96 border rounded-2xl m-3 flex items-center justify-center overflow-hidden ">
        <img
          className="w-full h-full object-fill"
          src={wonderweave2}
          alt="Wonder Weave Preview"
        />
      </div>


      <div className='mx-24 -mt-36 '>
        <div className="bg-gray-900 text-white p-10 rounded-xl max-w-5xl mx-auto shadow-lg">


          {/* Title & Subtitle */}
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
            <span className="font-bold">Wonder Weave</span> - Plan Your Itinerary
          </h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-6">
            A MERN stack travel itinerary planner that allows users to create, edit, and save personalized travel plans. Features secure JWT-based login, a responsive React and Tailwind CSS UI, and curated itineraries for popular destinations.
          </p>

          {/* Key Features */}
          <h3 className="text-lg font-semibold mb-2">Key Features</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-200 mb-6">
            <li>Custom itinerary Builder: Create and manage personlized travel plans with hand-picked attraction, restaurants, cafes, hotels, and more.</li>
            <li>Secure Authentication with JWT: Implements token-based authentication using JWT with HTTP-only cookies to ensure user data is safe and sessions are secure</li>
            <li> MongoDB Data Storage: Efficiently stores user data, itineraries, and destination details using MongoDB for scalability and flexibility..</li>
            <li>Responsive Frontend with Tailwind CSS: Clean, intuitive, and fully responsive UI built with React and styled using Tailwind CSS for a modern look and feel across all devices.</li>
            <li> MERN Stack Architecture: Leverages the full power of MongoDB, Express.js, React, and Node.js for a robust and modular development approach.</li>
            <li>API & Routing with Express: Backend routes and business logic handled through Express.js, enabling smooth communication between frontend and database.</li>
            <li>Curated Destination Highlights: Homepage showcases pre-curated popular destination itineraries for travel inspiration and quick access..</li>
            <li>User-Friendly UX: Designed to simplify travel planning while offering flexibility and customization for each trip..</li>
          </ul>

          {/* Technologies Used */}
          <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {[
              'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS', 'JWT'
            ].map(tech => (
              <span
                key={tech}
                className="bg-gray-800 text-gray-100 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* <ProjectBanner url={tailwind} />
      <div className='mx-24 -mt-36 relative z-10'><ProjectContent /> </div> */}
    </div>
  );
}
