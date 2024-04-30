import React from 'react';
import { Typography, Box, Grid, Container, Card, List, ListItem, CardContent } from '@mui/material';

// Icons
import Sparkle from '../assets/Sparkle.svg';
import Alarm from '../assets/Alarm.svg';
import Report from '../assets/Report.svg';
import Integrity from '../assets/Integrity.svg';
import ArrowLeft from '../assets/ArrowLeft.svg';

function GarantiaContentSection() {
    // Data to populate
    const features = [
        {
            name: "Integrity",
            description:
                <Typography>
                    <ul>
                        <li>
                            Specialises in automated checks of recorded extensions within
                            an organisation's communication system.
                        </li>
                        <br />
                        <li>
                            Able to define the algorithms used for
                            automated checks based on your needs and requirements.
                        </li>
                        <br />
                        <li>
                            Can automatically disable non-compliant phone extensions
                            to guarantee the functionaility and compliance of your
                            recording system before your organisation's operations
                            commence.
                        </li>
                    </ul>
                </Typography>
        },
        {
            name: "Progressive Monitoring",
            description:
                <Typography>
                    <ul>
                        <li>
                            Conducts scheduled tasks designated by you to assess your recording system's functionality .
                        </li>
                        <br />
                        <li>
                            Detects irregularities in the system in near real-time and promptly alerts you of any alarms detected.
                            These alarms are compiled into a record.
                        </li>
                        <br />
                        <li>
                            Takes proactive measures such as disabling affected extensions on your recording system to prevent
                            further disruptions.
                        </li>
                    </ul>
                </Typography>
        },
        {
            name: "Reconciliation",
            description:
                <Typography>
                    <ul>
                        <li>
                            Able to generate daily reports that compare the number of calls made with the number of calls
                            recorded in your recording system.
                        </li>
                        <br />
                        <li>
                            Ensures that the recorded data aligns with the actual usage of the system.
                        </li>
                    </ul>
                </Typography>
        }
    ];

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
        border: { xs: 'transparent', md: '2px solid black' },
        borderRadius: { xs: 0, md: 4 },
        boxShadow: 'none',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
    };

    return (
        <Box sx={{ py: 15 }}>
            <Container sx={{ padding: { xs: 0, md: 5 } }}>
                <Box>
                    <Box sx={{ mb: 15, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <Typography variant="h5" sx={{ mb: 5 }}>
                            Garantia
                        </Typography>
                        <Typography variant="h4" sx={{ mb: 5 }}>
                            A Guaranteed Way To <span style={{ color: '#D8137C' }}>Enhance<img src={Sparkle} style={{ height: '30px', width: '30px' }} /></span>
                            <br />
                            Your Business Communications
                        </Typography>
                        <Typography>
                            Garantia ensures integrity, functionality, and complaince of your organisation's communication
                            <br />
                            system through automated checks, real-time monitoring, and call reconciliation.
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 15, backgroundColor: '#031C2E', color: 'white', borderRadius: { xs: 0, md: 4 }, padding: 10 }}>
                        <Grid container spacing={8}>
                            <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
                                <Grid container spacing={8}>
                                    <Grid item xs={12} sm={6} sx={{ ...gridItemStyle, textAlign: 'center', alignItems: 'center' }}>
                                        <Box sx={{ mb: 2 }}>
                                            <img src={Integrity} style={{ height: '40px', width: '40px' }} />
                                        </Box>
                                        <Typography variant="h5">
                                            Integrity
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} sm={6} sx={{ ...gridItemStyle, textAlign: 'center', alignItems: 'center' }}>
                                        <Box sx={{ mb: 2 }}>
                                            <img src={Alarm} style={{ height: '40px', width: '40px' }} />
                                        </Box>
                                        <Typography variant="h5">
                                            Monitoring
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} sm={6} sx={{ ...gridItemStyle, textAlign: 'center', alignItems: 'center' }}>
                                        <Box sx={{ mb: 2 }}>
                                            <img src={Report} style={{ height: '40px', width: '40px' }} />
                                        </Box>
                                        <Typography variant="h5">
                                            Reconciliation
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
                                <Typography variant='h5' sx={{ textAlign: 'center', mb: 5 }}>
                                    Explore some of
                                    <br />
                                    Garantia's features
                                </Typography>
                                <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                                    <img src={ArrowLeft} alt="ArrowLeft" style={{ height: '100px' }} />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box sx={gridContainerStyle}>
                        {features.map((feature, index) => (
                            <Box sx={gridItemStyle}>
                                <Card key={index} sx={cardStyle}>
                                    <CardContent>
                                        <Typography variant="h5" sx={{ mb: 3 }}>
                                            {feature.name}
                                        </Typography>
                                        {feature.description}
                                    </CardContent>
                                </Card>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* <Box sx={boxStyle}>
                    <Typography variant="h5" sx={{ mb: 2 }}>
                        Integrity
                    </Typography>
                    <Typography>
                        <List>
                            <ListItem>
                                Specialises in automated checks of recorded extensions
                                within an organisation's communication system.
                            </ListItem>
                            <ListItem>
                                Able to define the algorithms used for
                                automated checks based on your needs and requirements.
                            </ListItem>
                            <ListItem>
                                Can automatically disable non-compliant phone extensions
                                to guarantee the functionaility and compliance of your
                                recording system before your organisation's operations
                                commence.
                            </ListItem>
                        </List>
                    </Typography>
                </Box> */}

                {/* <Box sx={gridContainerStyle}>
                    <Box sx={gridItemStyle}>
                        <Card sx={cardStyle}>
                            <CardContent>
                                <Typography sx={{ textAlign: 'center' }}>[ Image Placeholder ]</Typography>
                            </CardContent>
                        </Card>
                    </Box>

                    <Box sx={gridItemStyle}>
                        <Box sx={{ padding: 5 }}>
                            <Typography variant="h5" sx={{ mb: 3 }}>
                                Integrity
                            </Typography>
                            <Typography>
                                "Integrity" specialises in automated checks of recorded extensions
                                within an organisation's communication system.
                                It ensures the integrity of recorded communications
                                by implemeneting algorithms defined by the customer.
                                Addtionally, Integrity can automatically disable non-compliant phone extensions,
                                guaranteeing the functionaility and compliance of the recording system
                                before the organisation's operations commence.
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ ...gridItemStyle, order: { xs: 4, md: 3 } }}>
                        <Box sx={{ padding: 5 }}>
                            <Typography variant="h5" sx={{ mb: 3 }}>
                                Progressive Monitoring
                            </Typography>
                            <Typography>
                                Progressive Monitoring conducts scheduled tasks designated by the customer to assess
                                the recording system's functionaility.
                                It detects irregularities in the system in near real-time and promptly alerts the customer
                                of any alarms detected.
                                Moreover, Progressive Monitoring compiles historical reports of these alarms.
                                In the event of anomalies, it takes proactive measures such as disabling
                                affected extensions to prevent further disruptions,
                                thus maintaining the stability and dependability of the recording system.
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ ...gridItemStyle, order: { xs: 3, md: 4 } }}>
                        <Card sx={cardStyle}>
                            <CardContent>
                                <Typography sx={{ textAlign: 'center' }}>[ Image Placeholder ]</Typography>
                            </CardContent>
                        </Card>
                    </Box>

                    <Box sx={{ ...gridItemStyle, order: { xs: 5, md: 6 } }}>
                        <Card sx={{ borderRadius: { xs: 0, md: 4 }, backgroundColor: '#D9D9D9', boxShadow: 'none', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                            <CardContent sx={{ margin: 2 }}>
                                <Typography sx={{ textAlign: 'center' }}>[ Image Placeholder ]</Typography>
                            </CardContent>
                        </Card>
                    </Box>

                    <Box sx={{ ...gridItemStyle, order: { xs: 5, md: 6 } }}>
                        <Box sx={{ padding: 5 }}>
                            <Typography variant="h5" sx={{ mb: 3 }}>
                                Reconciliation
                            </Typography>
                            <Typography>
                                Reconciliation provides capabilities to generate daily reports that compare
                                the number of calls made with the number of calls recorded in the recording system.
                                This process helps ensure that the recorded data aligns
                                with the actual usage of the communications system.
                            </Typography>
                        </Box>
                    </Box>
                </Box> */}
            </Container >
        </Box >
    )
}

export default GarantiaContentSection