import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material'
import LandingSection from '../components/LandingSection';
import WhyUsSection from '../components/WhyUsSection';
import ServicesSection from '../components/ServicesSection';
import SolutionsSection from '../components/SolutionsSection';
import Partners from '../components/Partners';

function Homepage() {
  const location = useLocation();

  useEffect(() => {
    const href = window.location.href.substring(
      window.location.href.lastIndexOf('#') + 1
    );
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <Box sx={{ my: 2, padding: 4 }}>
      <LandingSection id="landing-section" />
      <WhyUsSection id="whyus-section" />
      <SolutionsSection id="solutions-section" />
      <ServicesSection id="services-section" />
      <Partners id="partners-section" />
    </Box>
  )
}

export default Homepage