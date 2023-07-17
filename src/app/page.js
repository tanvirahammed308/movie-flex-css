import React from 'react';
import HeroSection from './components/HeroSection';
import about from "../../public/img/about.svg"
const page = () => {
  return (
    <>
    <HeroSection title={"Let's Watch Movie Togather" } imageUrl={about}></HeroSection>
      
    </>
  );
};

export default page;