import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#FFFFF',
        },
        secondary: {
            main: '#F2F5F8',
        },
    },
    // components: {
    //     MuiAppBar: {
    //         styleOverrides: {
    //             root: {
    //                 boxShadow: 'none',
    //             },
    //         },
    //     },
    // },
});

export default theme;