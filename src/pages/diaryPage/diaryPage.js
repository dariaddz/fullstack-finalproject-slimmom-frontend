import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import DiaryProductsList from '../../components/diaryProductsList';
import DiaryAddProductForm from '../../components/diaryAddProductForm';
import DiaryDateCalendar from '../../components/dateForm';
import Button from '../../components/button';
import AddIcon from '@mui/icons-material/Add';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import RightSideBar from '../../components/rightSideBar';
import Box from '@mui/material/Box';
import MobileMenuPage from '../mobileMenuPage';
import { useMobileMenu } from '../../helpers/mobileMenuContext/mobileMenuContext';
import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import UserInfo from '../../components/userInfo';
import styles from './diaryPage.module.css';
import { dateEatenProducts } from '../../redux/day/day_selector';

const DiaryPage = () => {
  const [mobileFormIsVisible, setMobileFormIsVisible] = useState(false);
  const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu();
  const { pathname } = useLocation();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const dateEatenProductsInfo = useSelector(dateEatenProducts);
  const currentDate = new Date().toLocaleDateString('fr-CA');

  const handleClick = () => {
    setMobileFormIsVisible(prev => !prev);
  };

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
          {/* <NavLink to="/calculator">
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
      <div className={styles.flexBox}>
        {isMobileMenuOpen && (
          <MobileMenuPage
            pathname={pathname}
            isMobileMenuOpen={isMobileMenuOpen}
            toggleMobileMenu={toggleMobileMenu}
          />
        )}
        {!mobileFormIsVisible ? (
          <>
            <div className={styles.exampleBox}>
              <DiaryDateCalendar />
              <div className={styles.isHidddenMobile}>
                <DiaryAddProductForm />
              </div>
              <DiaryProductsList />
              <div className={styles.isHidddenTablet}>
                {currentDate === dateEatenProductsInfo ? (
                  <Button
                    customType="primary"
                    className="small"
                    onClick={handleClick}
                    disabled={currentDate !== dateEatenProductsInfo}
                  >
                    <AddIcon />
                  </Button>
                ) : null}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={styles.exampleBox}>
              <DiaryAddProductForm />
              <KeyboardBackspaceIcon
                sx={{ display: { sx: 'block', sm: 'block', md: 'none' } }}
                className={styles.backButton}
                onClick={handleClick}
              />
            </div>
          </>
        )}
      </div>
      <RightSideBar />
    </Box>
  );
};

export default DiaryPage;
