import React from 'react';
import { Box, Typography, Card, CardContent, Container } from '@mui/material';

// Icons
import ManpowerIcon from '../assets/ManpowerIcon.svg';
import SoftwareIcon from '../assets/SoftwareIcon.svg';
import APIIcon from '../assets/APIIcon.svg'
import RestackingIcon from '../assets/RestackingIcon.svg';


function ServicesSection() {
    // Styling
    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
        gridAutoRows: "1fr",
        gridAutoFlow: "row",
        gap: 4
    };

    const gridItemStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    };

    const cardStyle = {
        padding: 2,
        borderRadius: { xs: 0, md: 4 },
        backgroundColor: '#F2F5F8',
        boxShadow: 'none',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'center'
    };

    const imageStyle = {
        width: '45px',
        height: '45px'
    };

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

                <Box sx={gridContainerStyle}>
                    <Box sx={gridItemStyle}>
                        <Card sx={cardStyle}>
                            <CardContent>
                                <Box sx={{ mb: 2 }}>
                                    <img src={APIIcon} alt="API Icon" style={imageStyle} />
                                </Box>
                                <Typography variant="h5" sx={{ mb: 1 }}>API Integration</Typography>
                                <Typography>
                                    Lorem ipsum dolor sit amet. Vel mollitia autem et ipsam praesentium sed
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>

                    <Box sx={gridItemStyle}>
                        <Card sx={cardStyle}>
                            <CardContent>
                                <Box sx={{ mb: 2 }}>
                                    <img src={ManpowerIcon} alt="Manpower Icon" style={imageStyle} />
                                </Box>
                                <Typography variant="h5" sx={{ mb: 1 }}>Manpower Resource</Typography>
                                <Typography>
                                    Lorem ipsum dolor sit amet. Vel mollitia autem et ipsam praesentium sed
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>

                    <Box sx={gridItemStyle}>
                        <Card sx={cardStyle}>
                            <CardContent>
                                <Box sx={{ mb: 2 }}>
                                    <img src={SoftwareIcon} alt="Software Icon" style={imageStyle} />
                                </Box>
                                <Typography variant="h5" sx={{ mb: 1 }}>System Discovery</Typography>
                                <Typography>
                                    Lorem ipsum dolor sit amet. Vel mollitia autem et ipsam praesentium sed
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>

                    <Box sx={gridItemStyle}>
                        <Card sx={cardStyle}>
                            <CardContent>
                                <Box sx={{ mb: 2 }}>
                                    <img src={RestackingIcon} alt="Restacking Icon" style={imageStyle} />
                                </Box>
                                <Typography variant="h5" sx={{ mb: 1 }}>Restacking</Typography>
                                <Typography>
                                    Lorem ipsum dolor sit amet. Vel mollitia autem et ipsam praesentium sed
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default ServicesSection