import React from 'react';
import { Typography, Box, Card, CardContent, Container } from '@mui/material';

function AceContentSection() {
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
                <Box sx={gridContainerStyle}>
                    <Box sx={gridItemStyle}>
                        <Card sx={cardStyle}>
                            <CardContent sx={{ margin: 2 }}>
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