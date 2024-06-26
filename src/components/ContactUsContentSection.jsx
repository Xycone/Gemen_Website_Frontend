import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Grid, Card, CardContent, Typography, Button, Dialog, CircularProgress } from '@mui/material';
import { LocationOn, Email, Phone } from '@mui/icons-material';

// Components
import EmailForm from './EmailForm';

function ContactUsContentSection() {
    const navigate = useNavigate();

    const navigateToFaqSection = () => {
        navigate('/contactUs#faq-section');
    };

    // Contact Support Form
    const [contactSupportOpen, setContactSupportOpen] = useState(false);
    const handleContactSupportFormOpen = () => {
        setContactSupportOpen(true);
    };

    // Logic to prevent multiple form submission by rapidly clicking
    const [isDisabled, setIsDisabled] = useState(false);


    // Styling
    const cardStyle = {
        padding: 4,
        border: { xs: 'none', md: '2px solid black' },
        borderRadius: 4,
        boxShadow: 'none',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1
    };

    const buttonStyle = {
        display: 'flex',
        alignItems: 'center',
        boxShadow: 'none',
        '&:hover': {
            boxShadow: 'none',
            color: 'white !important',
            backgroundColor: '#1A06FF',
            color: 'black',
            transform: 'scale(1.05)'
        },
        borderRadius: 6,
        py: 1,
        px: 2.5,
        textTransform: 'none',
        color: 'white !important',
        backgroundColor: '#1A06FF',
    };

    return (
        <Box sx={{ pt: 15, pb: 5 }}>
            <Container sx={{ px: { xs: 0, md: 10 }  }}>
                <Box sx={{ mb: 15, textAlign: 'center' }}>
                    <Typography variant="h4">
                        Let's Talk!
                        <br />
                        How Can We <span style={{ color: '#00A2C7' }}>Assist</span> You?
                    </Typography>
                </Box>

                <Grid container spacing={{ xs: 2, md: 6 }}>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        {/* Product Support */}
                        <Card sx={{ ...cardStyle, mb: { xs: 2, md: 6 } }}>
                            <CardContent>
                                <Typography variant="h5" sx={{ mb: 2 }}>Product Support</Typography>
                                <Typography sx={{ mb: 4 }}>
                                    Send an email to reach support by completing the form.
                                </Typography>
                                <Button
                                    variant="contained"
                                    sx={buttonStyle}
                                    onClick={handleContactSupportFormOpen}>
                                    <Typography>Get In Touch</Typography>
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Questions */}
                        <Card sx={cardStyle}>
                            <CardContent>
                                <Typography variant="h5" sx={{ mb: 2 }}>Have a question?</Typography>
                                <Typography sx={{ mb: 4 }}>
                                    Email us or have a look at our FAQ
                                </Typography>
                                <Button
                                    variant="contained"
                                    sx={buttonStyle}
                                    onClick={navigateToFaqSection}>
                                    <Typography>Read FAQ</Typography>
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Gemen Contact Info */}
                    <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Card sx={cardStyle}>
                            <CardContent>
                                <Typography variant="h5" sx={{ mb: 2 }}>Contact Us</Typography>
                                <Typography sx={{ mb: 4 }}>
                                    Reach out to us via phone, email or find us by heading down to our office:
                                </Typography>

                                {/* Singapore Office */}
                                <Box sx={{ mb: 4 }}>
                                    <Typography variant="h6" sx={{ mb: 2 }}>Singapore</Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', mb: 1 }}>
                                        <LocationOn sx={{ fontSize: '1.2rem', mr: 1 }} />
                                        <Typography>
                                            <a href="https://www.google.com/maps/place/Gemen+Pte+Ltd/@1.3102084,103.8389323,17z/data=!3m2!4b1!5s0x31da19fc08c4d9fb:0x4f3412b3621c50dc!4m6!3m5!1s0x31da19461c78640f:0xed591bfcac18c41f!8m2!3d1.310203!4d103.8415072!16s%2Fg%2F11fct8jl5g?entry=ttu"
                                                target="_blank" rel="noopener noreferrer">
                                                10 Winstedt Rd #03-03A Singapore 227977
                                            </a>
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', mb: 1 }}>
                                        <Email sx={{ fontSize: '1.2rem', mr: 1 }} />
                                        <Typography>sales@gemen.tech</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', mb: 1 }}>
                                        <Phone sx={{ fontSize: '1.2rem', mr: 0.5 }} />
                                        <Typography>+65 9009 0081</Typography>
                                    </Box>
                                </Box>

                                {/* Shanghai Office */}
                                <Box sx={{ mb: 4 }}>
                                    <Typography variant="h6" sx={{ mb: 2 }}>Shanghai</Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', mb: 1 }}>
                                        <LocationOn sx={{ fontSize: '1.2rem', mr: 1 }} />
                                        <Typography>
                                            <a href=""
                                                target="_blank" rel="noopener noreferrer">
                                                1508-6 15th Floor Office Building Block B Global Harbor No.1188 Kaixuan North Road Putuo District Shanghai
                                            </a>
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', mb: 1 }}>
                                        <Email sx={{ fontSize: '1.2rem', mr: 1 }} />
                                        <Typography>sales@gemen.tech</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', mb: 1 }}>
                                        <Phone sx={{ fontSize: '1.2rem', mr: 0.5 }} />
                                        <Typography>+86 137 0197 5843</Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                {/* Dialog Form opens when the state of contactSupportOpen is true */}
                < Dialog
                    fullWidth
                    maxWidth="md"
                    open={contactSupportOpen}
                >
                    {!isDisabled ? (
                        <EmailForm
                            setContactSupportOpen={setContactSupportOpen}
                            isDisabled={isDisabled}
                            setIsDisabled={setIsDisabled}
                        />
                    ) : (
                        <Box sx={{ margin: 5, textAlign: 'center' }}>
                            <CircularProgress sx={{ mb: 5 }} />
                            <Typography variant="h5" sx={{ mb: 2 }}>Attempting to send email</Typography>
                            <Typography sx={{ mb: 4 }}>
                                Please Wait A Moment...
                            </Typography>
                        </Box>
                    )
                    }
                </Dialog >
            </Container >
        </Box >
    )
}

export default ContactUsContentSection