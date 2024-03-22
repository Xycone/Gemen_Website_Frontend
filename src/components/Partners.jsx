import React from 'react'
import { Container, Grid, Box, Typography } from '@mui/material';

// Logo
import Logo from '../assets/Logo.svg'

function Partners() {
    return (
        <Box sx={{ pb: 15, pt: 15 }} id="partners-section">
            {/* Partners Section */}
            <Box sx={{ mb: 10, fontWeight: 'bold', textAlign: 'center' }}>
                <Typography variant="h3">
                    We Grow <span style={{ color: '#FF9900' }}>Together</span>
                </Typography>
            </Box>
            <Grid container spacing={2} sx={{ textAlign: 'center', borderRadius: 4, py: 5 }}>
                <Grid item xs={12} lg={4}>
                    <img src={Logo} alt="Gemen Logo" style={{ height: '80px' }} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Partners