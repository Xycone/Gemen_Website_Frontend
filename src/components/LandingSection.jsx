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
    padding: 2,
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: 'white',
      color: 'black',
      transform: 'scale(1.05)'
    },
    height: '100%',
    textTransform: 'none',
    backgroundColor: 'white',
    color: 'black',
  };
  return (
    <Box sx={{ py: 15, backgroundColor: '#011F28', color: 'white', }} >
      <Container sx={{ position: 'relative', padding: { xs: 0, md: 5 } }}>
        <Box>
          <Box sx={{ mb: 15, display: 'flex', justifyContent: 'center', width: '100%' }}>
            <Typography variant="h1" sx={{ width: '20%', textAlign: 'center', fontSize: '15rem' }}>G</Typography>
            <Typography variant="h1" sx={{ width: '20%', textAlign: 'center', fontSize: '15rem' }}>E</Typography>
            <Typography variant="h1" sx={{ width: '20%', textAlign: 'center', fontSize: '15rem' }}>M</Typography>
            <Typography variant="h1" sx={{ width: '20%', textAlign: 'center', fontSize: '15rem' }}>E</Typography>
            <Typography variant="h1" sx={{ width: '20%', textAlign: 'center', fontSize: '15rem' }}>N</Typography>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Button
                fullWidth
                variant="contained"
                sx={buttonStyle}
                onClick={navigateToContact}>
                <Box>
                  <Typography variant="h5">
                    Contact Us
                  </Typography>
                  <Typography sx={{ color: 'rgba(0, 0, 0, 0.54)' }}>
                    Questions / Price
                  </Typography>
                </Box>
              </Button>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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