import React from 'react';
import { Typography, Box, Container } from '@mui/material';

function GarantiaLandingSection() {

    return (
        <Box sx={{ py: 15, backgroundColor: '#011F28', color: 'white' }}>
            <Container sx={{ position: 'relative', textAlign: 'center', padding: { xs: 0, md: 5 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="h4">
                        Garantia
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default GarantiaLandingSection