import React from 'react';
import { Typography, Box, Container, Grid } from '@mui/material';

// Material UI Icons
import { RecordVoiceOver, Task, PeopleAltOutlined } from '@mui/icons-material';

// Icons
import Arrow from '../assets/Arrow.svg';

function WhyUsSection() {
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
        <Box sx={{ py: 5, backgroundColor: '#011F28', color: 'white' }}>
            <Container sx={{ padding: { xs: 0, md: 5 } }}>
                <Grid container spacing={10} sx={{ padding: 4 }}>
                    <Grid item xs={12} md={5}>
                        <Typography variant='h4' sx={{ textAlign: 'center', marginBottom: 5 }}>
                            <span style={{ color: '#A2C94F' }}>This</span> is why you
                            <br />
                            choose Gemen
                        </Typography>
                        <Box sx={{ display: {xs: 'none', md: 'flex'}, justifyContent: 'right' }}>
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