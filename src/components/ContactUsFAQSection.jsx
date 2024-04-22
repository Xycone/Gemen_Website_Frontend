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
        <Box sx={{ py: 5 }} id="faq-section">
            <Container sx={{ padding: { xs: 0, md: 5 } }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 5 }}>
                    <Typography variant="h5" sx={{ mb: 3 }}>Frequently Asked Questions:</Typography>

                    <Accordion sx={accordionStyle}>
                        <AccordionSummary
                            expandIcon={<ArrowDropDownIcon sx={{ color: 'black' }} />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography>FAQ 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion sx={accordionStyle}>
                        <AccordionSummary
                            expandIcon={<ArrowDropDownIcon sx={{ color: 'black' }} />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography>FAQ 2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion sx={accordionStyle}>
                        <AccordionSummary
                            expandIcon={<ArrowDropDownIcon sx={{ color: 'black' }} />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography>FAQ 3</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion sx={accordionStyle}>
                        <AccordionSummary
                            expandIcon={<ArrowDropDownIcon sx={{ color: 'black' }} />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography>FAQ 4</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Container >
        </Box >
    )
}

export default ContactUsFAQSection