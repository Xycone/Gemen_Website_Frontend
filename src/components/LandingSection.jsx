import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Box, Container, Button, Grid } from '@mui/material';

// Icons
import Gemen from '../assets/Gemen.svg';

function LandingSection() {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate('/contactUs');
  };

  // Styling
  const buttonStyle = {
    px: 6,
    py: 3,
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: 'white',
      color: 'black',
      transform: 'scale(1.05)'
    },
    borderRadius: 6,
    textTransform: 'none',
    backgroundColor: 'white',
    color: 'black'
  };

  return (
    <Box sx={{ py: 15, backgroundColor: '#031C2E', color: 'white', }} >
      <Container sx={{ position: 'relative', px: { xs: 0, md: 10 } }}>
        <Box>
          <Box sx={{ mb: 15, display: 'flex', justifyContent: 'center', width: '100%' }}>
            <img src={Gemen} style={{ height: '95%', width: '95%' }} />
          </Box>

          <Grid container spacing={8}>
            <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 0 } }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start' }}>
                <Button
                  variant="contained"
                  sx={buttonStyle}
                  onClick={navigateToContact}>
                  <Box>
                    <Typography variant="h6">
                      Contact Us
                    </Typography>
                    <Typography sx={{ color: 'rgba(0, 0, 0, 0.54)' }}>
                      Questions / A Quote
                    </Typography>
                  </Box>
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'start' }, textAlign: { xs: 'center', md: 'left' } }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  We're a software house that
                </Typography>
                <Typography sx={{ mb: 1 }}>
                  provide software solutions
                  <br />
                  & develop system automation
                  <br />
                  for your business needs
                </Typography >
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container >
    </Box >
  )
}

export default LandingSection