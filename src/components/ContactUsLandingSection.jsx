import React from 'react';
import { Box, Container, Typography } from '@mui/material';

function ContactUsLandingSection() {
    return (
        <Box>
            <Container sx={{ position: 'relative', textAlign: 'center', padding: { xs: 0, md: 5 } }}>
                <Box sx={{ mb: 5 }}>
                    <Typography variant="h4">
                        Let's Talk!
                        <br />
                        How can we <span style={{ color: '#DD0000' }}>assist you?</span>
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default ContactUsLandingSection