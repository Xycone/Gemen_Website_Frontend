import { Box, Typography } from '@mui/material'
import React from 'react'

function ServicesSection() {
    return (
        <Box sx={{ mb: 15, mt: 15 }}>
            {/* Services Section */}
            <Box sx={{ mb: 4, fontWeight: 'bold', textAlign: 'center' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    Discover our services:
                    <br />
                    <span style={{ color: '#EB1287' }}>What we can do for you...</span>
                </Typography>
            </Box>
        </Box>
    )
}

export default ServicesSection