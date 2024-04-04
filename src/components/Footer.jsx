import '../App.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Button } from '@mui/material';

// Logo
import Logo from '../assets/Logo.svg'

function Footer() {
    const navigate = useNavigate();

    const navigateToContact = () => {
        navigate('/contactUs');
    };

    // Styling 
    const gridContainerStyle = {
        mb: 6,
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
        gridAutoFlow: "row"
    };

    const gridContainerStyle2 = {
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
        gridAutoRows: "1fr",
        gridAutoFlow: "row"
    };

    const gridItemStyle = {
        padding: 2,
        display: { xs: 'block', md: 'flex' }
    };

    const gridItemStyle2 = {
        padding: 1,
        display: { xs: 'block', md: 'flex' }
    };

    const buttonStyle = {
        boxShadow: 'none',
        '&:hover': {
            boxShadow: 'none',
            border: '2px solid transparent',
            backgroundColor: '#89D6FB',
            color: '#01303F',
            transform: 'scale(1.1)'
        },
        textTransform: 'none',
        border: '2px solid white',
        background: 'transparent',
        transition: 'background-color 0.3s ease, color 0.3s ease'
    };

    return (
        <Box sx={{ backgroundColor: '#01303F', color: 'white' }}>
            <Container>
                <Box sx={{ padding: 5 }}>
                    {/* Main Footer Section */}
                    <Box sx={gridContainerStyle}>
                        {/* About Us */}
                        <Box sx={gridItemStyle}>
                            <Box>
                                <Typography variant="h5" sx={{ mb: 2 }}>Gemen Technology</Typography>

                                <Box>
                                    <Typography>
                                        Lorem ipsum dolor sit amet. Est suscipit Quis ad animi nostrum ex reprehenderit veniam hic blanditiis ipsa et earum provident in doloremque exercitationem est consequatur voluptas.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={gridItemStyle}>
                            <Box flexGrow={1} sx={{ display: { xs: 'none', md: 'flex' } }} />
                            <Box>
                                <Typography variant="h5" sx={{ mb: 3 }}>Navigation</Typography>
                                <Typography>
                                    <Link to="/homepage#whyus-section" className='FooterNavLink'>
                                        Why Us
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link to="/homepage#solutions-section" className='FooterNavLink'>
                                        Solutions
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link to="/homepage#services-section" className='FooterNavLink'>
                                        Services
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link to="/homepage#partners-section" className='FooterNavLink'>
                                        Partners
                                    </Link>
                                </Typography>
                            </Box>
                            <Box flexGrow={1} sx={{ display: { xs: 'none', md: 'flex' } }} />
                        </Box>

                        <Box sx={gridItemStyle}>
                            <Box flexGrow={1} sx={{ display: { xs: 'none', md: 'flex' } }} />
                            <Box>
                                <Typography variant="h5" sx={{ mb: 3 }}>Get In Touch</Typography>
                                <Typography sx={{ mb: 4 }}>
                                    Interested in asking a question or getting in touch with support?
                                </Typography>
                                <Box>
                                    <Button
                                        variant="contained"
                                        sx={buttonStyle}
                                        onClick={navigateToContact}>
                                        Contact Us
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    {/* Footer Navigation */}
                    <Box sx={gridContainerStyle2}>
                        <Box sx={gridItemStyle2}>
                            {/* Copyright Section */}
                            <Typography sx={{ textAlign: 'center' }}>
                                © Gemen Pte Ltd | All Rights Reserved 2018
                            </Typography>
                        </Box>

                        <Box sx={gridItemStyle2}>
                            <Box flexGrow={1} sx={{ display: { xs: 'none', md: 'flex' } }} />
                            {/* Copyright Section */}
                            <Typography sx={{ textAlign: 'center' }}>
                            </Typography>
                        </Box>
                    </Box>


                </Box>
            </Container >
        </Box >
    )
}

export default Footer
