import { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
};
export default function Navigation() {
  const [active, setActiv] = useState('diary');
  const onClickDiary = () => {
    setActiv('diary');
  };

  const onClickCalculator = () => {
    setActiv('calculator');
  };
  return (
    <Box>
      <Button component={NavLink} to="/diary" sx={{ padding: '0' }}>
        <Typography
          sx={{ ...typografyStyle }}
          color={active === 'diary' ? '#212121' : '#9B9FAA'}
          onClick={onClickDiary}
        >
          щоденник
        </Typography>
      </Button>
      <Button
        component={NavLink}
        to="/calculator"
        sx={{ padding: '0', marginLeft: '16px' }}
      >
        <Typography
          sx={{ ...typografyStyle }}
          onClick={onClickCalculator}
          color={active === 'calculator' ? '#212121' : '#9B9FAA'}
        >
          калькулятор
        </Typography>
      </Button>
    </Box>
  );
}
