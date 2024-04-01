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
    <Box sx={{ my: 4, justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ py: 15, position: 'relative', textAlign: 'center' }}>
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography variant="h5" sx={{ mt: 10, mb: 5 }}>
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
      <Grid container spacing={{ xs: 0, md: 4 }}>
        <Grid item xs={12} md={6} sx={{ mb: 5, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <Card sx={{ borderRadius: { xs: 0, md: 4 }, backgroundColor: '#D9D9D9', boxShadow: 'none', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
            <CardContent sx={{ margin: 2 }}>
              <Typography sx={{ textAlign: 'center' }}>[ Image Placeholder ]</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} sx={{ mb: 5, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <Box sx={{ padding: 5 }}>
            <Typography variant="h5" sx={{ mb: 3 }}>
              Ace
            </Typography>
            <Typography>
              Ace provides voice recording media extraction, digitalisation and conversion into modern long term storage. Ace is able to read and extract media records from voice logger tapes and archive them in newer, long-term storage solutions. This ensures the preservation and accessibility of important voice data.
            </Typography>
          </Box>
        </Grid>
      </Grid>

    </Box>
  )
}

export default Ace