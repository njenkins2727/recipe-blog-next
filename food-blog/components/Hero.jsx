import React from 'react';

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-cover bg-center" style={{ 
      backgroundImage: 'url(https://images.unsplash.com/photo-1547573854-74d2a71d0826?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' 
    }}>
      <div className="hero-overlay bg-black bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="text-primary">
          <h1 className="mb-5 text-7xl font-playfair font-black">QUICK. EASY. TASTY.</h1>
          <p className="mb-5 font-raleway font-bold text-xl">WHERE SIMPLICITY MEETS FLAVOUR</p> {/* I want this font to be agrandir grand but it cost $$*/}
        </div>
      </div>
    </div>
  );
}

export default Hero;
