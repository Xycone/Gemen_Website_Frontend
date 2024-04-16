import React from 'react';
import { Typography, Box, Container, Grid } from '@mui/material';

// Material UI Icons
import { RecordVoiceOver, Task, PeopleAltOutlined } from '@mui/icons-material';

function WhyUsSection() {

    // Data to populate carousel
    const reasons = [
        {
            image: <RecordVoiceOver sx={{ fontSize: '2.5rem' }} />,
            title: 'For over 15 years',
            description: 'our company owners have been in the IT voice industry'
        },
        {
            image: <Task sx={{ fontSize: '2.5rem' }} />,
            title: '100+ total projects',
            description: 'to meet every voice needs'
        },
        {
            image: <PeopleAltOutlined sx={{ fontSize: '2.5rem' }} />,
            title: 'Experienced collaborating',
            description: 'with governments and banks'
        }
    ];

    return (
        <Box sx={{ backgroundColor: '#011F28', color: 'white' }} id="whyus-section">
            <Container sx={{ padding: { xs: 0, md: 5 } }}>
                <Grid container spacing={10} sx={{ padding: 5 }}>
                    {reasons.map((reason, index) => (
                        <Grid key={index} item xs={12} md={6} lg={4} sx={{ textAlign: 'center' }}>
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
            </Container >
        </Box >
    )
}

export default WhyUsSection