import './App.css';
import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Container, Typography, Button, Box, Menu, MenuItem, IconButton } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Material UI Theme
import { ThemeProvider } from '@mui/material/styles';
import MyTheme from './themes/MyTheme';

// Pages
import Ace from './pages/Ace';
import Garantia from './pages/Garantia';
import Homepage from './pages/Homepage';
import ContactUs from './pages/ContactUs';

// Components
import Footer from './components/Footer';
import CopyrightSection from './components/CopyrightSection';
import Partners from './components/Partners';

// Logo
import Logo from './assets/Logo.svg'

// Material UI Icons
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Menu as MenuIcon } from '@mui/icons-material';


function App() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [navbarMenuOpen, setNavbarMenuOpen] = useState(false);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  }
  const handleMenuClose = () => {
    setAnchorEl(null);
  }

  return (
    <Router>
      <ThemeProvider theme={MyTheme}>

        {/* Navigation Bar */}
        <AppBar position="fixed" className='AppBar' sx={{ backgroundColor: 'white' }}>
          <Container>
            <Toolbar disableGutters={true}>
              <Link to="/homepage" style={{ display: 'flex', alignItems: 'center' }}>
                <img src={Logo} alt="Gemen Logo" style={{ height: '55px' }} />
              </Link>

              <Box sx={{ flexGrow: 1 }} />

              <Box sx={{ display: { xs: 'none', md: 'flex'}, alignItems: 'center', textAlign: 'center' }}>

                <Button onClick={handleMenuOpen} sx={{ textTransform: 'none', mr: 2, padding: 0 }} disableRipple >
                  <Typography>
                    Solutions
                  </Typography>
                  <ArrowDropDownIcon />
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                >
                  <Link to="/garantia" style={{ textDecoration: 'none', color: 'black' }}>
                    <MenuItem onClick={handleMenuClose}>
                      <Typography>Garantia</Typography>
                    </MenuItem>
                  </Link>

                  <Link to="/ace" style={{ textDecoration: 'none', color: 'black' }}>
                    <MenuItem onClick={handleMenuClose}>
                      <Typography>ACE</Typography>
                    </MenuItem>
                  </Link>
                </Menu>

                <Link to="/homepage#services-section" sx={{ mr: 2, ml: 2 }}>
                  <Typography>Services</Typography>
                </Link>

                <Link to="/contactUs" sx={{ mr: 2, ml: 2 }}>
                  <Typography>Contact Us</Typography>
                </Link>
              </Box>

              <Box sx={{ display: { md: 'none' } }}>
                <IconButton>
                  <MenuIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        {/* Routes */}
        <Container sx={{ padding: 10, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Routes>
            <Route path={"/homepage"} element={<Homepage />} />
            <Route path={"/ace"} element={<Ace />} />
            <Route path={"/garantia"} element={<Garantia />} />
            <Route path={"/contactUs"} element={<ContactUs />} />
          </Routes>
        </Container>

        <Partners />
        <Footer />
        <CopyrightSection />

      </ThemeProvider>
    </Router>
  )
}

export default App
