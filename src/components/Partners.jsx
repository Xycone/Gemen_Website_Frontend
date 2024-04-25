import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Grid, Typography } from '@mui/material';

// Icons
import Underline from '../assets/Underline.svg';

// Logo
import Logo from '../assets/Logo.svg'

// Components
import PartnerTree from './PartnerTree';

function Partners() {
    const navigate = useNavigate();
    const navigateToGemen = () => {
        navigate('/');
    };

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
        justifyContent: 'center'
    };

    // Data to populate
    const services = [
        {
            logo: <img src={Logo} alt="Logo" style={{ height: '80px' }} />,
            url: navigateToGemen
        }
    ];

    return (
        <Box sx={{ py: 15 }}>
            <Container sx={{ padding: { xs: 0, md: 5 } }}>
                <Grid container spacing={10} sx={{ padding: 4 }}>
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
                                <Box onClick={navigateToGemen} key={index} sx={gridItemStyle}>
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