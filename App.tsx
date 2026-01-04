
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Services from './components/Services';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <Services />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      
      {/* Interactive AI Business Assistant */}
      <AIAssistant />
    </div>
  );
};

export default App;
