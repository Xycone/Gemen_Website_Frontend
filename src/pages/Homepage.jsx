import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';

// Components
import LandingSection from '../components/LandingSection';
import WhyUsSection from '../components/WhyUsSection';
import ServicesSection from '../components/ServicesSection';
import SolutionsSection from '../components/SolutionsSection';
import CallToAction from '../components/CallToAction';
import Partners from '../components/Partners';

function Homepage() {
  // Scroll to section, scroll to top if there is no section tag
  const location = useLocation();

  useEffect(() => {
    const href = window.location.href.substring(
      window.location.href.lastIndexOf('#') + 1
    );
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    else {
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  }, [location]);

  return (
    <Box sx={{ mt: 10, justifyContent: 'center', alignItems: 'center' }}>
      <LandingSection />
      <Partners />
      <WhyUsSection id="whyus-section"/>
      <SolutionsSection id="solutions-section" />
      <ServicesSection id="services-section" />
    </Box>
  )
}

export default Homepage