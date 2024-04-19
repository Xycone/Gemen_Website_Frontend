import React, { useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent, Container, Input, IconButton } from '@mui/material';

// Material UI Icons
import { Clear, Search } from '@mui/icons-material';

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

    // Search
    const [displayItems, setDisplayItems] = useState([]);
    const [search, setSearch] = useState('');

    const onSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const searchServices = () => {
        setDisplayItems(services.filter(service => service.title.toLowerCase().includes(search.toLowerCase()) ||
            service.description.toLowerCase().includes(search.toLowerCase())))
    };

    const onSearchKeyDown = (e) => {
        if (e.key === "Enter") {
            searchServices();
        }
    };

    const onClickSearch = () => {
        searchServices();
    };

    const onClickClear = () => {
        setSearch('');
        setDisplayItems(services);
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
        border: '2px solid #E0E0E0',
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
            description: "Eliminate the hassle of strategic planning, recruitment, training, and development.",
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

    useEffect(() => {
        setDisplayItems(services);
    }, []);

    return (
        <Box sx={{ py: 15 }} id="services-section">
            <Container sx={{ padding: { xs: 0, md: 5 } }}>
                <Box sx={{ mb: 15, textAlign: 'center' }}>
                    <Typography variant="h4">
                        Discover our services:
                        <br />
                        What we can <span style={{ color: '#00A2C7' }}>do for you...</span>
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 5, ml: 2 }}>
                    <Input value={search} placeholder="Search for services"
                        onChange={onSearchChange}
                        onKeyDown={onSearchKeyDown}
                    >
                    </Input>
                    <IconButton
                        onClick={onClickSearch}>
                        <Search />
                    </IconButton>
                    <IconButton
                        onClick={onClickClear}>
                        <Clear />
                    </IconButton>
                </Box>

                <Box sx={gridContainerStyle}>
                    {displayItems.map((service, index) => (
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