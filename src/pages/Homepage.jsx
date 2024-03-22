import React, { useLayoutEffect } from 'react'
import { Box, Container } from '@mui/material'
import LandingSection from '../components/LandingSection';
import WhyUsSection from '../components/WhyUsSection';
import ServicesSection from '../components/ServicesSection';
import SolutionsSection from '../components/SolutionsSection';

function Homepage() {
  useLayoutEffect(() => {
    const href = window.location.href.substring(
      window.location.href.lastIndexOf('#') + 1
    );
    console.log("Href:", href);
    const element = document.getElementById(href);
    console.log("Element:", element);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      console.log("Scrolled to element:", element);
    }
  }, []);

  return (
    <Box sx={{ my: 2 }}>
      <Container>
        <LandingSection />
        <WhyUsSection id="aboutus-section" />
        <SolutionsSection id="solutions-section" />
        <ServicesSection id="services-section" />
      </Container>
    </Box>
  )
}

export default Homepage