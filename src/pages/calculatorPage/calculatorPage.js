import { useLocation } from 'react-router-dom';
import DailyCaloriesForm from '../../components/dailyCaloriesForm';
import RightSideBar from '../../components/rightSideBar';
import s from './calculatorPage.module.css';
import MobileMenuPage from '../mobileMenuPage';
import { useMobileMenu } from '../../helpers/mobileMenuContext/mobileMenuContext';
import Box from '@mui/material/Box';

const CalculatorPage = () => {
  const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu();
  const { pathname } = useLocation();

  return (
    <Box sx={{ position: 'relative' }}>
      {isMobileMenuOpen && (
        <MobileMenuPage
          pathname={pathname}
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
      )}
      <div className={s.container}>
        <div>
          <DailyCaloriesForm />
        </div>
        <RightSideBar />
      </div>
    </Box>
  );
};

export default CalculatorPage;
