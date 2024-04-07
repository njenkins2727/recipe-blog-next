import React from 'react'

const Hero = () => {
  return (
<div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1556911073-52527ac43761?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
    <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md text-white">
                <h1 className="mb-5 text-5xl font-playfair font-light">Quick.Easy.Tasty</h1>
                <p className="mb-5 font-inter italic">Your Destination for Quick, Easy, and Mouthwatering Recipes to Tackle Your Busy Days with Delicious Delights! </p>
            </div>
        </div>
</div>
  )
}

export default Hero