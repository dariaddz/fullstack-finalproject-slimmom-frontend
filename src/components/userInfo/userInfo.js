import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  // Button, Typography,
  Box,
} from '@mui/material';
// import { Paper } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import { Spiner } from '../../components/spiner';
// import { ResetProductState } from '../rightSideBar/rightSideBar';

// import s from './userInfo.module.css';

//--Eugen
import { clearProducts } from '../../redux/day/day_operation';
import { clearKcal } from '../../redux/calculator/calculator_action';
//--Eugen


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

  // async function logoutAndReset() {
  //   await dispatch(authOperations.logout()).then(ResetProductState());
  // }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyItems: 'flex-end',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            ...typografyStyle,
            textTransform: 'Capitalize',
            padding: '0',
            display: 'inline-flex',
          }}
          color={active === 'nick' ? '#212121' : '#9B9FAA'}
          onClick={onClickNick}
        >
          {userName}
        </Box>
        <Box //горизонтальная палка
          sx={{
            display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'flex' },
            height: '32px',
            width: '2px',
            backgroundColor: '#A9A9A9',
            marginLeft: '13px',
          }}
        />
        <Box
          component={NavLink}
          to="/"
          // to="/login"
          sx={{
            ...typografyStyle,
            textTransform: 'Capitalize',
            padding: '0',
            marginLeft: '16px',
            display: 'inline-flex',
          }}
          onClick={async () => {
            //--Eugen
            const res = await dispatch(authOperations.logout());
            if (res.meta.requestStatus === 'fulfilled') {
              dispatch(clearProducts()); dispatch(clearKcal());
              //--Eugen
              // ResetProductState();
              // logoutAndReset();
            }
          }}
          color={active === 'exit' ? '#212121' : '#9B9FAA'}
        >
          Вихід
        </Box>
      </Box>

      {isPending && <Spiner />}
    </>
  );
}
