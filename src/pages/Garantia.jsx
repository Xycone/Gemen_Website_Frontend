import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Typography, Box, Button, Grid, Card, CardContent } from '@mui/material';

function Garantia() {
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
            Garantia
          </Typography>
          <Box>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Enhance Your Business Communications:
              <br />
              Garantia, Our Complete Call Management Solution
            </Typography>
          </Box>
          <Typography>Garantia ensures integrity, monitoring, and reconciliation of recorded phone calls within your organisation's operations.</Typography>
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
              Integrity
            </Typography>
            <Typography>
              "Integrity" specialises in automated checks of recorded extensions within an organisation's communication system. It ensures the integrity of recorded communications by implemeneting algorithms defined by the customer. Addtionally, Integrity can automatically disable non-compliant phone extensions, guaranteeing the functionaility and compliance of the recording system before the organisation's operations commence.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 5, display: 'flex', flexDirection: 'column', flexGrow: 1, order: { xs: 4, md: 3 } }}>
          <Box sx={{ padding: 5 }}>
            <Typography variant="h5" sx={{ mb: 3 }}>
              Progressive Monitoring
            </Typography>
            <Typography>
              Progressive Monitoring conducts scheduled tasks designated by the customer to assess the recording system's functionaility. It detects irregularities in the system in near real-time and promptly alerts the customer of any alarms detected. Moreover, Progressive Monitoring compiles historical reports of these alarms. In the event of anomalies, it takes proactive measures such as disabling affected extensions to prevent further disruptions, thus maintaining the stability and dependability of the recording system.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ mb: 5, display: 'flex', flexDirection: 'column', flexGrow: 1, order: { xs: 3, md: 4 } }}>
          <Card sx={{ borderRadius: { xs: 0, md: 4 }, backgroundColor: '#D9D9D9', boxShadow: 'none', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
            <CardContent sx={{ margin: 2 }}>
              <Typography sx={{ textAlign: 'center' }}>[ Image Placeholder ]</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 5, display: 'flex', flexDirection: 'column', flexGrow: 1, order: { xs: 5, md: 6 } }}>
          <Card sx={{ borderRadius: { xs: 0, md: 4 }, backgroundColor: '#D9D9D9', boxShadow: 'none', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
            <CardContent sx={{ margin: 2 }}>
              <Typography sx={{ textAlign: 'center' }}>[ Image Placeholder ]</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} sx={{ mb: 5, display: 'flex', flexDirection: 'column', flexGrow: 1, order: { xs: 5, md: 6 } }}>
          <Box sx={{ padding: 5 }}>
            <Typography variant="h5" sx={{ mb: 3 }}>
              Reconciliation
            </Typography>
            <Typography>
              Reconciliation provides capabilities to generate daily reports that compare the number of calls made with the number of calls recorded in the recording system. This process helps ensure that the recorded data aligns with the actual usage of the communications system.
            </Typography>
          </Box>
        </Grid>
      </Grid>


    </Box>
  )
}

export default Garantia