import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Typography, Menu, MenuItem } from '@mui/material';

// Material UI Icons
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function SolutionsDropdown() {
    const [solutionsMenuAnchorEl, setSolutionsMenuAnchorEl] = useState(null);
    const handleSolutionsMenuOpen = (event) => {
        setSolutionsMenuAnchorEl(event.currentTarget);
    }
    const handleSolutionsMenuClose = () => {
        setSolutionsMenuAnchorEl(null);
    }

    return (
        <>
            <Button
                onClick={handleSolutionsMenuOpen}
                sx={{
                    textTransform: 'none',
                    mr: 2,
                    padding: 0,
                    color: 'black',
                    '&:hover': {
                        backgroundColor: 'transparent',
                    },
                }}
                disableRipple
            >
                <Typography>
                    Solutions
                </Typography>
                <ArrowDropDownIcon />
            </Button>
            <Menu
                anchorEl={solutionsMenuAnchorEl}
                open={Boolean(solutionsMenuAnchorEl)}
                onClose={handleSolutionsMenuClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                sx={{ display: { xs: 'none', md: 'flex' } }}
            >
                <Link to="/garantia" className="dropdown-link" style={{ textDecoration: 'none', color: 'black' }}>
                    <MenuItem onClick={handleSolutionsMenuClose}>
                        <Typography>Garantia</Typography>
                    </MenuItem>
                </Link>

                <Link to="/ace" className="dropdown-link" style={{ textDecoration: 'none', color: 'black' }}>
                    <MenuItem onClick={handleSolutionsMenuClose}>
                        <Typography>ACE</Typography>
                    </MenuItem>
                </Link>
            </Menu>
        </>
    )
}

export default SolutionsDropdown
