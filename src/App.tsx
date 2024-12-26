import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs/Programs';

function App() {
  return (
    <div className="min-h-screen bg-[#020202]">
      <Navbar />
      <Hero />
      <Programs />
    </div>
  );
}

export default App;