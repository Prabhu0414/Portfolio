import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react'; // You can also use an SVG if preferred

export function TopButtons  ({ goBack, canGoBack })  {
  const navigate = useNavigate();

  return (
    <div className="bg-neutral-700 p-2 flex items-center space-x-3 w-full h-6">
      {/* Back Arrow */}
      <button
        onClick={goBack}
        disabled={!canGoBack}
        className={`text-white hover:bg-gray-600 rounded-full p-1 transition ${
          !canGoBack ? "opacity-30 cursor-not-allowed" : ""
        }`}
      >
        <ArrowLeft size={16} />
      </button>
     
      <div className="flex items-center space-x-2 ml-2">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-400 rounded-full" />
        <div className="w-3 h-3 bg-green-400 rounded-full" />
      </div>
    </div>
  );
};


