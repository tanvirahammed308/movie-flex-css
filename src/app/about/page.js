import React from 'react';
import HeroSection from '../components/HeroSection';
import about1 from '../../../public/img/about1.svg'
const page = () => {
    return (
        <>
         <HeroSection title='Our Story' imageUrl={about1}></HeroSection>
        </>
    );
};

export default page;