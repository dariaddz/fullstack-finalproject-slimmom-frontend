import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

import { Box } from '@mui/material';
import Logo from '../logo';
import AuthNav from '../authNav';
import Navigation from '../navigation';
import UserInfo from '../userInfo';
import Burger from '../burger';
import s from './appBar.module.css';

function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <div className={s.appbar}>
      <Box
        sx={{
          display: 'flex',
          height: { xs: '80px', lg: '153px' },
          margin: '0',
          padding: {
            xs: '0 20px 0 20px',
            sm: '0 20px 0 20px',
            md: '0 32px 0 32px',
            lg: '0 16px 0 16px',
          },
          alignItems: { xs: 'center', lg: 'center' },
          justifyContent: {
            xs: 'space-between',
            sm: 'space-between',
            md: 'space-between',
            lg: 'space-between',
          },

          backgroundColor: 'transparent',
        }}
        disableGutters={true}
        fixed={true}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <Logo />
          <Box
            sx={{
              display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
              height: '32px',
              width: '2px',
              backgroundColor: '#A9A9A9',
              marginRight: '20px',
            }}
          ></Box>
          {isLoggedIn && <Navigation />}
          {!isLoggedIn && (
            <Box
              sx={{
                position: {
                  xs: 'absolute',
                  sm: 'absolute',
                  md: 'absolute',
                  lg: 'static',
                },
                top: '34px',
                right: '30px',
              }}
            >
              <AuthNav />
            </Box>
          )}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' },
              alignItems: 'center',
            }}
          >
            {isLoggedIn && <UserInfo />}
          </Box>
          {isLoggedIn && (
            <Box
              sx={{
                display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' },
              }}
            >
              <Burger />
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
}

export default AppBar;
