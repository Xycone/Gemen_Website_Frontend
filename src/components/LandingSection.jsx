import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Box, Button, Container } from '@mui/material';

function LandingSection() {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate('/contactUs');
  };

  return (
    <Box sx={{ pb: 15, pt: 10 }}>
      <Container sx={{ position: 'relative', textAlign: 'center', padding: { xs: 0, md: 5 } }}>
        <Box sx={{ mb: 5 }}>
          <Typography variant="h4" sx={{ mt: 10, mb: 2 }}>
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

        <Button
          variant="contained"
          sx={{
            borderRadius: 2,
            px: 3,
            py: 1,
            mb: 20,
            boxShadow: 'none',
            '&:hover': {
              boxShadow: 'none',
            },
            textTransform: 'none',  
          }}
          onClick={navigateToContact}>
          Contact us
        </Button>
        <Box sx={{ backgroundColor: 'grey', borderRadius: { xs: 0, md: 6 }, minHeight: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography>
            Placeholder Image
          </Typography>
        </Box>

      </Container>
    </Box>
  )
}

export default LandingSection