import React from 'react';
import { Box, Container, Grid } from '@mui/material';

// Logo
import Logo from '../assets/Logo.svg';

function Partners() {
    // Data to populate grid
    const partners = [
        {
            logo: <img src={Logo} alt="Gemen Logo" style={{ height: '70px' }} />
        }
    ];

    return (
        <Box sx={{ py: 3 }}>
            <Container sx={{ position: 'relative', textAlign: 'center', padding: { xs: 0, md: 5 } }}>
                <Grid container spacing={4}>
                    {partners.map((partner, index) => (
                        <Grid key={index} item xs={6} sm={3}>
                            {partner.logo}
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}

export default Partners