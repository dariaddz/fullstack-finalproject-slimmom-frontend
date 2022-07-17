// import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';

const typografyStyle = {
  fontFamily: 'Gotham Pro',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '14px',
  lineHeight: '13px',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  '&:hover': {
    color: '#212121',
  },
};
export default function Navigation() {
  // const [active, setActiv] = useState('diary');
  const { pathname } = useLocation();

  // const onClickDiary = () => {
  //   setActiv('diary');
  // };
  // const onClickCalculator = () => {
  //   setActiv('calculator');
  // };
  return (
    <Box sx={{ display: 'flex' }}>
      <Button component={NavLink} to="/diary" sx={{ padding: '0' }}>
        <Typography
          sx={{
            ...typografyStyle,
            display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
          }}
          color={pathname === '/diary' ? '#212121' : '#9B9FAA'}
          // onClick={onClickDiary}
        >
          щоденник
        </Typography>
      </Button>
      <Button
        component={NavLink}
        to="/calculator"
        sx={{
          padding: '0',
          marginLeft: { xs: 'none', sm: 'none', md: 'none', lg: '16px' },
          display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
        }}
      >
        <Typography
          sx={{ ...typografyStyle }}
          // onClick={onClickCalculator}
          color={pathname === '/calculator' ? '#212121' : '#9B9FAA'}
        >
          калькулятор
        </Typography>
      </Button>
    </Box>
  );
}
