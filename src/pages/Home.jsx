import React from 'react'
import homeHero from '/images/mainimg.jpg'
import Services from '../Components/Services';
import Testimonial from '../Components/Testimonial';
import HeroSection from '../Components/HeroSection';

const Home = () => {
  const heroData = {
    greet: "Welcome to",
    title: "TWS-Store",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit neque, amet dolor harum facilis repudiandae maxime cupiditate cumque sapiente et tempora aspernatur eaque voluptatibus optio? ",
    info2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus facilis nemo fugiat.",
    button: "Shop Now",
    image: homeHero,
  };

  return (
    <div className=''>
     <HeroSection heroData={heroData}/> 
     <Services/>
     <Testimonial/>
      </div>
  )
}

export default Home
