import { createTheme } from '@mui/material';
import { Box, Container, styled } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#9B9FAA',
      dark: '#212121',
    },
    secondary: {
      main: '#FC842D',
      hover: '#FF0707',
    },
    element: {
      main: '#E0E0E0',
    },

    buttonLogin: {
      main: '#FC842D',
      dark: '#e77828',
    },
    buttonRegister: {
      main: '#FC842D',
      dark: '#e4c3ab',
    },
    background: {
      main: '#FFFFFF',
      darker: '#F0F1F3',
      dark: '#264061',
      modal: 'rgba(33, 33, 33, 0.12)',
    },
  },
  typography: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1.2,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 768,
      lg: 1280,
    },
  },
});

const MainContainer = styled(Container)(({ theme }) => ({
  padding: '32px 20px',
  [theme.breakpoints.up('md')]: {
    padding: '100px 32px 0px',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '147px 0px 0px 25px',
  },
}));
const labelFontStyle = {
  fontFamily: 'Verdana',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '14px',
  lineHeight: '17px',
  letterSpacing: '0.04em',
};

const FormBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  marginBottom: '40px',
  display: 'block',

  [theme.breakpoints.up('md')]: {
    display: 'flex',
    marginBottom: '0px',
    flexWrap: 'wrap',
    width: '545px',
    height: '343px',
  },
}));

const buttonLR = {
  height: '44px',
  width: '182px',
  borderRadius: '30px',
};

const FormLabel = styled('label')(({ theme }) => ({
  display: 'block',
  marginBottom: '32px',
  width: '240px',
  [theme.breakpoints.up('md')]: {
    marginBottom: '0px',
    marginRight: '32px',
  },
}));

export { FormLabel, buttonLR, FormBox, labelFontStyle, MainContainer };
