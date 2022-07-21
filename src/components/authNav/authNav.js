import { NavLink, useLocation } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';

const typografyStyle = {
  fontFamily: 'Gotham Pro',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '14px',
  lineHeight: '13px',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  '&:hover': {
    color: '#212121',
  },
};

const AuthNav = () => {
  const { pathname } = useLocation();
  return (
    <Box sx={{ display: 'flex' }}>
      <Button
        component={NavLink}
        to="/login"
        sx={{ padding: '0', margin: '0' }}
      >
        <Typography
          sx={{ ...typografyStyle }}
          color={pathname === '/login' ? '#212121' : '#9B9FAA'}
        >
          Вхід
        </Typography>
      </Button>
      <Button
        component={NavLink}
        to="/register"
        sx={{ padding: '0', marginLeft: '16px' }}
      >
        <Typography
          sx={{ ...typografyStyle }}
          color={pathname === '/register' ? '#212121' : '#9B9FAA'}
        >
          Реєстрація
        </Typography>
      </Button>
    </Box>
  );
};

export default AuthNav;
