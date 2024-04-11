import React, { useState, useEffect } from 'react';
import { Typography, Box, Container, Slide, Stack, Card, CardContent, IconButton, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// Material UI Icons
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function WhyUsSection() {
    const theme = useTheme();

    // Carousel
    const [displayCards, setDisplayCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    const cardsPerPage = 1;

    // Functions to navigate the carousell
    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1)
    };

    useEffect(() => {
        setDisplayCards(reasons);
    }, [])

    // Data to populate cards
    const reasons = [
        {
            content: <Typography variant="h5">Our company owners have over <span style={{ color: '#00B6DD' }}>15 years of experience</span> in the IT Voice industry.</Typography>
        },
        {
            content: <Typography variant="h5"><span style={{ color: '#EB1287' }}>100+</span> total projects to meet every voice needs</Typography>
        },
        {
            content: <Typography variant="h5">Experienced collaborating with <span style={{ color: '#A2C94F' }}>governments and banks</span></Typography>
        }
    ];

    // Styling
    const carouselStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    };

    const cardStyle = {
        py: 5,
        px: 20,
        borderRadius: { xs: 0, md: 6 },
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '400px'
    };

    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
        gridAutoRows: "1fr",
        gridAutoFlow: "row",
        gap: 8
    };

    return (
        <Box sx={{ py: 10, backgroundColor: '#011F28', color: 'white' }} id="whyus-section">
            <Container sx={{ padding: { xs: 0, md: 5 } }}>
                <Box sx={{ mb: 10, textAlign: 'center' }}>
                    <Typography variant="h4">
                        Why Gemen?
                        <br />
                        We're <span style={{ color: '#FF9900' }}>happy to share...</span>
                    </Typography>
                </Box>

                {/* Carousel */}
                <Box sx={carouselStyle}>
                    <Box sx={{ width: '100%' }}>
                        {displayCards
                            .slice(
                                currentPage * cardsPerPage,
                                currentPage * cardsPerPage + cardsPerPage
                            )
                            .map((card, index) => (
                                <Slide key={index} direction={'right'} in={true}>
                                    <Card sx={cardStyle}>
                                        <CardContent>
                                            {card.content}
                                        </CardContent>
                                    </Card>
                                </Slide>
                            ))}
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <IconButton
                        onClick={handlePrevPage}
                        sx={{
                            color: 'white',
                            margin: 5
                        }}
                        disabled={currentPage === 0}
                    >
                        <NavigateBeforeIcon />
                    </IconButton>

                    <IconButton
                        onClick={handleNextPage}
                        sx={{
                            color: 'white',
                            margin: 5
                        }}
                        disabled={currentPage >= Math.ceil((displayCards.length || 0) / cardsPerPage) - 1}
                    >
                        <NavigateNextIcon />
                    </IconButton>
                </Box>
            </Container >
        </Box >
    )
}

export default WhyUsSection