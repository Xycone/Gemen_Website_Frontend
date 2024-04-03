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
                                <Typography variant="h5" sx={{ mb: 3 }}>API Integration</Typography>
                                <Typography>
                                    Facilitates the establishment of a network comprising 
                                    interconnected applications through their APIs.
                                    <br />
                                    <br />
                                    This allows for the seamless flow of operations across your different applications,
                                    enhancing their functionality and making them more efficient.
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
                                <Typography variant="h5" sx={{ mb: 3 }}>Manpower Resource</Typography>
                                <Typography>
                                    Eliminates the hassle of strategic planning, recruitment, training, 
                                    and development. 
                                    <br/>
                                    <br/>
                                    We ensure that the right people are in the right jobs equipped with 
                                    the necessary skills and knowledge to perform their tasks efficiently and effectively.
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
                                <Typography variant="h5" sx={{ mb: 3 }}>System Discovery</Typography>
                                <Typography>
                                    Automates the manual task of identifying and cataloging 
                                    recorded voice calls from various legacy recorders within your network.
                                    <br />
                                    <br />
                                    This enhances accuracy and efficiency in maintaining a precise inventory of voice recordings.
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
                                <Typography variant="h5" sx={{ mb: 3 }}>Restacking</Typography>
                                <Typography>
                                    Involves reallocating hardware, software, 
                                    and other IT assets to different departments or individuals
                                    based on their specific needs and usage patterns.
                                    <br />
                                    <br />
                                    This ensures that the utilisation of every resource is optimised, 
                                    increasing efficiency and productivity within your organisation.
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