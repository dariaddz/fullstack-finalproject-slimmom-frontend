import { useState } from 'react';

import DiaryAddProductForm from '../../components/diaryAddProductForm';
import Button from '../../components/button';
import AddIcon from '@mui/icons-material/Add';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import styles from './diaryPage.module.css';

const DiaryPage = () => {
  const [mobileFormIsVisible, setMobileFormIsVisible] = useState(false);
  const handleClick = () => {
    setMobileFormIsVisible(prev => !prev);
  };

  return (
    <>
      <div className={styles.flexBox}>
        {!mobileFormIsVisible ? (
          <>
            <div className={styles.exampleBox}>
              <div className={styles.isHidddenMobile}>
                <DiaryAddProductForm />
              </div>

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
    </>
  );
};

export default DiaryPage;
