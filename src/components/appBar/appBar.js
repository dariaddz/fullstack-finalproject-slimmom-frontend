import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

import { Box } from '@mui/material';
import Logo from '../logo';
import AuthNav from '../authNav';
import Navigation from '../navigation';
import UserInfo from '../userInfo';
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
          alignItems: { xs: 'center', lg: 'flex-end' },
          justifyContent: { xs: 'space-between', lg: 'left' },
          width: {
            xs: 'calc(100vw-40px)',
            md: 'calc(100vw-64px)',
            lg: 'calc(100vw-32px)',
          },
          backgroundColor: 'transparent',
        }}
        disableGutters={true}
        fixed={true}
      >
        <Logo />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: { lg: '85vw' },
          }}
        >
          {/* {isLoggedIn && (
            <Box
              sx={{
                display: { md: 'none', lg: 'flex' },
                justifyContent: 'space-between',
                paddingLeft: '15px',
              }}
            >
              <Navigation />
            </Box>
          )} */}

          {/* {isLoggedIn && (
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
              }}
            >
              <UserInfo />
            </Box>
          )} */}
        </Box>

        <div className={s.container}>{isLoggedIn && <UserInfo />}</div>
        {isLoggedIn && <Navigation />}

        {!isLoggedIn && <AuthNav />}
      </Box>

      {/* <Box //горизонтальная палка
        sx={{
          display: { xs: 'flex', lg: 'none' },
          height: '2px',
          width: '100%',
          backgroundColor: '#E0E0E0',
        }}
      /> */}
      {/* серый контейнер */}
      {/* ----------------------- */}
      {isLoggedIn && (
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            height: '40px',
            width: '100vw',
            backgroundColor: '#EFF1F3',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <UserInfo />
        </Box>
      )}

      {/* ----------------------- */}
    </div>
  );
}

export default AppBar;
