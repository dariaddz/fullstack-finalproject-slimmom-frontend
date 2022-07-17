import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import { Spiner } from '../../components/spiner';

// import s from './userInfo.module.css';

const typografyStyle = {
  fontFamily: 'Gotham Pro',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '14px',
  lineHeight: '13px',
  letterSpacing: '0.04em',
  margin: 0,
  '&:hover': {
    color: '#212121',
  },
};
export default function UserInfo() {
  const userName = useSelector(authSelectors.getUsername);
  const isPending = useSelector(authSelectors.getIsPending);

  const dispatch = useDispatch();

  const [active, setActiv] = useState('nick');
  const onClickNick = () => {
    setActiv('nick');
  };

  return (
    <>
      {/* <Box
        sx={{
          display: 'flex',
          marginTop: '15px',
        }}
      > */}
      <Box
        sx={{
          ...typografyStyle,
          textTransform: 'Capitalize',
          padding: '0',
        }}
        color={active === 'nick' ? '#212121' : '#9B9FAA'}
        onClick={onClickNick}
      >
        {userName}
      </Box>

      <Box
        component={NavLink}
        to="/"
        // to="/login"
        sx={{
          ...typografyStyle,
          textTransform: 'Capitalize',
          padding: '0',
          marginLeft: '16px',
        }}
        onClick={() => dispatch(authOperations.logout())}
        color={active === 'exit' ? '#212121' : '#9B9FAA'}
      >
        Вихід
      </Box>
      {/* </Box> */}

      {isPending && <Spiner />}
    </>
  );
}
