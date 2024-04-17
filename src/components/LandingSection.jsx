import React from 'react';
import { Typography, Box, Button, Container } from '@mui/material';

// Logo
import Logo from '../assets/Logo.svg'

function LandingSection() {

  // Data to populate cards
  const partners = [
    {
      logo: <img src={Logo} alt="Gemen Logo" style={{ height: '80px' }} />
    },
    {
      logo: <img src={Logo} alt="Gemen Logo" style={{ height: '80px' }} />
    },
    {
      logo: <img src={Logo} alt="Gemen Logo" style={{ height: '80px' }} />
    },
    {
      logo: <img src={Logo} alt="Gemen Logo" style={{ height: '80px' }} />
    }
  ];

  return (
    <Box sx={{ pt: 20, pb: 10 }}>
      <Container sx={{ position: 'relative', textAlign: 'center', padding: { xs: 0, md: 5 } }}>
        <Box sx={{ mb: 10 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Streamlining Your Operations
            <br />
            Through Automated Solutions
          </Typography>

          <Typography>
            Providing software solutions,
            Delivering consultancy services,
            Developing system automation.
          </Typography>
        </Box>

        <Box sx={{ backgroundColor: 'grey', borderRadius: 0, minHeight: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 7 }}>
          <Typography>
            Placeholder Image
          </Typography>
        </Box>


        <Box class='scroller'>
          <marquee>
            <Box class='scroller_inner'>
              {partners.map((partner, index) => (
                <Box class='scroller_item' key={index}>
                  {partner.logo}
                </Box>
              ))}
            </Box>
          </marquee>
        </Box>
      </Container>
    </Box>
  )
}

export default LandingSection