import React from 'react'
import { Box, Card, CardContent, Container } from '@mui/material'

function SolutionSelectionSection() {
    // Styling
    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: { md: 'repeat(3, 1fr)' },
        gridAutoRows: "1fr",
        gridAutoFlow: "row",
        gap: { xs: 2, md: 6 }
    };

    const gridItemStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    };

    const cardStyle = {
        padding: 4,
        borderRadius: 4,
        boxShadow: 'none',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'center'
    };

    return (
        <Box sx={{ py: 15, backgroundColor: '#031C2E', color: 'white' }}>
            <Container sx={{ px: { xs: 0, md: 10 } }}>
                <Box sx={gridContainerStyle}>
                    <Box sx={gridItemStyle}>
                        <Card>
                            <CardContent>

                            </CardContent>
                        </Card>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default SolutionSelectionSection