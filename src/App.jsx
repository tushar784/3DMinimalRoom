import React from 'react';
import HeaderSection from './components/HeaderSection';
import SplineDesign from './components/SplineDesign';

function App() {
  return (
    <div className="flex flex-col min-h-screen font-ibm-plex-mono">
      <HeaderSection />
      <div className="flex-1 flex">
        {/* Left side: Text content */}
        <main className="w-1/2 flex flex-col justify-center p-8 bg-[#86B1B1]">
          <h1 className="text-4xl font-bold text-white mb-4 text-left">
          Elevate Your Creativity in 3D
          </h1>
          <p className="text-lg mb-6 text-white text-left">
          Transform your ideas into immersive 3D models and embed them seamlessly into your website. Share with a link and let your designs shine on any device.
          </p>
          <button className="px-4 py-2 rounded-lg bg-blue-500 text-white font-bold mb-8 self-start bg-[#008080]">
            <span>Get started ~&gt;</span>
          </button>
        </main>
        
        {/* Right side: Spline design */}
        <div className="w-1/2">
          <SplineDesign />
        </div>
      </div>
    </div>
  );
}

export default App;