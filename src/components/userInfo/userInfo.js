import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
// import { authSelectors } from '../../redux/auth';
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
  //   const userName = useSelector(authSelectors.getUserName);

  const [active, setActiv] = useState('nick');
  const onClickNick = () => {
    setActiv('nick');
  };

  const onClickExit = () => {
    setActiv('exit');
  };
  return (
    <>
      <Button
        //   component={NavLink} to=""
        sx={{ padding: '0' }}
      >
        <Typography
          sx={{ ...typografyStyle, textTransform: 'Capitalize' }}
          color={active === 'nick' ? '#212121' : '#9B9FAA'}
          onClick={onClickNick}
        >
          Nick
          {/* {userName} */}
        </Typography>
      </Button>

      <Button
        //   onClick={() => dispatch(authOperations.logOut())}
        sx={{ padding: '0', marginLeft: '16px' }}
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
