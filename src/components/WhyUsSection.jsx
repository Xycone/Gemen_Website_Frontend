import React from 'react';
import { Typography, Box, Grid, Card, Container } from '@mui/material';

function WhyUsSection() {
    return (
        <Box sx={{ py: 15 }} id="whyus-section">
            <Container sx={{ padding: { xs: 0, md: 5 } }}>
                <Box sx={{ mb: 10, textAlign: 'center' }}>
                    <Typography variant="h4">
                        Why Gemen?
                        <br />
                        We're <span style={{ color: '#A2C94F' }}>happy to share...</span>
                    </Typography>
                </Box>

                <Card sx={{ borderRadius: { xs: 0, md: 4 }, padding: 10, backgroundColor: '#F2F5F8', boxShadow: 'none', mb: 2 }}>
                    <Grid container spacing={16}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5">Our company owners have over <span style={{ color: '#00B6DD' }}>15 years of experience</span> in the IT Voice industry.</Typography>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Typography variant="h5"><span style={{ color: '#FF9900' }}>100+</span> total projects to meet every voice needs</Typography>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Typography variant="h5">Experienced collaborating with <span style={{ color: '#EB1287' }}>governments and banks</span></Typography>
                        </Grid>
                    </Grid>
                </Card>
            </Container>
        </Box>
    )
}

export default WhyUsSection