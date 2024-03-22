import React from 'react';
import { Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function ContactUs() {
  return (
    <Box sx={{ my: 2 }}>
      <Box sx={{ pb: 15, pt: 15 }}>
        <Box sx={{ mb: 10, fontWeight: 'bold', textAlign: 'center' }}>
          <Typography variant="h4">
            Let's Talk!
            <br />
            How can <span style={{ color: '#DD0000' }}>we help?</span>
          </Typography>
        </Box>
      </Box>

      <Box>
        <Grid container spacing={4}>

          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Card sx={{ borderRadius: 4, padding: 5, backgroundColor: '#F2F5F8', boxShadow: 'none', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <CardContent sx={{ margin: 2 }}>
                <Typography variant="h5" sx={{ mb: 3 }}>Support</Typography>
                <Typography sx={{ mb: 2 }}>
                  Send an email to reach support here.
                </Typography>
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
                  }}>
                  <Typography>Support</Typography>
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Card sx={{ borderRadius: 4, padding: 5, backgroundColor: '#F2F5F8', boxShadow: 'none', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <CardContent sx={{ margin: 2 }}>
                <Typography variant="h5" sx={{ mb: 3 }}>Contact Sales</Typography>
                <Typography sx={{ mb: 2 }}>
                  Fill in the form to contact our sales team.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 2,
                    px: 3,
                    py: 1,
                    overflow: 'hidden',
                    boxShadow: 'none',
                    '&:hover': {
                      boxShadow: 'none',
                    },
                    textTransform: 'none',
                  }}
                >
                  <Typography>Get In Touch</Typography>
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={12} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Card sx={{ borderRadius: 4, padding: 5, backgroundColor: '#F2F5F8', boxShadow: 'none', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <CardContent sx={{ margin: 2 }}>
                <Typography variant="h5" sx={{ mb: 3 }}>Have A Question?</Typography>
                <Typography sx={{ mb: 2 }}>
                  View our FAQ or ask a question!
                </Typography>
                <Link></Link>
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
                  }}>
                  Ask A Question
                </Button>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Box>
    </Box>
  )
}

export default ContactUs