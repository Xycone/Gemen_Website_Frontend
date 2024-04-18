import React from 'react';
import { Typography, Box, Container } from '@mui/material';

// Components
import Partners from './Partners';

function LandingSection() {
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

        <Box sx={{ backgroundColor: 'grey', minHeight: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
          <Typography>
            Placeholder Image
          </Typography>
        </Box>
        <Partners />
      </Container>
    </Box>
  )
}

export default LandingSection