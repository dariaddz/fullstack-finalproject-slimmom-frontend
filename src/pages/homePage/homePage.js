import { Box } from '@mui/material';
import s from './homePage.module.css';
import DailyCaloriesForm from '../../../src/components/dailyCaloriesForm';

const HomePage = () => {
  return (
    <div className={s.container}>
      <Box>
        <DailyCaloriesForm />
      </Box>
    </div>
  );
};

export default HomePage;
