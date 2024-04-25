import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Box, Card, CardContent, Container, Button } from '@mui/material';

function AceContentSection() {
    const navigate = useNavigate();

    const navigateToContact = () => {
        navigate('/contactUs');
    };

    // Styling
    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
        gridAutoRows: "1fr",
        gridAutoFlow: "row",
        gap: { xs: 0, md: 4 }
    };

    const gridItemStyle = {
        mb: 5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    };

    const cardStyle = {
        padding: 2,
        borderRadius: { xs: 0, md: 4 },
        backgroundColor: '#D9D9D9',
        boxShadow: 'none',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'center'
    };

    return (
        <Box sx={{ py: 15 }}>
            <Container sx={{ padding: { xs: 0, md: 5 } }}>
                <Box sx={{ mb: 15, textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ mb: 2 }}>
                        Archive Your Old Voices
                    </Typography>

                    <Typography sx={{ mb: 4 }}>Ace facilitates the transition of voice data from outdated mediums to more contemporary and sustainable storage options.</Typography>

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
                </Box>

                <Box sx={gridContainerStyle}>
                    <Box sx={gridItemStyle}>
                        <Card sx={cardStyle}>
                            <CardContent>
                                <Typography sx={{ textAlign: 'center' }}>[ Image Placeholder ]</Typography>
                            </CardContent>
                        </Card>
                    </Box>

                    <Box sx={gridItemStyle}>
                        <Box sx={{ padding: 5 }}>
                            <Typography variant="h5" sx={{ mb: 3 }}>
                                Ace
                            </Typography>
                            <Typography>
                                Ace provides voice recording media extraction, digitalisation and conversion into modern long term storage. Ace is able to read and extract media records from voice logger tapes and archive them in newer, long-term storage solutions. This ensures the preservation and accessibility of important voice data.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default AceContentSection