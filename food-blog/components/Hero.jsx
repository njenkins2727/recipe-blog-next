import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className=" w-full h-screen min-h-screen bg-cover bg-center hero" style={{ 
      backgroundImage: 'url(https://images.unsplash.com/photo-1547573854-74d2a71d0826?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' 
    }}>
      <div className="hero-overlay bg-black bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content flex-col">
          <h1 className="mb-5 text-primary text-6xl font-playfair font-black sm:text-7xl">QUICK. EASY. TASTY.</h1>
          <h2 className="mb-2 text-primary text-xl font-raleway font-bold">WHERE SIMPLICITY MEETS FLAVOUR</h2> {/* I want this font to be agrandir grand but it cost $$*/}
          <Link href='/all-recipes' className="btn bg-primary text-light">
            <button>See All Recipes</button>
          </Link>
      
      </div>
    </div>
  );
}

export default Hero;
