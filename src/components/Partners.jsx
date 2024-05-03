import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

// Icons
import Underline from '../assets/Underline.svg';

// Logo
import Logo from '../assets/Logo.svg'
import GEMVoice from '../assets/GEMVoice.svg'

// Components
import PartnerTree from './PartnerTree';

function Partners() {

    // Styling
    const underlineStyle = {
        width: '110%',
        position: 'absolute',
        bottom: '-2px',
        left: '50%',
        transform: 'translateX(-50%)'
    };

    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
        gridAutoRows: "1fr",
        gridAutoFlow: "row",
        gap: { xs: 2, md: 8 }
    };

    const gridItemStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    };

    // Data to populate
    const services = [
        {
            logo: <a href="https://www.gemen.tech/" rel="noopener noreferrer"><img src={Logo} alt="Logo" style={{ height: '80px' }} /></a>
        },
        {
            logo: <a href="https://gemvoice.tech/" target="_blank" rel="noopener noreferrer"><img src={GEMVoice} alt="GEMVoice" style={{ height: '90px' }} /></a>
        }
    ];

    return (
        <Box sx={{ py: 15 }}>
            <Container sx={{ px: { xs: 0, md: 10 } }}>
                <Grid container spacing={10} sx={{ px: 4 }}>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                        <PartnerTree />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box sx={{ textAlign: 'center', mb: 15 }}>
                            <Typography variant="h4">
                                As Partners
                                <br />
                                We <span style={{ color: '#839E47', position: 'relative', display: 'inline-block' }}>Grow<img src={Underline} alt="Underline" style={underlineStyle} /></span> Together
                            </Typography>
                        </Box>

                        <Box sx={gridContainerStyle}>
                            {services.map((service, index) => (
                                <Box key={index} sx={gridItemStyle}>
                                    {service.logo}
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Partners