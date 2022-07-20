import { useLocation } from 'react-router-dom';
import DailyCaloriesForm from '../../components/dailyCaloriesForm';
import RightSideBar from '../../components/rightSideBar';
import s from './calculatorPage.module.css';
import MobileMenuPage from '../mobileMenuPage';
import { useMobileMenu } from '../../helpers/mobileMenuContext/mobileMenuContext';
import Box from '@mui/material/Box';
import UserInfo from '../../components/userInfo';
import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
// import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const CalculatorPage = () => {
  const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu();
  const { pathname } = useLocation();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Box
      sx={{
        position: {
          xs: 'relative',
          sm: 'relative',
          md: 'relative',
          lg: 'static',
        },
        marginLeft: 'auto',
        marginRight: 'auto',
        width: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
      }}
    >
      {/* sx={{ position: 'relative' }} */}
      {isLoggedIn && (
        <Box
          sx={{
            display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none' },
            height: '14px',
            // width: '100%',
            backgroundColor: '#EFF1F3',
            justifyContent: 'flex-end',
            alignItems: 'center',
            padding: '14px 20px',
          }}
        >
          {/* <NavLink to="/diary">
            <KeyboardBackspaceIcon
              sx={{
                textDecoration: 'none',
                color: '#000000',
                display: { sx: 'block', sm: 'block', md: 'none' },
              }}
              // className={styles.backButton}
              // onClick={handleClick}
            />
          </NavLink> */}
          <UserInfo />
        </Box>
      )}
      {isMobileMenuOpen && (
        <MobileMenuPage
          pathname={pathname}
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
      )}
      <div className={s.container}>
        <DailyCaloriesForm />
        <RightSideBar />
      </div>
    </Box>
  );
};

export default CalculatorPage;
