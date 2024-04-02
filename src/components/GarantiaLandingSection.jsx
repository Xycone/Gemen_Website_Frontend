import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Box, Button, Container } from '@mui/material';

function GarantiaLandingSection() {
    const navigate = useNavigate();

    const navigateToContact = () => {
        navigate('/contactUs');
    };

    return (
        <Box sx={{ pb: 15, pt: 10 }}>
            <Container sx={{ position: 'relative', textAlign: 'center', padding: { xs: 0, md: 5 } }}>
                <Box sx={{ mb: 5 }}>
                    <Typography variant="h5" sx={{ mt: 10, mb: 5 }}>
                        Garantia
                    </Typography>
                    <Box>
                        <Typography variant="h4" sx={{ mb: 2 }}>
                            Enhance Your Business Communications:
                            <br />
                            Garantia, Our Complete Call Management Solution
                        </Typography>
                    </Box>
                    <Typography>Garantia ensures integrity, monitoring, and reconciliation of recorded phone calls within your organisation's operations.</Typography>
                </Box>

                <Button
                    variant="contained"
                    sx={{
                        borderRadius: 2,
                        px: 3,
                        py: 1,
                        whiteSpace: 'nowrap',
                        boxShadow: 'none',
                        '&:hover': {
                            boxShadow: 'none',
                        },
                        textTransform: 'none',
                    }}
                    onClick={navigateToContact}>
                    Contact us
                </Button>
            </Container>
        </Box>
    )
}

export default GarantiaLandingSection