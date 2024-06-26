import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Card, CardContent, Container } from '@mui/material';

// Material UI Icons
import { East } from '@mui/icons-material';

// Icons
import LevelUpArrow from '../assets/LevelUpArrow.svg';

function SolutionsSection() {
    const navigate = useNavigate();

    const navigateToGarantia = () => {
        navigate('/garantia');
    };

    const navigateToAce = () => {
        navigate('/ace');
    };

    const navigateToMediator = () => {
        navigate('/mediator');
    };

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
        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
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
        border: '2px solid #E0E0E0',
        borderRadius: 4,
        boxShadow: 'none',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'center',
        '&:hover': {
            border: `2px solid black`,
            transform: 'scale(1.05)'
        }
    };

    const arrowImageStyle = {
        height: '30px',
    };

    // Data to populate cards
    const solutions = [
        {
            name: "Garantia",
            description: "Ensure integrity, monitoring, and reconciliation of recorded phone calls within your organisation's operations.",
            navigation: navigateToGarantia
        },
        {
            name: "Ace",
            description: "Facilitates the transition of voice data from outdated mediums to more contempory and sustainable storage options.",
            navigation: navigateToAce
        },
        {
            name: "Mediator",
            description: "Allows for seamless migration, integration and replay of audio stored in legacy recorders",
            navigation: navigateToMediator
        }
    ];

    return (
        <Box sx={{ py: 15 }} id="solutions-section">
            <Container sx={{ px: { xs: 2, md: 10 } }}>
                <Box sx={{ mb: 15, textAlign: 'center' }}>
                    <Typography variant="h4">
                        <span style={{ color: '#D8137C' }}>Level Up <img src={LevelUpArrow} alt="LevelUpArrow" style={arrowImageStyle} /></span>
                        <br />
                        Your Workflow With Our Solutions
                    </Typography>
                </Box>

                <Box sx={gridContainerStyle}>
                    {solutions.map((solution, index) => (
                        <Box key={index} sx={gridItemStyle}>
                            <Card sx={cardStyle} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} onClick={solution.navigation}>
                                {/* Picture */}
                                <CardContent sx={{ margin: 3 }}>
                                    <Typography variant="h6" sx={{ mb: 3 }}>{solution.name}</Typography>
                                    <Typography sx={{ mb: 2 }}>{solution.description}</Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Typography sx={{ mr: hoveredIndex === index ? 1 : 0.5, textDecoration: hoveredIndex === index ? 'none' : 'underline' }}>
                                            Learn more
                                        </Typography>
                                        <East sx={{ fontSize: '1rem' }} />
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    )
}

export default SolutionsSection