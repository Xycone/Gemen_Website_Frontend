import React from 'react';
import { Typography, Box, Grid, Container } from '@mui/material';

// Icons
import Sparkle from '../assets/Sparkle.svg';

function GarantiaContentSection() {
    // Styling 
    const gridContainerStyle = {
        padding: 5,
        borderRadius: 4,
        backgroundColor: '#031C2E',
        color: 'white',
        boxShadow: 'none',
        display: 'flex',
        justifyContent: 'center'
    };

    const gridItemStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    };

    return (
        <Box sx={{ py: 15 }}>
            <Container>
                <Box>
                    <Box sx={{ mb: 15, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <Typography variant="h5" sx={{ mb: 5 }}>
                            Garantia
                        </Typography>
                        <Typography variant="h4" sx={{ mb: 5 }}>
                            A Guaranteed Way To <span style={{ color: '#D8137C' }}>Enhance<img src={Sparkle} style={{ height: '30px', width: '30px' }} /></span>
                            <br />
                            Your Business Communications
                        </Typography>
                        <Typography>
                            Garantia ensures integrity, functionality, and complaince of your organisation's communication
                            <br />
                            system through automated checks, real-time monitoring, and call reconciliation.
                        </Typography>
                    </Box>
                </Box>

                <Box sx={gridContainerStyle}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4} sx={gridItemStyle}>
                            
                        </Grid>
                    </Grid>
                </Box>

                {/* <Box sx={gridContainerStyle}>
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
                </Box> */}
            </Container>
        </Box>
    )
}

export default GarantiaContentSection