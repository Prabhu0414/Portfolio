import task from '../assets/taskboard_banner.png'

export function TaskBoard() {
    return (
       <div className="relative w-full h-[calc(100vh-3rem)] overflow-y-auto overflow-x-hidden ">
            <div className="w-full h-96 border rounded-2xl m-3 flex items-center justify-center overflow-hidden ">
                <img
                    className="w-full h-full object-fill"
                    src={task}
                    alt="Wonder Weave Preview"
                />
            </div>


            <div className='mx-24 -mt-36 relative z-10'>
                <div className="bg-gray-900 text-white p-10 rounded-xl max-w-5xl mx-auto shadow-lg">


                    {/* Title & Subtitle */}
                    <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
                        <span className="font-bold">Wonder Weave</span> - Plan Your Itinerary
                    </h2>
                    <p className="text-gray-300 text-center max-w-2xl mx-auto mb-6">
                       "A full stack task management app using React, Typescript, Node.js, Express, Prisma, and PostgreSQL. Includes auth, CRUD tasks, and responsive dashboard with context API.",
                    </p>

                    {/* Key Features */}
                    <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-200 mb-6">
                        <li>Secure User Authentication: Login and signup system to protect personal task data.</li>
                        <li>Task Managment(CRUD): create, read, update and delete tasks effortlessly.</li>
                        <li>Completed Task View: Switch between active and completed tasks for better tracking.</li>
                        <li>Responsive Dashboard: UI adapts smoothly across desktop, tablet, and mobile screens.</li>
                        <li>Backend with Express.js: Powerful server-side logic built using Express framework.</li>
                        <li>Prisma + Neon DB(PostgresSQL): Efficient ORM with reliabe, cloud-hosted PostgresSQL .</li>
                        <li>Type-safe Codebase: Developed in TypeScript for fewer bugs and improved reliability.</li>
                        <li>React + Context API: Clean and scalable state managment across the app.</li>
                        <li>Optimized for Productivity: Streamlined interface focused on task efficiency and user experince</li>
                    </ul>

                    {/* Technologies Used */}
                    <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                        {[
                            'TypeScript', 'Next.js', 'Supabase', 'PostgreSQL', 'Stripe', 'AWS',
                            'Serverless', 'EventBridge', 'Lambda', 'Node.js', 'Generative AI', 'CSS3', 'Tailwind'
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