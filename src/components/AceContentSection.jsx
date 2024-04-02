import React from 'react';
import { Typography, Box, Grid, Card, CardContent, Container } from '@mui/material';

function AceContentSection() {
    return (
        <Box sx={{ py: 15 }}>
            <Container sx={{ padding: { xs: 0, md: 5 } }}>
                <Grid container spacing={{ xs: 0, md: 4 }}>
                    <Grid item xs={12} md={6} sx={{ mb: 5, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                        <Card sx={{ borderRadius: { xs: 0, md: 4 }, backgroundColor: '#D9D9D9', boxShadow: 'none', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                            <CardContent sx={{ margin: 2 }}>
                                <Typography sx={{ textAlign: 'center' }}>[ Image Placeholder ]</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ mb: 5, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                        <Box sx={{ padding: 5 }}>
                            <Typography variant="h5" sx={{ mb: 3 }}>
                                Ace
                            </Typography>
                            <Typography>
                                Ace provides voice recording media extraction, digitalisation and conversion into modern long term storage. Ace is able to read and extract media records from voice logger tapes and archive them in newer, long-term storage solutions. This ensures the preservation and accessibility of important voice data.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default AceContentSection