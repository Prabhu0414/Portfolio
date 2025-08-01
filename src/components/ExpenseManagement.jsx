import expense from '../assets/ExpenseMan_banner.png'
import { SnapShot } from './SnapShot';

export function ExpenseManagement() {
    return (
        <div className=" overflow-y-scroll  absolute w-full h-[calc(100vh-3rem)] text-white overflow-y-auto">
            <div className="w-full h-96 border rounded-2xl m-3 flex items-center justify-center overflow-hidden ">
                <img
                    className="w-full h-full object-fill"
                    src={expense}
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
                              "A desktop app built with Java AWT & Swing and MySQL to track income and expenses. Includes secure login, categorization, and monthly/yearly reports.",

                    </p>

                    {/* Key Features */}
                    <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-200 mb-6">
                        <li>Secure User Authentication: Register and log in with password protection to ensure your financial data remains safe and private.</li>
                        <li>Multi-Account Management: Manage multiple financial accounts simultaneously, whether it’s your bank account, digital wallet, or cash-on-hand.</li>
                        <li>Transaction Categorization: Easily categorize income and expenses (e.g., food, travel, bills) for clearer insights and better financial organization.</li>
                        <li> User-Friendly Interface: Built with Java AWT and Swing to offer a clean, responsive, and intuitive desktop UI experience.</li>
                        <li> Data Storage with MySQL: All user data and transactions are securely stored and managed with robust MySQL integration.</li>
                        <li> Visual Reports & Insights: Automatically generate monthly and yearly reports, complete with summaries and insights, to visualize your spending habits and savings.</li>
                        <li>Financial Planning Tools: Track patterns, forecast budgets, and make informed financial decisions with ease using built-in analytics.</li>
                        
                    </ul>

                    {/* Technologies Used */}
                    <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                        {[
                            'Java', 'Abstract Window Toolkit(AWT)', 'Swing', 'MySQL'
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

            <div>
                <h2 className='mt-6 pb-2 text-gray-400 font-semibold text-2xl dark:text-gray-400 flex itmes-center ml-12'>SnapShot</h2>
                <div className='grid grid-cols-3 gap-4   ml-4 mt-8'>
                    <SnapShot image={expense} />
                    <SnapShot image={expense} />
                    <SnapShot image={expense} />
                    <SnapShot image={expense} />
                    <SnapShot image={expense} />
                    <SnapShot image={expense} />
                    


                </div>

            </div>
        </div>
    );
}