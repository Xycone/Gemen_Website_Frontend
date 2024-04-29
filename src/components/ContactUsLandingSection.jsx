import React from 'react';
import { Box, Container, Typography } from '@mui/material';

function ContactUsLandingSection() {
    return (
        <Box sx={{ py: 15, backgroundColor: '#031C2E', color: 'white' }}>
            <Container sx={{ position: 'relative', textAlign: 'center', padding: { xs: 0, md: 5 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="h4">
                        Contact Us
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default ContactUsLandingSection