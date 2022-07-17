import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

import { Box } from '@mui/material';
import Logo from '../logo';
import AuthNav from '../authNav';
import Navigation from '../navigation';
import UserInfo from '../userInfo';
import Burger from '../burger';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
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
          // width: {
          //   xs: 'calc(100vw-40px)',
          //   md: 'calc(100vw-64px)',
          //   lg: 'calc(100vw-32px)',
          // },
          backgroundColor: 'transparent',
        }}
        disableGutters={true}
        fixed={true}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Logo />
          {isLoggedIn && <Navigation />}
        </Box>
        {/* <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: { lg: '85vw' },
          }}
        > */}
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
        {/* </Box> */}

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
            display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none' },
            height: '14px',
            width: 'inherit',
            backgroundColor: '#EFF1F3',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '14px 20px',
          }}
        >
          <KeyboardBackspaceIcon
            sx={{ display: { sx: 'block', sm: 'block', md: 'none' } }}
            // className={styles.backButton}
            // onClick={handleClick}
          />
          <UserInfo />
        </Box>
      )}

      {/* ----------------------- */}
    </div>
  );
}

export default AppBar;
