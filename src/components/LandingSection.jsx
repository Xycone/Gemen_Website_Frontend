import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Box, Button, Container, Grid } from '@mui/material';

// Logo
import Logo from '../assets/Logo.svg'

function LandingSection() {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate('/contactUs');
  };

  return (
    <Box sx={{ pt: 20 }}>
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

        <Box sx={{ backgroundColor: 'grey', borderRadius: 0, minHeight: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 5 }}>
          <Typography>
            Placeholder Image
          </Typography>
        </Box>

        <Grid container spacing={2} sx={{ textAlign: 'center' }}>
          <Grid item xs={12} md={4}>
            <img src={Logo} alt="Gemen Logo" style={{ height: '80px', backgroundColor: 'grey' }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default LandingSection