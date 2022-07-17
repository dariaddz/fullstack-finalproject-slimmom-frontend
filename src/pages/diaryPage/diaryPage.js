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

import styles from './diaryPage.module.css';

const DiaryPage = () => {
  const [mobileFormIsVisible, setMobileFormIsVisible] = useState(false);
  const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu();
  const { pathname } = useLocation();

  const handleClick = () => {
    setMobileFormIsVisible(prev => !prev);
  };

  return (
    <Box sx={{ position: 'relative' }}>
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
                <Button
                  customType="primary"
                  className="small"
                  onClick={handleClick}
                >
                  <AddIcon />
                </Button>
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
