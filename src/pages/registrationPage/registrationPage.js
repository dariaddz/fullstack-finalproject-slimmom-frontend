import { authSelectors } from '../../redux/auth';
import { authOperations } from '../../redux/auth';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { Box } from '@mui/material';
import { RegistrationForm } from '../../components/registrationForm';
import { Spiner } from '../../components/spiner';

export function RegistrationPage() {
  const dispatch = useDispatch();
  const isPending = useSelector(authSelectors.getIsPending);

  const onRegister = async ({ name, email, password }) => {
    dispatch(authOperations.register({ name, email, password }));
  };

  return (
    <Box
      sx={{
        padding: {
          xs: '40px 20px 0 20px',
          md: '160px 32px 0 32px',
          lg: '160px 16px 0 16px',
        },
      }}
    >
      <RegistrationForm onRegister={onRegister} />
      {isPending && <Spiner />}
    </Box>
  );
}
