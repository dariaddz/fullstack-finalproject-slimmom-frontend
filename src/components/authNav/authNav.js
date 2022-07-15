import { NavLink } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useAuth } from '../../helpers/authContext/authContext';

const typografyStyle = {
  fontFamily: 'Gotham Pro',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '14px',
  lineHeight: '13px',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
};

const AuthNav = () => {
  const { active, onClickSignIn, onClickRegister } = useAuth();

  return (
    <Box>
      <Button
        component={NavLink}
        to="/login"
        sx={{ padding: '0', margin: '0' }}
      >
        <Typography
          sx={{ ...typografyStyle }}
          color={active === 'signIn' ? '#212121' : '#9B9FAA'}
          onClick={onClickSignIn}
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
          onClick={onClickRegister}
          color={active === 'register' ? '#212121' : '#9B9FAA'}
        >
          Реєстрація
        </Typography>
      </Button>
    </Box>
  );
};

export default AuthNav;
