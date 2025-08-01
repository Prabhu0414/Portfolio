import { useState } from 'react';
import './App.css';
import { Explorer } from './components/Explorer';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { Index } from './pages/Index';
import { Skills } from './pages/Skills';
import { Mail } from './components/Mail';
import { Project } from './pages/Project';
import { Experince } from './components/Experince';
import { WonderWeave } from './components/WonderWeave';
import { ExpenseManagement } from './components/ExpenseManagement';
import { TaskBoard } from './components/TaskBoard';
import { ExperincePage } from './pages/ExperincePage';

function App() {
  const [showExplorer, setShowExplorer] = useState(false);

  // History stack to track visited components
  const [history, setHistory] = useState(['index']);

  // Current component
  const activeComponent = history[history.length - 1];

  // Handle forward navigation
  const handleComponentChange = (component) => {
    if (component !== activeComponent) {
      setHistory((prev) => [...prev, component]);
    }
  };

  // Handle back navigation
  const goBack = () => {
    if (history.length > 1) {
      setHistory((prev) => prev.slice(0, -1));
    }
  };

  return (
    <div className="fixed w-screen overflow-hidden top-0 left-0">

      {/* Navbar contains TopButtons inside */}
      <div className="relative bg-gray-800 text-white flex items-center px-4">
        <Navbar
          onSelect={handleComponentChange}
          goBack={goBack}
          canGoBack={history.length > 1}
        />
      </div>

      <div className="flex h-[calc(100vh-3rem)] mt-6">
        {/* Sidebar */}
        <Sidebar
          onImageClick={() => setShowExplorer(!showExplorer)}
          onSelect={handleComponentChange}
        />

        {/* Explorer + Main */}
        <div className="w-full flex-1 flex transition-all duration-300 ease-in-out">
          {/* Explorer */}
          {showExplorer && (
            <div className="md:w-52">
              <Explorer onSelect={handleComponentChange} />
            </div>
          )}

          {/* Main content area */}
          <div
            className={`w-full bg-stone-900 transition-all duration-300 ease-in-out ${
              showExplorer ? 'ml-0' : ''
            }`}
          >
            {activeComponent === 'index' && <Index />}
            {activeComponent === 'skills' && <Skills />}
            {activeComponent === 'mail' && <Mail />}
            {activeComponent === 'project' && <Project />}
            {activeComponent === 'experince' && <ExperincePage />}
            {activeComponent === 'wonderweave' && <WonderWeave />}
            {activeComponent === 'expensemanagment' && <ExpenseManagement />}
            {activeComponent == 'taskboard' && <TaskBoard />}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='z-10 relative'><Footer /></div>
    </div>
  );
}

export default App;
