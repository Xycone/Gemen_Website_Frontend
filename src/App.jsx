import './App.css';
import { useState } from 'react';
import { AppBar, Toolbar, Container, Typography, Button, Box, Menu, MenuItem, IconButton, Grid, useScrollTrigger } from '@mui/material';
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


function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <AppBar position="fixed" sx={{ display: { xs: trigger ? 'none' : 'block' } }}>
      {children}
    </AppBar>
  );
}

function App() {
  const [solutionsMenuAnchorEl, setSolutionsMenuAnchorEl] = useState(null);
  const handleSolutionsMenuOpen = (event) => {
    setSolutionsMenuAnchorEl(event.currentTarget);
  }
  const handleSolutionsMenuClose = () => {
    setSolutionsMenuAnchorEl(null);
  }

  const [isAppBarOpen, setIsAppBarOpen] = useState(false);
  const handleAppBarToggle = () => {
    setIsAppBarOpen(!isAppBarOpen);
  }
  const handleAppBarClose = () => {
    setIsAppBarOpen(false);
  }

  return (
    <Router>
      <ThemeProvider theme={MyTheme}>

        {/* NavBar */}
        <HideOnScroll>
          <AppBar position="fixed" className='AppBar' sx={{ backgroundColor: 'white', color: 'black', padding: 1 }}>
            <Container>
              <Toolbar disableGutters={true}>
                <Link to="/homepage" style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={Logo} alt="Gemen Logo" style={{ height: '60px' }} />
                </Link>

                <Box sx={{ flexGrow: 1 }} />

                <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', textAlign: 'center' }}>

                  <Link to="/homepage#aboutus-section" sx={{ mr: 2, ml: 2 }}>
                    <Typography>About Us</Typography>
                  </Link>

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
                    <Link to="/garantia" style={{ textDecoration: 'none', color: 'black' }}>
                      <MenuItem onClick={handleSolutionsMenuClose}>
                        <Typography>Garantia</Typography>
                      </MenuItem>
                    </Link>

                    <Link to="/ace" style={{ textDecoration: 'none', color: 'black' }}>
                      <MenuItem onClick={handleSolutionsMenuClose}>
                        <Typography>ACE</Typography>
                      </MenuItem>
                    </Link>
                  </Menu>

                  <Link to="/homepage#services-section" sx={{ mr: 2, ml: 2 }}>
                    <Typography>Services</Typography>
                  </Link>

                  <Button
                    variant="contained"
                    className="ContactUsButton"
                    component={Link}
                    to="/contactUs"
                    sx={{
                      borderRadius: 2,
                      mx: 2,
                      px: 3,
                      py: 1,
                      color: 'white !important',
                      backgroundColor: '#1A06FF',
                      whiteSpace: 'nowrap',
                      textTransform: 'none',
                    }}
                  >
                    Contact Us
                  </Button>
                </Box>

                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                  <IconButton onClick={handleAppBarToggle}>
                    <MenuIcon />
                  </IconButton>
                </Box>
              </Toolbar>  

              {isAppBarOpen && (
                <Box sx={{ mt: 2, display: { xs: 'block', md: 'none' }, maxHeight: '60vh', overflowY: 'auto', pr: 2 }}>
                  <Link to="/" onClick={handleAppBarClose}>
                    <Typography>About Us</Typography>
                  </Link>
                  <Typography sx={{ mb: 2 }}>Solutions:</Typography>
                  <Box sx={{ textAlign: 'center' }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Link to="/garantia" onClick={handleAppBarClose}>
                          <Box sx={{ borderRadius: 4, padding: 2, border: '1px solid #BDBDBD' }}>
                            <Typography>Garantia</Typography>
                          </Box>
                        </Link>
                      </Grid>
                      <Grid item xs={12}>
                        <Link to="/ace" onClick={handleAppBarClose}>
                          <Box sx={{ borderRadius: 4, padding: 2, border: '1px solid #BDBDBD' }}>
                            <Typography>ACE</Typography>
                          </Box>
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                  <Link to="/homepage#services-section" onClick={handleAppBarClose}>
                    <Typography>Services</Typography>
                  </Link>
                  <Link to="/contactUs" onClick={handleAppBarClose}>
                    <Typography>Contact Us</Typography>
                  </Link>
                </Box>
              )}
            </Container>
          </AppBar>
        </HideOnScroll>

        {/* Routes */}
        <Container sx={{ padding: 10, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Routes>
            <Route path={"/homepage"} element={<Homepage />} />
            <Route path={"/ace"} element={<Ace />} />
            <Route path={"/garantia"} element={<Garantia />} />
            <Route path={"/contactUs"} element={<ContactUs />} />
          </Routes>
        </Container>

        {/* Footer Section */}
        <Partners />
        <Footer />
        <CopyrightSection />

      </ThemeProvider>
    </Router>
  )
}

export default App
