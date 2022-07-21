import { BsList } from 'react-icons/bs';
import { VscChromeClose } from 'react-icons/vsc';
import { useMobileMenu } from '../../helpers/mobileMenuContext/mobileMenuContext';
import { Button } from '@mui/material';

const Burger = () => {
  const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu();

  return (
    <Button
      onClick={() => {
        toggleMobileMenu();
      }}
      sx={{
        display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' },
        color: '#212121',
        padding: '0',
      }}
    >
      {isMobileMenuOpen ? (
        <VscChromeClose size="24px" />
      ) : (
        <BsList size="24px" />
      )}
    </Button>
  );
};

export default Burger;
