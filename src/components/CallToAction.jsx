import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container } from '@mui/material';

function CallToAction() {
    const navigate = useNavigate();

    const navigateToContact = () => {
        navigate('/contactUs');
    };

    return (
        <Box sx={{ py: 10, backgroundColor: '#011F28', color: 'white' }}>
            <Container>
                <Box>
                    
                </Box>
            </Container>
        </Box>
    )
}

export default CallToAction