import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';

// Components
import AceLandingSection from '../components/AceLandingSection';
import AceContentSection from '../components/AceContentSection';
import SolutionSelectionSection from '../components/SolutionSelectionSection';

function Ace() {
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
    <Box sx={{ mt: 10, justifyContent: 'center', alignItems: 'center' }}>
      {/* <AceLandingSection /> */}
      <AceContentSection />
      {/* <SolutionSelectionSection /> */}
    </Box>
  )
}

export default Ace