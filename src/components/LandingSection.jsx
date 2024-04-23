import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Box, Container, Button, Grid } from '@mui/material';

function LandingSection() {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate('/contactUs');
  };

  // Styling
  const buttonStyle = {
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: 'white',
      color: 'black',
      transform: 'scale(1.05)'
    },
    borderRadius: 6,
    py: 1,
    px: 2.5,
    textTransform: 'none',
    backgroundColor: 'white',
    color: 'black',
  };
  return (
    <Box sx={{ py: 15, backgroundColor: '#011F28', color: 'white' }}>
      <Container sx={{ position: 'relative', padding: { xs: 0, md: 5 } }}>
        <Box sx={{ mb: 15 }}>
          <Typography variant="h1" sx={{ mb: 10, textAlign: 'center' }}>
            G E M E N
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} md={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h5" sx={{ mb: 5 }}>
                  We're a software house that...
                </Typography>

                <Box sx={{ mb: 5 }}>
                  <Typography sx={{ mb: 1 }}>
                    Provide software solutions,
                  </Typography >
                  <Typography sx={{ mb: 1 }}>
                    Deliver consultancy services,
                  </Typography>
                  <Typography sx={{ mb: 1 }}>
                    Develop system automation.
                  </Typography>
                </Box>

                <Box sx={{ textAlign: 'center' }}>
                  <Button
                    variant="contained"
                    sx={{ ...buttonStyle, mr: 3 }}
                    onClick={navigateToContact}>
                    Contact Us
                  </Button>

                  <Button
                    variant="contained"
                    sx={buttonStyle}
                    onClick={navigateToContact}>
                    View Services
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container >
    </Box >
  )
}

export default LandingSection