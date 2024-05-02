import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'

function MediatorContentSection() {
    // Data to populate
    const features = [
        {
            name: "Integrity",
            description: ""
        },
        {
            name: "Monitoring",
            description: ""
        },
        {
            name: "Reconciliation",
            description: ""
        }
    ];

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
                        <Typography sx={{ textAlign: 'center' }}>Work In Progress...</Typography>
                        {/* <Grid container spacing={6}>
                            <Grid item xs={12} md={6}>
                                <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Typography variant='h5' sx={{ textAlign: 'center' }}>
                                        Wondering What Mediator
                                        <br />
                                        Brings To The Table?
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Typography variant='h5' sx={{ mb: 2 }}>
                                    We're glad you asked...
                                </Typography>
                                <Typography variant='h6'>
                                    1. Optimization & User Management
                                    <br />
                                    2. Audio Quality Assurance
                                    <br />
                                    3. Security Compliance Integration
                                    <br />
                                    4. Centralized Compliance Data Management
                                    <br />
                                    5. Next-Gen Technology Support
                                </Typography>
                            </Grid>
                        </Grid> */}
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default MediatorContentSection
