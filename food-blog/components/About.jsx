import React from 'react';

const About = () => {
  return (
    <div className='bg-background'>
      <div className='flex flex-row justify-between h-screen pt-36 mx-28'>
        <h1 id='about' className='font-playfair font-semibold text-6xl text-center text-primary sm:text-left ml-7'>
          Hello! <br/> Welcome to <br/> FoodbyNathan
        </h1>
        <p className='text-light font-raleway bg-secondary rounded-3xl h-full w-6/12 p-8 md:text-lg lg:text-2xl xl:text-3xl'>
          This is your destination for quick, easy, and mouthwatering recipes to tackle your busy days with delicious delights! <br/><br/>

          Our mission is to inspire and empower you to create amazing meals without spending hours in the kitchen. <br/><br/>

          Explore our collection, discover new culinary delights, and let's make cooking enjoyable, convenient, and oh-so-delicious together! <br/><br/>
          Happy cooking! <br/><br/> 
          - Nathan ❤️
        </p>
      </div>
    </div>
  );
}

export default About;
