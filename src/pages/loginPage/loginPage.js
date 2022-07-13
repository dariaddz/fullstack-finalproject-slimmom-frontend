import { authOperations } from '../../redux/auth';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-hot-toast';

import { Box } from '@mui/material';
import { LoginForm } from '../../components/loginForm';

export function LoginPage() {
  const dispatch = useDispatch();
  // let navigate = useNavigate();

  const onLogin = async ({ email, password }) => {
    // const data = await
    dispatch(authOperations.login({ email, password }))
    // .then(data => console.log('promis', data));
    // console.log('loginpage', data);
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
      <LoginForm onLogin={onLogin} />
    </Box>
  );
};