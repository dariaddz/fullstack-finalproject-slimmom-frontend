import { authSelectors } from '../../redux/auth';
import { authOperations } from '../../redux/auth';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { Box } from '@mui/material';
import { RegistrationForm } from '../../components/registrationForm';
import { Spiner } from '../../components/spiner';
import { useNavigate } from 'react-router-dom';
import s from './registrationPage.module.css';

export function RegistrationPage() {
  const dispatch = useDispatch();
  const isPending = useSelector(authSelectors.getIsPending);
  const navigate = useNavigate();

  const onRegister = async data => {
    dispatch(authOperations.register(data)).then(data => {
      if (data.meta.requestStatus === 'fulfilled') navigate('/');
    });
  };

  return (
    <>
      <Box
        sx={{
          padding: {
            xs: '40px 20px 0 20px',
            md: '100px 32px 0 32px',
            lg: '100px 16px 0 16px',
          },
        }}
      >
        <div className={s.container}></div>
        <RegistrationForm onRegister={onRegister} />

        {isPending && <Spiner />}
      </Box>
    </>
  );
}
