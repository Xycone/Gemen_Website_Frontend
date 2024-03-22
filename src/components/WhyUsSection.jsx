import { Typography, Box, Grid, Card } from '@mui/material'
import React from 'react'

function WhyUsSection() {
    return (
        <Box sx={{ pb: 15, pt: 15 }}>
            {/* Why Us Section */}
            <Box sx={{ mb: 10, textAlign: 'center' }}>
                <Typography variant="h3">
                    Why Gemen?
                    <br />
                    We're <span style={{ color: '#A2C94F' }}>glad you asked...</span>
                </Typography>
            </Box>
            <Card sx={{ borderRadius: 4, padding: 10, backgroundColor: '#F2F5F8', boxShadow: 'none', mb: 2 }}>
                <Grid container spacing={8}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4">Our company owners have over <span style={{ color: '#00B6DD' }}>15 years of experience</span> in the IT Voice industry.</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={12}>
                                <Typography variant="h4" sx={{ color: '#FF9900' }}>300+</Typography>
                                <Typography>total projects to meet every voice needs</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>Experienced collaborating with <span style={{ color: '#EB1287' }}>governments and banks</span></Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Card>

            <Box>
            </Box>
        </Box>
    )
}

export default WhyUsSection