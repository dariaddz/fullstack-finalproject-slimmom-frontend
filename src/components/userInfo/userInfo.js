import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

import s from './userInfo.module.css';

const typografyStyle = {
  fontFamily: 'Gotham Pro',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '14px',
  lineHeight: '13px',
  letterSpacing: '0.04em',
};
export default function UserInfo() {
  const userName = useSelector(authSelectors.getUsername);

  const dispatch = useDispatch();

  const [active, setActiv] = useState('nick');
  const onClickNick = () => {
    setActiv('nick');
  };

  const onClickExit = () => {
    setActiv('exit');
  };
  return (
    <>
      <Button sx={{ padding: '0' }}>
        <Typography
          sx={{ ...typografyStyle, textTransform: 'Capitalize' }}
          color={active === 'nick' ? '#212121' : '#9B9FAA'}
          onClick={onClickNick}
        >
          Nick
          {userName}
        </Typography>
      </Button>

      <Button
        onClick={() => dispatch(authOperations.logout())}
        sx={{ padding: '0', marginLeft: '16px' }}
        component={NavLink}
        to="/login"
      >
        <Typography
          sx={{ ...typografyStyle, textTransform: 'Capitalize' }}
          onClick={onClickExit}
          color={active === 'exit' ? '#212121' : '#9B9FAA'}
        >
          Вихід
        </Typography>
      </Button>
    </>
  );
}
