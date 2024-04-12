import React from 'react';
import { Typography, Box, Container, Card, CardContent, IconButton } from '@mui/material';

function WhyUsSection() {

    // Data to populate carousel
    const reasons = [
        {
            id: 1,
            content: <Typography variant="h5">Our company owners have over <span style={{ color: '#00B6DD' }}>15 years of experience</span> in the IT Voice industry.</Typography>
        },
        {
            id: 2,
            content: <Typography variant="h5"><span style={{ color: '#EB1287' }}>100+</span> total projects to meet every voice needs</Typography>
        },
        {
            id: 3,
            content: <Typography variant="h5">Experienced collaborating with <span style={{ color: '#A2C94F' }}>governments and banks</span></Typography>
        }
    ];

    const cardStyle = {
        mb: 5,
        mx: 15,
        py: 5,
        px: 20,
        borderRadius: { xs: 0, md: 6 },
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '400px'
    };

    return (
        <Box sx={{ py: 15, backgroundColor: '#011F28', color: 'white' }} id="whyus-section">
            <Container sx={{ padding: { xs: 0, md: 5 } }}>
                <Box sx={{ mb: 10, textAlign: 'center' }}>
                    <Typography variant="h4">
                        Why Gemen?
                        <br />
                        We're <span style={{ color: '#FF9900' }}>happy to share...</span>
                    </Typography>
                </Box>

                <Box>
                </Box>
            </Container >
        </Box >
    )
}

export default WhyUsSection