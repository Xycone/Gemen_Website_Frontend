import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Box, Card, CardContent, Container, Button } from '@mui/material';

function GarantiaContentSection() {
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
                        Enhance Your Business Communications
                    </Typography>

                    <Typography sx={{ mb: 4 }}>Garantia ensures integrity, monitoring, and reconciliation of recorded phone calls within your organisation's operations.</Typography>

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
                                Integrity
                            </Typography>
                            <Typography>
                                "Integrity" specialises in automated checks of recorded extensions
                                within an organisation's communication system.
                                It ensures the integrity of recorded communications
                                by implemeneting algorithms defined by the customer.
                                Addtionally, Integrity can automatically disable non-compliant phone extensions,
                                guaranteeing the functionaility and compliance of the recording system
                                before the organisation's operations commence.
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ ...gridItemStyle, order: { xs: 4, md: 3 } }}>
                        <Box sx={{ padding: 5 }}>
                            <Typography variant="h5" sx={{ mb: 3 }}>
                                Progressive Monitoring
                            </Typography>
                            <Typography>
                                Progressive Monitoring conducts scheduled tasks designated by the customer to assess
                                the recording system's functionaility.
                                It detects irregularities in the system in near real-time and promptly alerts the customer
                                of any alarms detected.
                                Moreover, Progressive Monitoring compiles historical reports of these alarms.
                                In the event of anomalies, it takes proactive measures such as disabling
                                affected extensions to prevent further disruptions,
                                thus maintaining the stability and dependability of the recording system.
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ ...gridItemStyle, order: { xs: 3, md: 4 } }}>
                        <Card sx={cardStyle}>
                            <CardContent>
                                <Typography sx={{ textAlign: 'center' }}>[ Image Placeholder ]</Typography>
                            </CardContent>
                        </Card>
                    </Box>

                    <Box sx={{ ...gridItemStyle, order: { xs: 5, md: 6 } }}>
                        <Card sx={{ borderRadius: { xs: 0, md: 4 }, backgroundColor: '#D9D9D9', boxShadow: 'none', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                            <CardContent sx={{ margin: 2 }}>
                                <Typography sx={{ textAlign: 'center' }}>[ Image Placeholder ]</Typography>
                            </CardContent>
                        </Card>
                    </Box>

                    <Box sx={{ ...gridItemStyle, order: { xs: 5, md: 6 } }}>
                        <Box sx={{ padding: 5 }}>
                            <Typography variant="h5" sx={{ mb: 3 }}>
                                Reconciliation
                            </Typography>
                            <Typography>
                                Reconciliation provides capabilities to generate daily reports that compare
                                the number of calls made with the number of calls recorded in the recording system.
                                This process helps ensure that the recorded data aligns
                                with the actual usage of the communications system.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default GarantiaContentSection