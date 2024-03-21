import React from 'react'
import { Container, Grid, Box, Typography } from '@mui/material';

// Logo
import Logo from '../assets/Logo.svg'

function Partners() {
    return (
        <Box sx={{ width: '100%', backgroundColor: '#f5f5f5', marginTop: 'auto', borderbottom: 1 }}>
            <Container maxWidth="lg" sx={{ padding: 3 }}>
                <Grid container spacing={2} sx={{ textAlign: 'center' }}>
                    <Grid item xs={12} md={6} lg={4}>
                        <img src={Logo} alt="Gemen Logo" style={{ height: '80px' }} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Partners