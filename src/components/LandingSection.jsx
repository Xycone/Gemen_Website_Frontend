import React from 'react'
import { Typography, Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function LandingSection() {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate('/contactUs');
  };

  return (
    <Box sx={{ pb: 15, pt: 15, position: 'relative', textAlign: 'center' }} id="landing-section">
      {/* Landing Section */}
      <Box sx={{ textAlign: 'center', mb: 5 }}>
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
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
          textTransform: 'none',
        }}
        onClick={navigateToContact}>
        Contact us
      </Button>
    </Box>
  )
}

export default LandingSection