import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';

// Logo
import Logo from '../assets/Logo.svg'

function Partners() {
    return (
        <Box sx={{ backgroundColor: '#F2F5F8' }} id="partners-section">
            <Container sx={{ padding: { xs: 0, md: 5 } }}>
                <Grid container spacing={2} sx={{ textAlign: 'center' }}>
                    <Grid item xs={12} md={4}>
                        <img src={Logo} alt="Gemen Logo" style={{ height: '80px' }} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Partners