import React from 'react'
import { Box, Container } from '@mui/material'
import LandingSection from '../components/LandingSection';
import WhyUsSection from '../components/WhyUsSection';
import ServicesSection from '../components/ServicesSection';
import SolutionsSection from '../components/SolutionsSection';

function Homepage() {

  return (
    <Box sx={{ my: 2 }}>
      <Container>
        <LandingSection />
        <WhyUsSection />
        <SolutionsSection />
        <ServicesSection />
      </Container>
    </Box>
  )
}

export default Homepage