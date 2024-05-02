import React from 'react';
import { Typography, Box, Grid, Container, Card, Divider } from '@mui/material';

// Icons
import Sparkle from '../assets/Sparkle.svg';
import Alarm from '../assets/Alarm.svg';
import Report from '../assets/Report.svg';
import Integrity from '../assets/Integrity.svg';
import ArrowLeft from '../assets/ArrowLeft.svg';

function GarantiaContentSection() {
    // Data to populate
    const features = [
        {
            name: "Integrity",
            description:
                <Typography>
                    Specialises in automated checks of recorded extensions within
                    an organisation's communication system.
                    <br />
                    <br />
                    Able to define the algorithms used for
                    automated checks based on your needs and requirements.
                    <br />
                    <br />
                    Can automatically disable non-compliant phone extensions
                    to guarantee the functionaility and compliance of your
                    recording system before your organisation's operations
                    commence.
                </Typography>
        },
        {
            name: "Monitoring",
            description:
                <Typography>
                    Conducts scheduled tasks designated by you to assess your recording system's functionality .
                    <br />
                    <br />
                    Detects irregularities in the system in near real-time and promptly alerts you of any alarms detected.
                    These alarms are compiled into a record.
                    <br />
                    <br />
                    Takes proactive measures such as disabling affected extensions on your recording system to prevent
                    further disruptions.
                </Typography>
        },
        {
            name: "Reconciliation",
            description:
                <Typography>
                    Able to generate daily reports that compare the number of calls made with the number of calls
                    recorded in your recording system.
                    <br />
                    <br />
                    Ensures that the recorded data aligns with the actual usage of the system.
                </Typography>
        }
    ];

    // Styling
    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
        gridAutoRows: "1fr",
        gridAutoFlow: "row",
        gap: { xs: 2, md: 6 }
    };

    const gridItemStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    };

    const cardStyle = {
        padding: 4,
        borderRadius: 4,
        boxShadow: 'none',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
    };

    return (
        <Box sx={{ py: 15 }}>
            <Container sx={{ px: { xs: 2, md: 10 } }}>
                <Box>
                    <Box sx={{ mb: 15, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <Typography variant="h5" sx={{ mb: 5 }}>
                            Garantia
                        </Typography>
                        <Typography variant="h4" sx={{ mb: 5 }}>
                            The Guaranteed Way To <span style={{ color: '#D8137C' }}>Enhance<img src={Sparkle} style={{ height: '30px', width: '30px' }} /></span>
                            <br />
                            Your Business Communications
                        </Typography>
                        <Typography>
                            Garantia ensures integrity, functionality, and complaince of your organisation's communication
                            <br />
                            system through automated checks, real-time monitoring, and call reconciliation.
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 15, backgroundColor: '#031C2E', color: 'white', borderRadius: 4, padding: 4 }}>
                        <Grid container spacing={6}>
                            <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
                                <Grid container spacing={6}>
                                    <Grid item xs={12} sx={{ ...gridItemStyle, textAlign: 'center', alignItems: 'center' }}>
                                        <Box sx={{ mb: 2 }}>
                                            <img src={Integrity} style={{ height: '35px', width: '35px' }} />
                                        </Box>
                                        <Typography variant="h5">
                                            Integrity
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} sm={6} sx={{ ...gridItemStyle, textAlign: 'center', alignItems: 'center' }}>
                                        <Box sx={{ mb: 2 }}>
                                            <img src={Alarm} style={{ height: '35px', width: '35px' }} />
                                        </Box>
                                        <Typography variant="h5">
                                            Monitoring
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} sm={6} sx={{ ...gridItemStyle, textAlign: 'center', alignItems: 'center' }}>
                                        <Box sx={{ mb: 2 }}>
                                            <img src={Report} style={{ height: '35px', width: '35px' }} />
                                        </Box>
                                        <Typography variant="h5">
                                            Reconciliation
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
                                <Typography variant='h5' sx={{ textAlign: 'center', mb: 5 }}>
                                    Explore some of
                                    <br />
                                    Garantia's features
                                </Typography>
                                <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                                    <img src={ArrowLeft} alt="ArrowLeft" style={{ height: '100px' }} />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box sx={gridContainerStyle}>
                        {features.map((feature, index) => (
                            <Box sx={gridItemStyle}>
                                <Card key={index} sx={cardStyle}>
                                    <Typography variant="h5" sx={{ mb: 2 }}>
                                        {feature.name}
                                    </Typography>
                                    <Divider sx={{ borderColor: '#031C2E', borderWidth: '2px', mb: 5 }} />

                                    {feature.description}
                                </Card>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container >
        </Box >
    )
}

export default GarantiaContentSection