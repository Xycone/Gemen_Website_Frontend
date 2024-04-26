import React from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function ContactUsFAQSection() {
    // Styling
    const accordionStyle = {
        color: 'black',
        boxShadow: 'none',
        background: 'transparent',
        padding: 1,
        mb: 0.5
    };

    return (
        <Box sx={{ pb: 15 }} id="faq-section">
            <Container sx={{ padding: { xs: 0, md: 5 } }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 5 }}>
                    <Typography variant="h5" sx={{ mb: 3 }}>Frequently Asked Questions:</Typography>

                    <Accordion sx={accordionStyle}>
                        <AccordionSummary
                            expandIcon={<ArrowDropDownIcon sx={{ color: 'black' }} />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography>What offline media storage is supported for digitalisation?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                We previously managed to successfully migrate DDS, AIT, DVD
                                and LTO into a single system for unified search and replay.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion sx={accordionStyle}>
                        <AccordionSummary
                            expandIcon={<ArrowDropDownIcon sx={{ color: 'black' }} />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography>Which legacy recorders would you be able to help migrate?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                We support most legacy recorders available out there on the market
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion sx={accordionStyle}>
                        <AccordionSummary
                            expandIcon={<ArrowDropDownIcon sx={{ color: 'black' }} />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography>How do you guarantee data integrity during the migration process?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Our migration tool utilises a checksum mechanism to verify data integrity and the migrated data will remain encrypted at rest
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Container >
        </Box >
    )
}

export default ContactUsFAQSection