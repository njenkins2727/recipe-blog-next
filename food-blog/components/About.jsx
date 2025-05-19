import React from 'react';

const About = () => {
  return (
    <div className='flex flex-col items-center h-screen mt-20 bg-background mb-4 xxsm:mb-0 lg:flex-row lg:mt-0 lg:justify-center lg:gap-36'>
      <h1 id='about' className='font-playfair font-extrabold text-4xl sm:text-5xl text-center text-primary lg:-mt-96 lg:text-left xxl:-mt-80 2xl:text-6xl'>
        Hello! <br/> Welcome to <br/> FoodbyNathan
      </h1>
      <p className='text-light font-raleway bg-secondary rounded-3xl mt-16 h-fit text-lg p-10 xmd:w-96 lg:text-xl lg:mt-36 xl:w-5/12 xl:text-2xl 2xl:text-2xl'>
        This is your destination for quick, easy, and mouthwatering recipes to tackle your busy <br/> days with delicious delights! <br/><br/>

        Our mission is to inspire and empower you  <br/> to create amazing meals without spending  <br/> hours in the kitchen. <br/><br/>

        Explore our collection, discover new  <br/> culinary delights, and let's make cooking  <br/> enjoyable, convenient, and oh-so-delicious  <br/> together! <br/><br/>
        Happy cooking! <br/><br/> 
        - Nathan ❤️
      </p>
    </div>
  );
}

export default About;

//if i increase text size for head and para to text-6 on sm: => then remove from individual tags and add to parent container div that wraps both, two bird one stone = more efficient 

