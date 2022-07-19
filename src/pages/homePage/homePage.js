import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';
import s from './homePage.module.css';
import DailyCaloriesForm from '../../../src/components/dailyCaloriesForm';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

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
      <Box
        sx={{
          display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none' },
          height: '14px',
          width: '320px',
          backgroundColor: '#EFF1F3',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '14px 20px',
        }}
      >
        <NavLink to="/">
          <KeyboardBackspaceIcon
            sx={{ display: { sx: 'block', sm: 'block', md: 'none' } }}
            // className={styles.backButton}
            // onClick={handleClick}
          />
        </NavLink>
        {/* <UserInfo /> */}
      </Box>
      {/* )} */}
      <Box sx={{ position: 'relative' }}>
        <DailyCaloriesForm />
      </Box>
    </div>
  );
};

export default HomePage;
