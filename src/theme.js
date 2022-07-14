import { createTheme } from '@mui/material';
import { Button, styled } from '@mui/material';

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

const OrangeButton = styled(Button)(({ theme }) => ({
  padding: '13px 25px',
  margin: '40px ',
  alignItems: 'center',
  borderRadius: '30px',
  height: '43px',
  color: theme.palette.background.main,
  backgroundColor: theme.palette.secondary.main,
  '&:hover': { backgroundColor: theme.palette.secondary.hover },
}));

export default OrangeButton;
