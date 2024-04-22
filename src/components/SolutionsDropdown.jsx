import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography, Card, Popover, CardContent } from '@mui/material';

// Material UI Icons
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function SolutionsDropdown() {
    const [anchor, setAnchor] = useState(null);

    const handleClick = (event) => {
        setAnchor(event.currentTarget);
    };

    const handleClose = () => {
        setAnchor(null);
    };

    const open = Boolean(anchor);

    // Styling
    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: { md: 'repeat(3, 1fr)' },
        gridAutoRows: "1fr",
        gridAutoFlow: "row",
        gap: 2
    };

    const gridItemStyle = {
        padding: 5,
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        backgroundColor: '#011F28',
        color: 'white'
    };


    return (
        <Box>
            <Button
                aria-haspopup="true" onClick={handleClick}
                sx={{
                    textTransform: 'none',
                    mr: 3,
                    color: 'black',
                    '&:hover': {
                        backgroundColor: 'transparent'
                    }
                }}
                disableRipple
            >
                <Typography>
                    Solutions
                </Typography>
                <ArrowDropDownIcon />
            </Button>

            <Popover
                open={open}
                anchorEl={anchor}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                sx={{ display: { xs: 'none', md: 'block' }, mt: 4, borderRadius: 4 }}
                PaperProps={{
                    sx: {
                        borderRadius: 4,
                        padding: 5
                    },
                }}
            >
                <Typography variant='h6' sx={{ mb: 2, ml: 1 }}>
                    Products:
                </Typography>
                <Box sx={gridContainerStyle}>
                    <Box
                        onClick={handleClose}
                        component={Link}
                        to="/garantia"
                        sx={gridItemStyle}
                    >
                        <Typography>Garantia</Typography>
                    </Box>

                    <Box
                        onClick={handleClose}
                        component={Link}
                        to="/ace"
                        sx={gridItemStyle}
                    >
                        <Typography>Ace</Typography>
                    </Box>

                    <Box
                        onClick={handleClose}
                        component={Link}
                        to="/ace"
                        sx={gridItemStyle}
                    >
                        <Typography>Mediator</Typography>
                    </Box>
                </Box>
            </Popover>
        </Box >
    )
}

export default SolutionsDropdown