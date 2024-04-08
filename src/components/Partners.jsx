import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';

// Logo
import Logo from '../assets/Logo.svg'

function Partners() {
    return (
        <Box id="partners-section">
            <Container sx={{ padding: { xs: 0, md: 5 } }}>
                <Box sx={{ mb: 5, textAlign: 'center' }}>
                    <Typography>
                        Meet our partners
                    </Typography>
                </Box>
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