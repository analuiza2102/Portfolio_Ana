import { createTheme, responsiveFontSizes } from '@mui/material/styles';




let theme = createTheme({
  palette: {
    primary: {
      main: "#5e5a61",
    },
    secondary: {
      main: "#557174",
    },
    background: {
      default: "#161516",
    },
},
    typography: {
        fontFamily: 'Helvetica Neue, sans-serif',
        h1: {
            color: "#db8286",
            fontSize: "3rem",
        },
        h2: {
            color: "#a4b4bc",
            fontSize: "2rem",
        },
    },
    
    
})

theme = responsiveFontSizes(theme);
export default theme;