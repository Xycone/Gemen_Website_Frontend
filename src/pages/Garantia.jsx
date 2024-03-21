import React from 'react'
import { Typography, Box, Button, Grid, Card, CardContent } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Garantia() {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate('/contactUs');
  };

  return (
    <Box sx={{ my: 2 }}>
      <Box sx={{ pb: 30, pt: 15, position: 'relative', textAlign: 'center' }}>
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Garantia
          </Typography>
          <Box>
            <Typography variant="h3" sx={{ mb: 2 }}>
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
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} sx={{ mb: 5, display: 'flex', flexDirection: 'column' }}>
          <Card sx={{ borderRadius: 4, padding: 5, backgroundColor: '#F2F5F8', boxShadow: 'none', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <CardContent sx={{ margin: 2 }}>

            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} sx={{ mb: 5, padding: 5, display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Integrity
          </Typography>
          <Typography>
            "Integrity" specialises in automated checks of recorded extensions within an organisation's communication system. It ensures the integrity of recorded communications by implemeneting algorithms defined by the customer. Addtionally, Integrity can automatically disable non-compliant phone extensions, guaranteeing the functionaility and compliance of the recording system before the organisation's operations commence.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 5, padding: 5 , display: 'flex', flexDirection: 'column'}}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Progressive Monitoring
          </Typography>
          <Typography>
            Progressive Monitoring conducts scheduled tasks designated by the customer to assess the recording system's functionaility. It detects irregularities in the system in near real-time and promptly alerts the customer of any alarms detected. Moreover, Progressive Monitoring compiles historical reports of these alarms. In the event of anomalies, it takes proactive measures such as disabling affected extensions to prevent further disruptions, thus maintaining the stability and dependability of the recording system.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{ mb: 5, display: 'flex', flexDirection: 'column' }}>
          <Card sx={{ borderRadius: 4, padding: 5, backgroundColor: '#F2F5F8', boxShadow: 'none', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <CardContent sx={{ margin: 2 }}>

            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} sx={{ mb: 5, display: 'flex', flexDirection: 'column' }}>
          <Card sx={{ borderRadius: 4, padding: 5, backgroundColor: '#F2F5F8', boxShadow: 'none', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <CardContent sx={{ margin: 2 }}>

            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} sx={{ mb: 5, padding: 5, display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Reconciliation
          </Typography>
          <Typography>
            Reconciliation provides capabilities to generate daily reports that compare the number of calls made with the number of calls recorded in the recording system. This process helps ensure that the recorded data aligns with the actual usage of the communications system.
          </Typography>
        </Grid>
      </Grid>


    </Box>
  )
}

export default Garantia