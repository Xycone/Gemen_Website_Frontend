import React from 'react';
import { Typography, Box, Container } from '@mui/material';

function AceLandingSection() {

    return (
        <Box sx={{ py: 15, backgroundColor: '#031C2E', color: 'white' }}>
            <Container sx={{ position: 'relative', textAlign: 'center', padding: { xs: 0, md: 5 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="h4">
                        Ace
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default AceLandingSection