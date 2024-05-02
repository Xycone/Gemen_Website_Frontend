import React from 'react'
import { Box, Container, Typography } from '@mui/material'

function MediatorContentSection() {
    return (
        <Box sx={{ py: 15 }}>
            <Container sx={{ px: { xs: 2, md: 10 } }}>
                <Box>
                    <Box sx={{ mb: 15, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <Typography variant="h5" sx={{ mb: 5 }}>
                            Mediator
                        </Typography>
                        <Typography variant="h4" sx={{ mb: 5 }}>
                            Our Audio Data
                            <br />
                            <span style={{ color: '#00A2C7' }}>Migration & Management</span> Magic
                        </Typography>
                        <Typography>
                            Mediator collates and enables play back of audio data from diverse sources
                            <br /> 
                            across the last two decades while offering you a list of additional features.
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 15, backgroundColor: '#031C2E', color: 'white', borderRadius: 4, padding: 4 }}>

                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default MediatorContentSection
