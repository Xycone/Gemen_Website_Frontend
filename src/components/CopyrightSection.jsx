import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function CopyrightSection() {
    return (
        <Box sx={{ width: '100%', backgroundColor: '#303030', marginTop: 'auto' }}>
            <Container maxWidth="lg">
                {/* Copyright Section */}
                <Typography sx={{ textAlign: 'center', color: 'white', padding: 2 }} color="textSecondary">
                    © Gemen Pte Ltd | All Rights Reserved 2018
                </Typography>
            </Container>
        </Box>
    )
}

export default CopyrightSection