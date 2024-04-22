import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Box, Container, Button } from '@mui/material';

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
      color: 'white !important',
      backgroundColor: '#1A06FF',
      color: 'black',
      transform: 'scale(1.05)'
    },
    textTransform: 'none',
    color: 'white !important',
    backgroundColor: '#1A06FF',
  };

  return (
    <Box sx={{ pt: 20 }}>
      <Container sx={{ position: 'relative', textAlign: 'center', padding: { xs: 0, md: 5 } }}>
        <Box sx={{ mb: 10 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Streamline your operations
            <br />
            with our automated solutions
          </Typography>

          <Typography sx={{ mb: 5 }}>
            Providing software solutions,
            Delivering consultancy services,
            Developing system automation.
          </Typography>

          <Button
            variant="contained"
            sx={buttonStyle}
            onClick={navigateToContact}>
            Contact Us
          </Button>
        </Box>

        <Box sx={{ backgroundColor: 'grey', minHeight: '450px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography>
            Placeholder Image
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default LandingSection