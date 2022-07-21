import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo/logo-2x.png';
import logoSlim from '../../images/logo/logo-slim-2x.png';
import logoMom from '../../images/logo/logo-mom-2x.png';
import s from './logo.module.css';

const Logo = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: { lg: '15vw' },
        }}
        component={NavLink}
        to={isLoggedIn ? '/diary' : '/'}
      >
        <Box>
          <img className={s.logo} src={logo} alt="Logo" />
        </Box>
        {isLoggedIn ? (
          <Box
            sx={{
              display: { xs: 'flex', sm: 'flex', md: 'flex' },

              height: '16px',
            }}
          >
            <img
              className={s.logoSlim}
              src={logoSlim}
              alt="Logo name"
              width={47}
              height={16}
            />
            <img src={logoMom} alt="Logo name" width={47} height={16} />
          </Box>
        ) : (
          <Box
            sx={{
              display: { xs: 'none', sm: 'none', md: 'flex' },
              height: '16px',
            }}
          >
            <img
              className={s.logoSlim}
              src={logoSlim}
              alt="Logo name"
              width={47}
              height={16}
            />
            <img src={logoMom} alt="Logo name" width={47} height={16} />
          </Box>
        )}
      </Box>
    </>
  );
};

export default Logo;
