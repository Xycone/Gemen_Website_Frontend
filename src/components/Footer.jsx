import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';

// Logo
import Logo from '../assets/Logo.svg'

function Footer() {
    // Styling 
    const gridContainerStyle = {
        padding: 5,
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
        gridAutoRows: "1fr",
        gridAutoFlow: "row",
    };

    const gridItemStyle = {
        padding: 3,
        display: 'flex',
        justifyContent: { md: 'center' }
    };

    return (
        <Box sx={{ backgroundColor: '#F2F5F8' }}>
            <Container>
                {/* Main Footer Section */}
                <Box sx={gridContainerStyle}>
                    {/* About Us */}
                    <Box sx={gridItemStyle}>
                        <Box>
                            <Typography variant="h6" sx={{ mb: 3 }}>About Us</Typography>

                            <Box>
                                <Typography>
                                    Lorem ipsum dolor sit amet. Est suscipit Quis ad animi nostrum ex reprehenderit veniam hic blanditiis ipsa et earum provident in doloremque exercitationem est consequatur voluptas.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* Explore */}
                    <Box sx={gridItemStyle}>
                        <Box>
                            <Typography variant="h6" sx={{ mb: 3 }}>Explore</Typography>

                            <Box>
                                <Link to="/homepage#whyus-section">
                                    <Typography sx={{ mb: 0.5 }}>
                                        Why Us
                                    </Typography>
                                </Link>
                                <Link to="/homepage#solutions-section">
                                    <Typography sx={{ mb: 0.5 }}>
                                        Solutions
                                    </Typography>
                                </Link>
                                <Link to="/homepage#services-section">
                                    <Typography sx={{ mb: 0.5 }}>
                                        Services
                                    </Typography>
                                </Link>
                                <Link to="/homepage#partners-section">
                                    <Typography sx={{ mb: 0.5 }}>
                                        Partners
                                    </Typography>
                                </Link>
                            </Box>
                        </Box>
                    </Box>

                    {/* Company */}
                    <Box sx={gridItemStyle}>
                        <Box>
                            <Typography variant="h6" sx={{ mb: 3 }}>Company</Typography>

                            <Box>
                                <Link to="/contactUs">
                                    <Typography sx={{ mb: 0.5 }}>
                                        Contact Us
                                    </Typography>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <hr />

                {/* Copyright Section */}
                <Typography sx={{ textAlign: 'center', padding: 2 }}>
                    © Gemen Pte Ltd | All Rights Reserved 2018
                </Typography>
            </Container>
        </Box>
    )
}

export default Footer
