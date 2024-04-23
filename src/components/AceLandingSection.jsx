import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Box, Button, Container } from '@mui/material';

function AceLandingSection() {
    const navigate = useNavigate();

    const navigateToContact = () => {
        navigate('/contactUs');
    };

    return (
        <Box sx={{ pb: 15, pt: 10 }}>
            <Container sx={{ position: 'relative', textAlign: 'center', padding: { xs: 0, md: 5 } }}>
                <Box sx={{ mb: 5 }}>
                    <Typography variant="h5" sx={{ mt: 10, mb: 5 }}>
                        Ace
                    </Typography>
                    <Box>
                        <Typography variant="h4" sx={{ mb: 2 }}>
                            Archive Your Old Voices
                        </Typography>
                    </Box>
                    <Typography>Ace facilitates the transition of voice data from outdated mediums to more contemporary and sustainable storage options.</Typography>
                </Box>

                <Button
                    variant="contained"
                    sx={{
                        borderRadius: 6,
                        py: 1,
                        px: 2.5,
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

export default AceLandingSection