import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Container } from '@mui/material';

// Icons
import ManpowerIconBlackBG from '../assets/ManpowerIconBlackBG.svg';
import SoftwareIconBlackBG from '../assets/SoftwareIconBlackBG.svg';
import APIIconBlackBG from '../assets/APIIconBlackBG.svg'
import RestackingIconBlackBG from '../assets/RestackingIconBlackBG.svg';
import ManpowerIcon from '../assets/ManpowerIcon.svg';
import SoftwareIcon from '../assets/SoftwareIcon.svg';
import APIIcon from '../assets/APIIcon.svg'
import RestackingIcon from '../assets/RestackingIcon.svg';


function ServicesSection() {
    // State to manage hover effect
    const [hoveredIndex, setHoveredIndex] = useState(-1);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(-1);
    };

    // Styling
    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
        gridAutoRows: "1fr",
        gridAutoFlow: "row",
        gap: { xs: 2, md: 8, lg: 4 }
    };

    const gridItemStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    };

    const cardStyle = (color) => ({
        padding: 4,
        color: 'white',
        border: '2px solid white',
        borderRadius: { xs: 0, md: 6 },
        background: 'transparent',
        boxShadow: 'none',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        '&:hover': {
            border: `2px solid ${color}`,
            transform: 'scale(1.01)'
        }
    });

    const imageStyle = {
        width: '55px',
        height: '55px'
    };

    // Data for the cards
    const services = [
        {
            color: "#00B6DD",
            title: "Manpower Resource",
            description: "Eliminate the hassle of strategic planning, recruitment, training, and development.",
            icon: ManpowerIcon,
            blackBgIcon: ManpowerIconBlackBG
        },
        {
            color: "#A2C94F",
            title: "API Integration",
            description: "Establish a network comprising of interconnected applications through their APIs.",
            icon: APIIcon,
            blackBgIcon: APIIconBlackBG
        },
        {
            color: "#EB1287",
            title: "System Discovery",
            description: "We automate the manual task of identifying and cataloging recorded voice calls from various legacy recorders within your network.",
            icon: SoftwareIcon,
            blackBgIcon: SoftwareIconBlackBG
        },
        {
            color: "#FF9900",
            title: "Restacking",
            description: "Reallocate your hardware, software, and other IT assets to different departments or individuals based on their specific needs and usage patterns.",
            icon: RestackingIcon,
            blackBgIcon: RestackingIconBlackBG
        }
    ];

    return (
        <Box sx={{ py: 10, backgroundColor: '#002635', color: 'white' }} id="services-section">
            <Container sx={{ padding: { xs: 0, md: 5 } }}>
                <Box sx={{ mb: 10, textAlign: 'center' }}>
                    <Typography variant="h4">
                        Discover our services:
                        <br />
                        What we can <span style={{ color: '#A2C94F' }}>do for you...</span>
                    </Typography>
                </Box>

                <Box sx={gridContainerStyle}>
                    {services.map((service, index) => (
                        <Box key={index} sx={gridItemStyle}>
                            <Card sx={cardStyle(service.color)} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
                                <CardContent>
                                    <Box sx={{ mb: 3 }}>
                                        <img src={hoveredIndex === index ? service.icon : service.blackBgIcon} alt={service.title} style={imageStyle} />
                                    </Box>
                                    <Typography variant="h6" sx={{ mb: 2 }}>{service.title}</Typography>
                                    <Typography>{service.description}</Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    )
}

export default ServicesSection