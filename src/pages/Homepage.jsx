import React from 'react'
import { Typography, Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Homepage() {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate('/contactUs');
  };

  return (
    <Box sx={{ my: 2 }}>

      <Box sx={{ textAlign: 'center', mb: 5 }}>
        <Typography variant="h5" sx={{ mt: 10, mb: 2, fontWeight: 'bold' }}>
          Streamlining Your Operations
          <br />
          Through Automated Solutions
        </Typography>

        <Typography variant="body">
          Providing software solutions,
          <br />
          Delivering consultancy services,
          <br />
          Developing system automation.
        </Typography>
      </Box>

      <Button
        variant="contained"
        sx={{
          display: 'block',
          margin: 'auto',
        }}
        onClick={navigateToContact}>
        Contact Us
      </Button>

    </Box>
  )
}

export default Homepage