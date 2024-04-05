import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Card, CardContent, Container } from '@mui/material';

// Material UI Icons
import { East } from '@mui/icons-material';

function SolutionsSection() {
    const navigate = useNavigate();

    const navigateToGarantia = () => {
        navigate('/garantia');
    };

    const navigateToAce = () => {
        navigate('/ace');
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
        gap: { xs: 2, md: 8 }
    };

    const gridItemStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    };

    const cardStyle = {
        padding: 4,
        border: '2px solid #E0E0E0',
        borderRadius: { xs: 0, md: 6 },
        background: 'translation',
        boxShadow: 'none',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'center',
        '&:hover': {
            border: `2px solid black`,
            transform: 'scale(1.01)'
        }
    };

    // Data for the cards
    const solutions = [
        {
            name: "Garantia",
            description: "Ensure integrity, monitoring, and reconciliation of recorded phone calls within your organisation's operations.",
            navigation: navigateToGarantia
        },
        {
            name: "Ace",
            description: 'Facilitates the establishment of a network comprising interconnected applications through their APIs.',
            navigation: navigateToAce
        }
    ];

    return (
        <Box sx={{ py: 10 }} id="solutions-section">
            <Container sx={{ padding: { xs: 0, md: 5 } }}>
                <Box sx={{ mb: 10, textAlign: 'center' }}>
                    <Typography variant="h4">
                        View our solutions &
                        <br /> 
                        <span style={{ color: '#E21281' }}>level up</span> your workflow today
                    </Typography>
                </Box>

                <Box sx={gridContainerStyle}>
                    {solutions.map((solution, index) => (
                        <Box key={index} sx={gridItemStyle}>
                            <Card sx={cardStyle} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} onClick={solution.navigation}>
                                {/* Picture */}
                                <CardContent sx={{ margin: 3 }}>
                                    <Typography variant="h5" sx={{ mb: 3 }}>{solution.name}</Typography>
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