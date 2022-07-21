// import { useState } from 'react';
import { Box } from '@mui/material';
import s from './homePage.module.css';
import DailyCaloriesForm from '../../../src/components/dailyCaloriesForm';

const HomePage = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const getShowModal = data => {
  //   setIsModalOpen(data);
  // };

  // const toggleIsModalOpen = () => {
  //   setIsModalOpen(!isModalOpen);
  // };

  return (
    <div className={s.container}>
      {/* {isLoggedIn && ( */}

      {/* )} */}
      <Box>
        <DailyCaloriesForm
        // getShowModal={getShowModal}
        // isModalOpen={isModalOpen}
        />
      </Box>
    </div>
  );
};

export default HomePage;
