
export function ProjectContent () {
    return (
        <div>
            <div className="bg-gray-900 text-white p-10 rounded-xl max-w-5xl mx-auto shadow-lg">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <img src="/logo.png" alt="Watcher Logo" className="h-16" />
      </div>

      {/* Title & Subtitle */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
        <span className="font-bold">The Watcher</span> - Stay Ahead of Any Topic
      </h2>
      <p className="text-gray-300 text-center max-w-2xl mx-auto mb-6">
        The Watcher is your personal AI research assistant that monitors the internet 24/7 for topics you care about. Just set a topic and an interval, and our AI Watcher Engine delivers smart, concise summaries of important updates. No more endless scrolling or FOMO—stay ahead with focused, relevant information.
      </p>

      {/* Key Features */}
      <h3 className="text-lg font-semibold mb-2">Key Features</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-200 mb-6">
        <li>Create custom topics to monitor anything online, from stock prices to research papers.</li>
        <li>Set personalized update intervals (e.g., hourly, daily) for each topic.</li>
        <li>Receive intelligent, AI-generated summaries of key events, filtering out online noise.</li>
        <li>A focused feed provides only the information you requested, ensuring you're among the first to know.</li>
        <li>Built on a scalable AWS serverless architecture with EventBridge and Lambda for efficiency and reliability.</li>
        <li>Flexible credit system with monthly subscription credits and non-expiring purchased credits.</li>
        <li>Secure payment and subscription management powered by Stripe.</li>
        <li>Modern tech stack including Next.js, TypeScript, and Supabase for a seamless experience.</li>
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
    )
}