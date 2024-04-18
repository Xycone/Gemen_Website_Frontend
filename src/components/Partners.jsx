import React from 'react';
import { Grid } from '@mui/material';

// Logo
import Logo from '../assets/Logo.svg';

function Partners() {
    // Data to populate grid
    const partners = [
        {
            logo: <img src={Logo} alt="Gemen Logo" style={{ height: '70px' }} />
        },
        {
            logo: <img src={Logo} alt="Gemen Logo" style={{ height: '70px' }} />
        },
        {
            logo: <img src={Logo} alt="Gemen Logo" style={{ height: '70px' }} />
        },
        {
            logo: <img src={Logo} alt="Gemen Logo" style={{ height: '70px' }} />
        }
    ];

    return (
        <>
            <Grid container spacing={4} sx={{ padding: 4 }}>
                {partners.map((partner, index) => (
                    <Grid key={index} item xs={6} sm={3}>
                        {partner.logo}
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default Partners