import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Typography, Box, Button, Grid, Card, CardContent } from '@mui/material';

function Ace() {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate('/contactUs');
  };

  // Scroll to top 
  // Fix for react saving scroll position when navigating to different pages
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return (
    <Box sx={{ my: 2, padding: 4 }}>
      <Box sx={{ pb: 30, pt: 15, position: 'relative', textAlign: 'center' }}>
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography variant="h5" sx={{ mb: 5 }}>
            Ace
          </Typography>
          <Box>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Archive Your Old Voices
            </Typography>
          </Box>
          <Typography>Ace facilitates the transition of voice data from outdated mediums to more contemporary and sustainable storage options.</Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            borderRadius: 2,
            px: 3,
            py: 1,
            whiteSpace: 'nowrap',
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
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} sx={{ mb: 5, display: 'flex', flexDirection: 'column' }}>
          <Card sx={{ borderRadius: 4, padding: 5, backgroundColor: '#F2F5F8', boxShadow: 'none', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <CardContent sx={{ margin: 2 }}>

            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} sx={{ mb: 5, padding: 5, display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Ace
          </Typography>
          <Typography>
            Ace provides voice recording media extraction, digitalisation and conversion into modern long term storage. Ace is able to read and extract media records from voice logger tapes and archive them in newer, long-term storage solutions. This ensures the preservation and accessibility of important voice data.
          </Typography>
        </Grid>
      </Grid>

    </Box>
  )
}

export default Ace