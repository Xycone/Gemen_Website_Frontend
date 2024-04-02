import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';

// Components
import ContactUsLandingSection from '../components/ContactUsLandingSection';
import ContactUsContentSection from '../components/ContactUsContentSection';
import ContactUsFAQSection from '../components/ContactUsFAQSection';

function ContactUs() {

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
    <Box sx={{ my: 4, py: 15, justifyContent: 'center', alignItems: 'center' }}>
      <ContactUsLandingSection />
      <ContactUsContentSection />
      <ContactUsFAQSection id="faq-section"/>
    </Box >
  )
}

export default ContactUs