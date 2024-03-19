import { Typography, Box, Grid, Card, Container } from '@mui/material'
import React from 'react'

// Icons
import WaveBackground from '../assets/WaveBackground.svg'

function WhyUsSection() {
    return (
        <Box sx={{ pb: 15, pt: 15 }}>
            {/* Why Us Section */}
            <Box sx={{ mb: 4, textAlign: 'center' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    Why Gemen?
                    <br />
                    <span style={{ color: '#A2C94F' }}>We're glad you asked...</span>
                </Typography>
            </Box>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={4} alignItems="stretch">
                    <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
                        <Card sx={{ borderRadius: 4, padding: 6, textAlign: 'center', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography>
                                Founded in <span style={{ color: '#DD0000', fontWeight: 'bold', fontSize: "1.2rem" }}>2018</span>, our company owners have
                                <br />
                                over <span style={{ color: '#DD0000', fontWeight: 'bold', fontSize: "1.2rem" }}>15</span> years of experience in the IT Voice Industry.
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
                        <Card sx={{ borderRadius: 4, padding: 6, textAlign: 'center', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography>
                                <span style={{ color: '#00B6DD', fontWeight: 'bold', fontSize: "1.2rem" }}>300+</span> total projects to meet every voice needs.
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
                        <Card sx={{ borderRadius: 4, padding: 6, textAlign: 'center', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography>
                                Demonstrated success in collaborations with
                                <br />
                                <span style={{ color: '#FF9900', fontWeight: 'bold', fontSize: "1.2rem" }}>governments & banks.</span>
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
                        <Card sx={{ borderRadius: 4, padding: 6, textAlign: 'center', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography>
                                Dedicated to providing organisations with <span style={{ color: '#EB1287', fontWeight: 'bold', fontSize: "1.2rem" }}>
                                <br />
                                reliable & hassle-free</span> voice recording solutions
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default WhyUsSection