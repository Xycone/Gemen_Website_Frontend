import React from 'react'
import { Box, Container, Grid, Typography, Card, Divider } from '@mui/material'

// Icons
import ThinkingBubble from '../assets/ThinkingBubble.svg';
import ThinkingCloud from '../assets/ThinkingCloud.svg';

function MediatorContentSection() {
    // Data to populate
    const features = [
        {
            name: "Optimisation & User Management",
            description: "Transforms the application's handling of legacy data, streamlining its complexity into well-managed user data within VFC. This involves setting tailored retention periods for specific users and groups."
        },
        {
            name: "Audio Quality Assurance",
            description: "Reveals poor voice audio quality and missing legacy recordings, allowing you to take action to avoid regulatory compliance bank fines."
        },
        {
            name: "Security Compliance",
            description: "Compliance security measurement and demanded compliance features and applications"
        },
        {
            name: "Centralised Compliance Data Management",
            description: "Consolidates the legacy data of all countries into a centralised unified compliance search and replay with enabled user privilege role access control and audit trail log."
        },
        {
            name: "Next-Gen Technology Support",
            description: "Support for the latest technologies (i.e. OS, MSSQL, Web Browsers etc)."
        }
    ];

    // Styling
    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: { md: '1fr', lg: 'repeat(2, 1fr)' },
        gridAutoRows: "1fr",
        gridAutoFlow: "row",
        gap: { xs: 2, md: 6 },
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
                            Mediator
                        </Typography>
                        <Typography variant="h4" sx={{ mb: 5 }}>
                            Our Audio Data
                            <br />
                            <span style={{ color: '#00A2C7' }}>Migration & Management</span> Magic
                        </Typography>
                        <Typography>
                            Mediator is an all in one solution that collates and enables play back of audio data
                            <br />
                            from various recording products and media released in the last two decades.
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 15, backgroundColor: '#031C2E', color: 'white', borderRadius: 4, padding: 4 }}>
                        <Grid container spacing={6}>
                            <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <Box sx={{ width: '85%', height: '85%' }}>
                                        <Box sx={{ position: 'relative', textAlign: 'center' }}>
                                            <img src={ThinkingCloud} style={{ height: '100%', width: '100%' }} />
                                            <Typography variant="h5" sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>
                                                What Are The
                                                <br />
                                                Advantages of Mediator?
                                            </Typography>
                                        </Box>
                                        <img src={ThinkingBubble} style={{ height: '15%', width: '15%' }} />
                                    </Box>
                                </Box>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <Typography variant='h6' sx={{ mb: 5 }}>
                                        What Mediator Brings To The Table:
                                    </Typography>
                                    <Typography>
                                        1. Optimisation & User Management
                                        <br />
                                        <br />
                                        2. Audio Quality Assurance
                                        <br />
                                        <br />
                                        3. Security Compliance
                                        <br />
                                        <br />
                                        4. Centralised Compliance Data Management
                                        <br />
                                        <br />
                                        5. Next-Gen Technology Support
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box sx={gridContainerStyle}>
                        {features.map((feature, index) => (
                            <Box key={index} sx={gridItemStyle}>
                                <Card sx={cardStyle}>
                                    <Typography variant="h6" sx={{ mb: 2 }}>
                                        {feature.name}
                                    </Typography>
                                    <Divider sx={{ borderColor: '#031C2E', borderWidth: '2px', mb: 5 }} />
                                    <Typography>
                                        {feature.description}
                                    </Typography>
                                </Card>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container >
        </Box >
    )
}

export default MediatorContentSection
