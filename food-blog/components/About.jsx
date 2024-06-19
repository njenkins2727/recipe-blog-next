import React from 'react';

const About = () => {
  return (
    <div className='bg-base-100'>
      <div className='flex flex-col mx-5 sm:mx-10 md:mx-20 lg:mx-32 xl:mx-72 my-7'>
        <h1 id='about' className='font-playfair font-semibold text-4xl mt-3 text-center sm:text-left'>
          Welcome to FoodbyNathan!
        </h1>
        <p className='font-inter font-light mt-5 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'>
          At FoodbyNathan, we understand the challenges of juggling a busy schedule while still wanting to enjoy delicious and nutritious meals. That's why we're here to make your life easier with a collection of quick, easy, and mouthwatering recipes that are perfect for your hectic days.<br/><br/>

          Our mission is to inspire and empower you to create amazing meals without spending hours in the kitchen. Whether you're a seasoned chef or a kitchen newbie, our recipes are designed to be simple, yet packed with flavor, so you can whip up a fantastic meal in no time.<br/><br/>

          Explore our collection, discover new culinary delights, and let's make cooking enjoyable, convenient, and oh-so-delicious together!<br/><br/>

          Happy cooking!<br/><br/>

          - Nathan
        </p>
      </div>
    </div>
  );
}

export default About;
