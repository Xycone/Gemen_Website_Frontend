import React from 'react'
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function SolutionsSection() {
    const navigate = useNavigate();

    const navigateToGarantia = () => {
        navigate('/garantia');
    };

    const navigateToAce = () => {
        navigate('/ace');
    };
    return (
        <Box sx={{ pb: 15, pt: 15 }} id="solutions-section">
            {/* Solutions Section */}
            <Box sx={{ mb: 10, textAlign: 'center' }}>
                <Typography variant="h4">
                    Explore how our solutions
                    <br />
                    could <span style={{ color: '#00B6DD' }}>help you</span>
                </Typography>
            </Box>

            <Box>
                <Grid container spacing={{ xs: 0, md: 4 }}>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Card sx={{ borderRadius: { xs: 0, md: 4 }, padding: 5, backgroundColor: '#F2F5F8', boxShadow: 'none', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                            <CardContent sx={{ margin: 2 }}>
                            </CardContent>
                        </Card> 
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Card sx={{ borderRadius: { xs: 0, md: 4 }, padding: 5, backgroundColor: '#F2F5F8', boxShadow: 'none', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                            <CardContent sx={{ margin: 2 }}>
                                <Typography variant="h5" sx={{ mb: 3 }}>Enhance Your Business Communications</Typography>
                                <Typography sx={{ mb: 2 }}>
                                    Garantia ensures integrity, monitoring, and reconciliation of recorded phone calls within your organisation's operations.
                                </Typography>
                                <Button
                                    variant="contained"
                                    sx={{
                                        borderRadius: 2,
                                        px: 3,
                                        py: 1,
                                        boxShadow: 'none',
                                        '&:hover': {
                                            boxShadow: 'none',
                                        },
                                        textTransform: 'none',
                                    }}
                                    onClick={navigateToGarantia}>
                                    Explore Garantia
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', order: { xs: 3, md: 2 } }}>
                        <Card sx={{ borderRadius: { xs: 0, md: 4 }, padding: 5, backgroundColor: '#F2F5F8', boxShadow: 'none', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                            <CardContent sx={{ margin: 2 }}>
                                <Typography variant="h5" sx={{ mb: 3 }}>Archive Your Old Voices</Typography>
                                <Typography sx={{ mb: 2 }}>
                                    ACE facilitates the transition of voice data from outdated mediums to more contemporary and sustainable storage options.
                                </Typography>
                                <Button
                                    variant="contained"
                                    sx={{
                                        borderRadius: 2,
                                        px: 3,
                                        py: 1,
                                        boxShadow: 'none',
                                        '&:hover': {
                                            boxShadow: 'none',
                                        },
                                        textTransform: 'none',
                                    }}
                                    onClick={navigateToAce}>
                                    Explore Ace
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', order: { xs: 2, md: 3 } }}>
                        <Card sx={{ borderRadius: { xs: 0, md: 4 }, padding: 5, backgroundColor: '#F2F5F8', boxShadow: 'none', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                            <CardContent sx={{ margin: 2 }}>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default SolutionsSection