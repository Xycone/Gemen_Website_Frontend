import React from 'react';
import { Typography, Box, Container, Grid } from '@mui/material';

// Icons
import Arrow from '../assets/Arrow.svg';
import ArrowLeftYellow from '../assets/ArrowLeftYellow.svg';
import Projects from '../assets/Projects.svg';
import Microphone from '../assets/Microphone.svg';
import Collaborate from '../assets/Collaborate.svg';

function WhyUsSection() {
    //Styling
    const imageStyle = {
        width: '40px',
        height: '40px'
    };

    // Data to populate carousel
    const reasons = [
        {
            image: <img src={Microphone} style={imageStyle} />,
            title: 'Knowledgeble',
            description: 'Our company owners have been in the IT voice industry for 15+ years'
        },
        {
            image: <img src={Projects} style={imageStyle} />,
            title: 'Our Projects',
            description: 'We have 100+ projects completed to meet every voice needs'
        },
        {
            image: <img src={Collaborate} style={{ width: '45px', height: '45px' }} />,
            title: 'Experience Working',
            description: 'with both governments and banks'
        }
    ];

    return (
        <Box sx={{ py: 15, backgroundColor: '#031C2E', color: 'white' }} id="whyus-section">
            <Container sx={{ px: { xs: 0, md: 10 } }}>
                <Grid container spacing={10} sx={{ padding: 4 }}>
                    <Grid item xs={12} md={5}>
                        <Typography variant='h4' sx={{ textAlign: 'center', mb: 5 }}>
                            <span style={{ color: '#FF9900' }}>This</span> Is Why You
                            <br />
                            Choose Gemen
                        </Typography>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'right' }}>
                            <img src={Arrow} alt="Arrow" style={{ height: '120px' }} />
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>
                            <img src={ArrowLeftYellow} alt="ArrowLeftYellow" style={{ height: '120px', transform: 'rotate(-30deg)' }} />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={7}>
                        <Grid container spacing={10}>
                            {reasons.map((reason, index) => (
                                <Grid key={index} item xs={12} md={6} sx={{ textAlign: 'center' }}>
                                    <Box>
                                        {/* {reason.image} */}
                                        <Typography variant='h6' sx={{ mb: 2, mt: 1 }}>
                                            {reason.title}
                                        </Typography>
                                    </Box>
                                    <Box>
                                        {reason.description}
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container >
        </Box >
    )
}

export default WhyUsSection