import { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import DiaryProductsList from '../../components/diaryProductsList';
import DiaryAddProductForm from '../../components/diaryAddProductForm';
import Button from '../../components/button';
import AddIcon from '@mui/icons-material/Add';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import RightSideBar from '../../components/rightSideBar';
import Box from '@mui/material/Box';
import MobileMenuPage from '../mobileMenuPage';

import styles from './diaryPage.module.css';

const DiaryPage = () => {
  const [mobileFormIsVisible, setMobileFormIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const { pathname } = useLocation();

  const handleClick = () => {
    setMobileFormIsVisible(prev => !prev);
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <div className={styles.flexBox}>
        {isMobileMenuOpen && (
          <MobileMenuPage
            ref={mobileMenuRef}
            pathname={pathname}
            isMobileMenuOpen={isMobileMenuOpen}
          />
        )}
        {!mobileFormIsVisible ? (
          <>
            <div className={styles.exampleBox}>
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
