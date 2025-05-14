import React from 'react';

const About = () => {
  return (
    <div className='flex flex-col items-center h-screen mt-20 bg-background mb-4 xxsm:mb-0 lg:flex-row lg:mt-0 lg:justify-center lg:gap-36'>
      <h1 id='about' className='font-playfair font-semibold text-4xl sm:text-5xl text-center text-primary lg:-mt-96 lg:text-left xl:-mt-64'>
        Hello! <br/> Welcome to <br/> FoodbyNathan
      </h1>
      <p className='text-light font-raleway bg-secondary rounded-3xl mt-16 h-fit text-lg p-10 xmd:w-96 lg:text-xl xl:w-6/12'>
        This is your destination for quick, easy, and mouthwatering recipes to tackle your busy days with delicious delights! <br/><br/>

        Our mission is to inspire and empower you to create amazing meals without spending hours in the kitchen. <br/><br/>

        Explore our collection, discover new culinary delights, and let's make cooking enjoyable, convenient, and oh-so-delicious together! <br/><br/>
        Happy cooking! <br/><br/> 
        - Nathan ❤️
      </p>
    </div>
  );
}

export default About;

