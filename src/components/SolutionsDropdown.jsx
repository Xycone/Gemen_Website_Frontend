import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography, Menu, MenuItem } from '@mui/material';

// Material UI Icons
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function SolutionsDropdown() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    //Styling
    const linkStyle = {
        textDecoration: 'none',
        color: 'black',

    }

    return (
        <Box position="relative">
            <Button
                onClick={handleOpen}
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

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                sx={{ mt: 2 }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <MenuItem
                        onClick={handleClose}
                        component={Link}
                        to="/garantia"
                        sx={{ flex: 1 }}
                    >
                        <Typography>Garantia</Typography>
                    </MenuItem>

                    <MenuItem
                        onClick={handleClose}
                        component={Link}
                        to="/ace"
                        sx={{ flex: 1 }}
                    >
                        <Typography>Ace</Typography>
                    </MenuItem>

                    <MenuItem
                        onClick={handleClose}
                        component={Link}
                        to="/mediator"
                        sx={{ flex: 1 }}
                    >
                        <Typography>Mediator</Typography>
                    </MenuItem>
                </Box>
            </Menu>
        </Box>
    )
}

export default SolutionsDropdown