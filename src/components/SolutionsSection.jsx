import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Card, CardContent, Button, Container } from '@mui/material';

function SolutionsSection() {
    const navigate = useNavigate();

    const navigateToGarantia = () => {
        navigate('/garantia');
    };

    const navigateToAce = () => {
        navigate('/ace');
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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    };

    const cardStyle = {
        borderRadius: { xs: 0, md: 4 },
        padding: 5,
        backgroundColor: '#F2F5F8',
        boxShadow: 'none',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'center'
    };

    const buttonStyle = {
        borderRadius: 2,
        px: 3,
        py: 1,
        boxShadow: 'none',
        '&:hover': {
            boxShadow: 'none',
        },
        textTransform: 'none'
    };   

    return (
        <Box sx={{ py: 15 }} id="solutions-section">
            <Container sx={{ padding: { xs: 0, md: 5 } }}>
                <Box sx={{ mb: 10, textAlign: 'center' }}>
                    <Typography variant="h4">
                        Explore how our solutions
                        <br />
                        could <span style={{ color: '#00B6DD' }}>help you</span>
                    </Typography>
                </Box>

                <Box sx={gridContainerStyle}>
                    <Box sx={gridItemStyle}>
                        <Card sx={cardStyle}>
                            <CardContent sx={{ margin: 3 }}>
                                <Typography sx={{ textAlign: 'center' }}>[ Image Placeholder ]</Typography>
                            </CardContent>
                        </Card>
                    </Box>

                    <Box sx={gridItemStyle}>
                        <Card sx={cardStyle}>
                            <CardContent sx={{ margin: 3 }}>
                                <Typography variant="h5" sx={{ mb: 3 }}>Enhance Your Business Communications</Typography>
                                <Typography sx={{ mb: 2 }}>
                                    Garantia ensures integrity, monitoring, and reconciliation of recorded phone calls within your organisation's operations.
                                </Typography>
                                <Button
                                    variant="contained"
                                    sx={buttonStyle}
                                    onClick={navigateToGarantia}>
                                    Explore Garantia
                                </Button>
                            </CardContent>
                        </Card>
                    </Box>

                    <Box sx={{ ...gridItemStyle, order: { xs: 4, md: 3 } }}>
                        <Card sx={cardStyle}>
                            <CardContent sx={{ margin: 3 }}>
                                <Typography variant="h5" sx={{ mb: 3 }}>Archive Your Old Voices</Typography>
                                <Typography sx={{ mb: 2 }}>
                                    ACE facilitates the transition of voice data from outdated mediums to more contemporary and sustainable storage options.
                                </Typography>
                                <Button
                                    variant="contained"
                                    sx={buttonStyle}
                                    onClick={navigateToAce}>
                                    Explore Ace
                                </Button>
                            </CardContent>
                        </Card>
                    </Box>

                    <Box sx={{ ...gridItemStyle, order: { xs: 3, md: 4 } }}>
                        <Card sx={cardStyle}>
                            <CardContent sx={{ margin: 3 }}>
                                <Typography sx={{ textAlign: 'center' }}>[ Image Placeholder ]</Typography>
                            </CardContent>
                        </Card>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default SolutionsSection