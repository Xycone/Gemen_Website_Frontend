import React from 'react'
import { Box } from '@mui/material'
import LandingSection from '../components/LandingSection';
import WhyUsSection from '../components/WhyUsSection';
import ServicesSection from '../components/ServicesSection';

function Homepage() {

  return (
    <Box sx={{ my: 2 }}>
      <LandingSection />
      <WhyUsSection />
      <ServicesSection />
    </Box>
  )
}

export default Homepage