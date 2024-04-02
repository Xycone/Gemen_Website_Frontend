import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Container } from '@mui/material';

// Icons
import ManpowerIcon from '../assets/ManpowerIcon.svg';
import SoftwareIcon from '../assets/SoftwareIcon.svg';
import APIIcon from '../assets/APIIcon.svg'
import RestackingIcon from '../assets/RestackingIcon.svg';


function ServicesSection() {
    return (
        <Box sx={{ py: 15 }} id="services-section">
            <Container sx={{ padding: { xs: 0, md: 5 } }}>
                <Box sx={{ mb: 10, textAlign: 'center' }}>
                    <Typography variant="h4">
                        Discover our services:
                        <br />
                        What we can <span style={{ color: '#EB1287' }}>do for you...</span>
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={6} lg={4}>
                        <Card sx={{ borderRadius: { xs: 0, md: 4 }, padding: 1, backgroundColor: '#F2F5F8', boxShadow: 'none', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                            <CardContent>
                                <Box sx={{ mb: 2 }}>
                                    <img src={APIIcon} alt="API Icon" style={{ width: '45px', height: '45px' }} />
                                </Box>
                                <Typography variant="h6" sx={{ mb: 1 }}>API Integration</Typography>
                                <Typography>
                                    Lorem ipsum dolor sit amet. Vel mollitia autem et ipsam praesentium sed
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <Card sx={{ borderRadius: { xs: 0, md: 4 }, padding: 1, backgroundColor: '#F2F5F8', boxShadow: 'none', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                            <CardContent>
                                <Box sx={{ mb: 2 }}>
                                    <img src={ManpowerIcon} alt="Manpower Icon" style={{ width: '45px', height: '45px' }} />
                                </Box>
                                <Typography variant="h6" sx={{ mb: 1 }}>Manpower Resource</Typography>
                                <Typography>
                                    Lorem ipsum dolor sit amet. Vel mollitia autem et ipsam praesentium sed
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <Card sx={{ borderRadius: { xs: 0, md: 4 }, padding: 1, backgroundColor: '#F2F5F8', boxShadow: 'none', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                            <CardContent>
                                <Box sx={{ mb: 2 }}>
                                    <img src={SoftwareIcon} alt="Software Icon" style={{ width: '45px', height: '45px' }} />
                                </Box>
                                <Typography variant="h6" sx={{ mb: 1 }}>System Discovery</Typography>
                                <Typography>
                                    Lorem ipsum dolor sit amet. Vel mollitia autem et ipsam praesentium sed
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <Card sx={{ borderRadius: { xs: 0, md: 4 }, padding: 1, backgroundColor: '#F2F5F8', boxShadow: 'none', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                            <CardContent>
                                <Box sx={{ mb: 2 }}>
                                    <img src={RestackingIcon} alt="Restacking Icon" style={{ width: '45px', height: '45px' }} />
                                </Box>
                                <Typography variant="h6" sx={{ mb: 1 }}>Restacking</Typography>
                                <Typography>
                                    Lorem ipsum dolor sit amet. Vel mollitia autem et ipsam praesentium sed
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default ServicesSection