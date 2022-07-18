import { authOperations } from '../../redux/auth';
import { useDispatch } from 'react-redux';

import { authSelectors } from '../../redux/auth';
import { useSelector } from 'react-redux';
import { Spiner } from '../../components/spiner';

import { Box } from '@mui/material';
import { LoginForm } from '../../components/loginForm';
import s from './loginPage.module.css';

export function LoginPage() {
  const dispatch = useDispatch();
  const isPending = useSelector(authSelectors.getIsPending);

  const onLogin = async ({ email, password }) => {
    dispatch(authOperations.login({ email, password }));
  };

  return (
    <Box
      sx={{
        padding: {
          xs: '40px 20px 0 20px',
          md: '130px 32px 0 32px',
          lg: '130px 16px 0 16px',
        },
      }}
    >
      <div className={s.container}></div>
      <LoginForm onLogin={onLogin} />
      {isPending && <Spiner />}
    </Box>
  );
}
