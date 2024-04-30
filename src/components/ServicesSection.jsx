import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Container } from '@mui/material';

// Icons
import ManpowerIconNH from '../assets/ManpowerIconNH.svg';
import ManpowerIconOH from '../assets/ManpowerIconOH.svg';

import APIIconNH from '../assets/APIIconNH.svg';
import APIIconOH from '../assets/APIIconOH.svg';

import SoftwareIconNH from '../assets/SoftwareIconNH.svg';
import SoftwareIconOH from '../assets/SoftwareIconOH.svg';

import RestackingIconNH from '../assets/RestackingIconNH.svg';
import RestackingIconOH from '../assets/RestackingIconOH.svg';


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
        border: '2px solid black',
        borderRadius: { xs: 0, md: 4 },
        boxShadow: 'none',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        '&:hover': {
            border: `2px solid ${color}`
        }
    });

    const imageStyle = {
        width: '40px',
        height: '40px'
    };

    // Data to populate cards
    const services = [
        {
            color: "#00B6DD",
            title: "Manpower Resource",
            description: "Eliminate the hassle of strategic planning, recruitment, training, and development for your projects.",
            iconNH: ManpowerIconNH,
            iconOH: ManpowerIconOH
        },
        {
            color: "#A2C94F",
            title: "API Integration",
            description: "Establish a network comprising of interconnected applications through their APIs.",
            iconNH: APIIconNH,
            iconOH: APIIconOH
        },
        {
            color: "#EB1287",
            title: "System Discovery",
            description: "We automate the manual task of identifying and cataloging recorded voice calls from various legacy recorders within your network.",
            iconNH: SoftwareIconNH,
            iconOH: SoftwareIconOH
        },
        {
            color: "#FF9900",
            title: "Restacking",
            description: "Reallocate your hardware, software, and other IT assets to different departments or individuals based on their specific needs and usage patterns.",
            iconNH: RestackingIconNH,
            iconOH: RestackingIconOH
        }
    ];

    return (
        <Box sx={{ py: 15 }} id="services-section">
            <Container sx={{ padding: { xs: 0, md: 5 } }}>
                <Box sx={{ mb: 15, textAlign: 'center' }}>
                    <Typography variant="h4">
                        Discover Our Services:
                        <br />
                        What <span style={{ color: '#00A2C7' }}>We Can Do</span> For You...
                    </Typography>
                </Box>

                <Box sx={gridContainerStyle}>
                    {services.map((service, index) => (
                        <Box key={index} sx={gridItemStyle}>
                            <Card sx={cardStyle(service.color)} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
                                <CardContent>
                                    <Box sx={{ mb: 3 }}>
                                        <img src={hoveredIndex === index ? service.iconOH : service.iconNH} alt={service.title} style={imageStyle} />
                                    </Box>
                                    <Typography variant="h5" sx={{ mb: 2 }}>{service.title}</Typography>
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