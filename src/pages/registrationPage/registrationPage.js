import { authOperations } from '../../redux/auth';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-hot-toast';

import { Box } from '@mui/material';
import { RegistrationForm } from '../../components/registrationForm';
import { Spiner } from '../../components/spiner';

export function RegistrationPage() {
  const dispatch = useDispatch();
  // let navigate = useNavigate();

  const onRegister = async ({ name, email, password }) => {
    // const data = await
    dispatch(authOperations.register({ name, email, password }));
    // .then(data => console.log('promis', data));
    // console.log('registerpage', data);
  };

  return (
    <Box
      sx={{
        // posution: { md: 'absolute' },
        // top: { md: '240px', lg: '306px' },
        // left: { md: '32px', lg: '16' },
        padding: {
          xs: '40px 20px 0 20px',
          md: '160px 32px 0 32px',
          lg: '160px 16px 0 16px',
        },
        // margin: { xs: '40px 0 0 0', md: '160px 0 0 0' },
      }}
    >
      <RegistrationForm onRegister={onRegister} />
      {/* <Spiner /> */}
    </Box>
  );
}
