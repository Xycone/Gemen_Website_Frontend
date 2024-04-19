import React, { useRef, useEffect, useState } from 'react';
import { Typography, Box, Container, Grid } from '@mui/material';

// Material UI Icons
import { RecordVoiceOver, Task, PeopleAltOutlined } from '@mui/icons-material';

// Icons
import Arrow from '../assets/Arrow.svg';
import Underline from '../assets/Underline.svg';

function WhyUsSection() {
    const textRef = useRef(null);

    // Styling
    const underlineStyle = {
        width: '120px', 
        position: 'absolute', 
        bottom: '-10px', 
        left: '50%', 
        transform: 'translateX(-50%)'
    };

    // Data to populate carousel
    const reasons = [
        {
            image: <RecordVoiceOver sx={{ fontSize: '2.5rem' }} />,
            title: 'For over 15 years',
            description: 'our company owners have been working in the IT voice industry'
        },
        {
            image: <Task sx={{ fontSize: '2.5rem' }} />,
            title: '100+ projects',
            description: 'to meet every voice needs'
        },
        {
            image: <PeopleAltOutlined sx={{ fontSize: '2.5rem' }} />,
            title: 'Experienced collaborating',
            description: 'with governments and banks'
        }
    ];

    return (
        <Box sx={{ py: 15, backgroundColor: '#011F28', color: 'white' }}>
            <Container sx={{ padding: { xs: 0, md: 5 } }}>
                <Grid container spacing={10} sx={{ padding: 4 }}>
                    <Grid item xs={12} md={5}>
                        <Typography variant='h4' sx={{ textAlign: 'center', marginBottom: 5 }} ref={textRef}>
                            <span style={{ color: '#FF9900' }}>This</span> is why you
                            <br />
                            choose Gemen
                            {/* <span style={{ position: 'relative', display: 'inline-block' }}> Gemen
                                <img src={Underline} alt="Underline" style={underlineStyle} />
                            </span> */}
                        </Typography>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'right' }}>
                            <img src={Arrow} alt="Arrow" style={{ height: '120px' }} />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={7}>
                        <Grid container spacing={10}>
                            {reasons.map((reason, index) => (
                                <Grid key={index} item xs={12} md={6} sx={{ textAlign: 'center' }}>
                                    <Box>
                                        {reason.image}
                                        <Typography variant='h5' sx={{ mb: 2, mt: 1 }}>
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