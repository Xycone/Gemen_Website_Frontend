import { createTheme } from '@mui/material/styles';
import JustSansRegularWoff from '../Website_font/JUSTSans-Rg.woff';
import JustSansRegularWoff2 from '../Website_font/JUSTSans-Rg.woff2';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1A06FF',
        },
        secondary: {
            main: '#F2F5F8',
        },
    },
    typography: {
        fontFamily: 'Just Sans',
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                },
            },
        },
    },
});

export default theme;