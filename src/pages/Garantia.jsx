import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';

// Components
import GarantiaLandingSection from '../components/GarantiaLandingSection';
import GarantiaContentSection from '../components/GarantiaContentSection';

function Garantia() {
  // Scroll to top 
  // Fix for react saving scroll position when navigating to different pages
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return (
    <Box sx={{ my: 4, justifyContent: 'center', alignItems: 'center' }}>
      <GarantiaLandingSection />
      <GarantiaContentSection />
    </Box>
  )
}

export default Garantia