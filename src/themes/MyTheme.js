import { createTheme } from '@mui/material/styles';
const theme = createTheme({
    palette: {
        primary: {
            main: '#1A06FF',
        },
        secondary: {
            main: '#F2F5F8',
        },
    },
    // typography: {
    //     // fontFamily: 'Just Sans',
    // },
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