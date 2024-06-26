import './App.css';
import { useState } from 'react';
import { AppBar, Toolbar, Container, Typography, Button, Box, IconButton, useScrollTrigger } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Material UI Theme
import { ThemeProvider } from '@mui/material/styles';
import MyTheme from './themes/MyTheme';

// Pages
import Homepage from './pages/Homepage';
import Ace from './pages/Ace';
import Garantia from './pages/Garantia';
import Mediator from './pages/Mediator';
import ContactUs from './pages/ContactUs';


// Components
import Footer from './components/Footer';
import SolutionsDropdown from './components/SolutionsDropdown';

// Logo
import Logo from './assets/Logo.svg';

// Material UI Icons
import { Menu as MenuIcon } from '@mui/icons-material';

// Hide navbar when scrolling down on screen sizes below md 
// Navbar reappears when scrolling up
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <AppBar position="fixed" sx={{ display: { xs: trigger ? 'none' : 'block', md: 'block' } }}>
      {children}
    </AppBar>
  );
}

function App() {
  // Appbar Dropdown
  const [isAppBarOpen, setIsAppBarOpen] = useState(false);
  const handleAppBarToggle = () => {
    setIsAppBarOpen(!isAppBarOpen);
  }
  const handleAppBarClose = () => {
    setIsAppBarOpen(false);
  }

  // Styling
  const buttonStyle = {
    mx: 3,
    display: 'flex',
    alignItems: 'center',
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'none',
      color: 'white !important',
      backgroundColor: '#1A06FF',
      color: 'black',
      transform: 'scale(1.05)'
    },
    borderRadius: 6,
    py: 1,
    px: 2.5,
    textTransform: 'none',
    color: 'white !important',
    backgroundColor: '#1A06FF',
  };

  return (
    <Router>
      <ThemeProvider theme={MyTheme}>
        {/* NavBar */}
        <HideOnScroll>
          <AppBar position="fixed" className='AppBar' sx={{ backgroundColor: 'white', color: 'black', padding: 1 }}>
            <Container>
              {/* Navbar Menu */}
              <Toolbar disableGutters={true}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={Logo} alt="Gemen Logo" style={{ height: '80px' }} />
                </Link>

                <Box sx={{ flexGrow: 1 }} />

                <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', textAlign: 'center' }}>
                  <Link to="/#whyus-section">
                    <Typography sx={{ mx: 2 }}>Why Us</Typography>
                  </Link>

                  <SolutionsDropdown />

                  <Link to="/#services-section">
                    <Typography sx={{ mx: 2 }}>Services</Typography>
                  </Link>
                </Box>


                <Box sx={{ flexGrow: 1 }} />

                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                  <Button
                    variant="contained"
                    className="ContactUsButton"
                    component={Link}
                    to="/contactUs"
                    sx={buttonStyle}
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

              {/* Appbar Dropdown */}
              {isAppBarOpen && (
                <Box sx={{ mt: 2, display: { xs: 'block', md: 'none' }, maxHeight: '40vh', overflowY: 'auto', pr: 2 }}>
                  <Link to="/#whyus-section" onClick={handleAppBarClose}>
                    <Typography>Why Us</Typography>
                  </Link>
              
                  <Link to="/garantia" onClick={handleAppBarClose}>
                    <Typography>Garantia</Typography>
                  </Link>

                  <Link to="/ace" onClick={handleAppBarClose}>
                    <Typography>ACE</Typography>
                  </Link>

                  <Link to="/mediator" onClick={handleAppBarClose}>
                    <Typography>Mediator</Typography>
                  </Link>

                  <Link to="/#services-section" onClick={handleAppBarClose}>
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
        <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: { xs: 'fit-content', md: 0 } }}>
          <Box sx={{ minHeight: '100vh' }}>
            <Routes>
              <Route path={"/"} element={<Homepage />} />
              <Route path={"/ace"} element={<Ace />} />
              <Route path={"/garantia"} element={<Garantia />} />
              <Route path={"/mediator"} element={<Mediator />} />
              <Route path={"/contactUs"} element={<ContactUs />} />
            </Routes>
          </Box>

          <Box>
            <Footer />
          </Box>
        </Box>

      </ThemeProvider>
    </Router>
  )
}

export default App
