import React from 'react';
import { Typography, Box, Grid, Container } from '@mui/material';

// Icons
import NextStepArrow from '../assets/NextStepArrow.svg';

function AceContentSection() {
    // Styling
    const boxStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    };

    return (
        <Box sx={{ py: 15 }}>
            <Container sx={{ padding: { xs: 0, md: 5 } }}>
                <Box>
                    <Box sx={{ mb: 15, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <Typography variant="h5" sx={{ mb: 5 }}>
                            Ace
                        </Typography>
                        <Typography variant="h4" sx={{ mb: 5 }}>
                            Archiving Your Old Voices
                            <br />
                            Is <span style={{ textDecoration: 'line-through', textDecorationColor: '#DD0000' }}>Such</span> <span style={{ color: '#DD0000' }}>No Longer</span> A Hassle
                        </Typography>
                        <Typography>
                            Ace is able to read and extract media records from voice logger tapes and archive them in
                            <br />
                            long-term storage solutions, ensuring the preservation and accessibility of your important voice data.
                        </Typography>
                    </Box>

                    <Box sx={{ backgroundColor: '#031C2E', color: 'white', borderRadius: { xs: 0, md: 4 }, padding: 4 }}>
                        <Grid container spacing={{ xs: 8, md: 2 }}>
                            <Grid item xs={12} md={3.5} sx={boxStyle}>
                                <Typography variant="h5" sx={{ mb: 2 }}>
                                    Extract
                                </Typography>
                                <Typography>
                                    Ace extracts the voice recording from voice logger tapes
                                </Typography>
                            </Grid>

                            <Grid item xs={12} md={0.75} sx={boxStyle}>
                                <Box>
                                    <Box sx={{ transform: { xs: 'rotate(90deg)', md: 'none' } }}>
                                        <img src={NextStepArrow} style={{ height: '20px', width: '100%' }} />
                                    </Box>
                                </Box>
                            </Grid>

                            <Grid item xs={12} md={3.5} sx={boxStyle}>
                                <Typography variant="h5" sx={{ mb: 2 }}>
                                    Digitalise
                                </Typography>
                                <Typography>
                                    The analog voice recordings are digitised into digital format
                                </Typography>
                            </Grid>

                            <Grid item xs={12} md={0.75} sx={boxStyle}>
                                <Box>
                                    <Box sx={{ transform: { xs: 'rotate(90deg)', md: 'none' } }}>
                                        <img src={NextStepArrow} style={{ height: '20px', width: '100%' }} />
                                    </Box>
                                </Box>
                            </Grid>

                            <Grid item xs={12} md={3.5} sx={boxStyle}>
                                <Typography variant="h5" sx={{ mb: 2 }}>
                                    Convert
                                </Typography>
                                <Typography>
                                    Convert & stores in format suitable for long-term storage
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default AceContentSection