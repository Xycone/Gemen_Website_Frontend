import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';

// Logo
import Logo from '../assets/Logo.svg'

function Partners() {
    return (
        <Box sx={{ py: 15 }}>
            <Container sx={{ padding: { xs: 0, md: 5 } }} id="partners-section">
                <Box sx={{ mb: 10, textAlign: 'center' }}>
                    <Typography variant="h4">
                        As Partners, We <span style={{ color: '#FF9900' }}>Grow Together</span>
                    </Typography>
                </Box>

                <Grid container spacing={2} sx={{ textAlign: 'center', borderRadius: 4, py: 5 }}>
                    <Grid item xs={12} lg={4}>
                        <img src={Logo} alt="Gemen Logo" style={{ height: '80px' }} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Partners