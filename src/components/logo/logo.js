import { Box } from '@mui/material';
import logo from '../../images/logo/logo-2x.png';
import logoSlim from '../../images/logo/logo-slim-2x.png';
import logoMom from '../../images/logo/logo-mom-2x.png';
import s from './logo.module.css';

const Logo = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
      }}
    >
      <Box
      // sx={{
      //   width: { xs: '47px', md: '47px', lg: '70px' },
      //   height: { xs: '44px', md: '44px', lg: '66px' },
      //   marginBottom: '20px',
      // }}
      >
        <img className={s.logo} src={logo} alt="Logo" />
      </Box>
      <Box
        sx={{
          display: { sm: 'none', md: 'flex' },
          height: '16px',
        }}
      >
        <img
          className={s.logoSlim}
          src={logoSlim}
          alt="Logo name"
          width={47}
          height={16}
        />
        <img src={logoMom} alt="Logo name" width={47} height={16} />
      </Box>
    </Box>
  );
};

export default Logo;
