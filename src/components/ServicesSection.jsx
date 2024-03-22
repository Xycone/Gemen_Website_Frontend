import { Box, Typography, Grid, Card, CardContent, Avatar } from '@mui/material'
import React from 'react'

// Icons
import ManpowerIcon from '../assets/ManpowerIcon.svg'
import ConsultationIcon from '../assets/ConsultationIcon.svg'
import SoftwareIcon from '../assets/SoftwareIcon.svg'
import PlaceholderIcon from '../assets/PlaceholderIcon.svg'

function ServicesSection() {
    return (
        <Box sx={{ pb: 15, pt: 15 }} id="services-section">
            {/* Services Section */}
            <Box sx={{ mb: 10, fontWeight: 'bold', textAlign: 'center' }}>
                <Typography variant="h4">
                    Discover our services:
                    <br />
                    What we can <span style={{ color: '#EB1287' }}>do for you...</span>
                </Typography>
            </Box>
            
            <Box>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6} lg={4}>
                        <Card sx={{ borderRadius: 4, padding: 1, backgroundColor: '#F2F5F8', boxShadow: 'none', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                            <CardContent>
                                <Box sx={{ mb: 2 }}>
                                    <img src={ManpowerIcon} alt="Manpower Icon" style={{ width: '45px', height: '45px' }} />
                                </Box>
                                <Typography variant="h6" sx={{ mb: 1 }}>Manpower Services</Typography>
                                <Typography>
                                    Lorem ipsum dolor sit amet. Vel mollitia autem et ipsam praesentium sed
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Card sx={{ borderRadius: 4, padding: 1, backgroundColor: '#F2F5F8', boxShadow: 'none', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                            <CardContent>
                                <Box sx={{ mb: 2 }}>
                                    <img src={ConsultationIcon} alt="Manpower Icon" style={{ width: '45px', height: '45px' }} />
                                </Box>
                                <Typography variant="h6" sx={{ mb: 1 }}>Consultation</Typography>
                                <Typography>
                                    Lorem ipsum dolor sit amet. Vel mollitia autem et ipsam praesentium sed
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Card sx={{ borderRadius: 4, padding: 1, backgroundColor: '#F2F5F8', boxShadow: 'none', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                            <CardContent>
                                <Box sx={{ mb: 2 }}>
                                    <img src={SoftwareIcon} alt="Manpower Icon" style={{ width: '45px', height: '45px' }} />
                                </Box>
                                <Typography variant="h6" sx={{ mb: 1 }}>Software</Typography>
                                <Typography>
                                    Lorem ipsum dolor sit amet. Vel mollitia autem et ipsam praesentium sed
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Card sx={{ borderRadius: 4, padding: 1, backgroundColor: '#F2F5F8', boxShadow: 'none', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                            <CardContent>
                                <Box sx={{ mb: 2 }}>
                                    <img src={PlaceholderIcon} alt="Manpower Icon" style={{ width: '45px', height: '45px' }} />
                                </Box>
                                <Typography variant="h6" sx={{ mb: 1 }}>Lorem ipsum</Typography>
                                <Typography>
                                    Lorem ipsum dolor sit amet. Vel mollitia autem et ipsam praesentium sed
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default ServicesSection