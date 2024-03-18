import React from 'react'
import { Container, Typography, Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { Email, LocationOn, Phone } from '@mui/icons-material';

// Logo
import Logo from '../assets/Logo.svg'

function Footer() {
    return (
        <Box sx={{ width: '100%', backgroundColor: '#f5f5f5', marginTop: 'auto' }}>
            <Container maxWidth="lg" sx={{ padding: 1 }} >
                <Grid container spacing={2} sx={{ textAlign: 'center' }}>
                    <Grid item xs={12}>
                        <Grid container spacing={2} sx={{ textAlign: 'center', justifyContent: 'center', mb: 1 }}>
                            {/* Quick Navigation and Contact Info Section */}
                            <Grid item xs={12} sm={6} sx={{ textAlign: 'center', justifyContent: 'center' }}>
                                <Typography sx={{ fontSize: '0.9rem', mb: 1 }}>Contact Us</Typography>
                                <Container sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center', mb: 1 }}>
                                    <LocationOn sx={{ fontSize: '0.9rem', mr: 0.5 }} />
                                    <Typography sx={{ fontSize: '0.7rem' }}>
                                        <a href="https://www.google.com/maps/place/Gemen+Pte+Ltd/@1.3102084,103.8389323,17z/data=!3m2!4b1!5s0x31da19fc08c4d9fb:0x4f3412b3621c50dc!4m6!3m5!1s0x31da19461c78640f:0xed591bfcac18c41f!8m2!3d1.310203!4d103.8415072!16s%2Fg%2F11fct8jl5g?entry=ttu"
                                            target="_blank" rel="noopener noreferrer">
                                            10 Winstedt Rd, #03-30A, Singapore 227977
                                        </a>
                                    </Typography>
                                </Container>
                                <Container sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center', mb: 1 }}>
                                    <Email sx={{ fontSize: '0.9rem', mr: 0.5 }} />
                                    <Typography sx={{ fontSize: '0.7rem' }}>sales@gemen.tech</Typography>
                                </Container>
                                <Container sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center', mb: 1 }}>
                                    <Phone sx={{ fontSize: '0.9rem', mr: 0.5 }} />
                                    <Typography sx={{ fontSize: '0.7rem' }}>+65 9009 0081</Typography>
                                </Container>
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ textAlign: 'center', justifyContent: 'center' }}>
                                <Typography sx={{ fontSize: '0.9rem', mb: 1 }}>Quick Links</Typography>
                                <Link to="/homepage">
                                    <Typography sx={{ fontSize: '0.7rem', mb: 1 }}>
                                        Home
                                    </Typography>
                                </Link>
                                <Link to="/homepage#services-section">
                                    <Typography sx={{ fontSize: '0.7rem', mb: 1 }}>
                                        Services
                                    </Typography>
                                </Link>
                                <Link to="#">
                                    <Typography sx={{ fontSize: '0.7rem', mb: 1 }}>
                                        Contact Us
                                    </Typography>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Footer
