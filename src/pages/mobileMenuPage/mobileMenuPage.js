import {
  Paper,
  Backdrop,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

const MobileMenuPage = ({ isMobileMenuOpen, pathname, toggleMobileMenu }) => {
  return (
    <Backdrop
      sx={{
        position: 'absolute',
        top: '0',
        left: '0',
        display: { sm: 'block', md: 'block', lg: 'none' },
        pointerEvents: { lg: 'none' },
        color: '#D3D3D3',
        zIndex: theme => theme.zIndex.drawer + 1,
      }}
      open={isMobileMenuOpen}
    >
      <Paper
        square={true}
        sx={{
          backgroundColor: '#264061',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: '0',
          right: '0',
          transform: `${({ isMobileMenuOpen }) =>
            isMobileMenuOpen ? `translateX(0)` : `translateX(100%)`}`,
          transition: 'transform 1000ms linear 500ms',
        }}
      >
        <List style={{ paddingTop: '60px' }}>
          <ListItem
            disablePadding
            style={{
              marginBottom: '20px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <NavLink
              to="/diary"
              onClick={() => {
                toggleMobileMenu();
              }}
            >
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    type="body2"
                    style={{
                      color: pathname === '/diary' ? '#FFFFFF' : '#9B9FAA',
                      fontSize: '18px',
                      textTransform: 'uppercase',
                      fontWeight: '700',
                      lineHeight: '1.21',
                    }}
                  >
                    Щоденник
                  </Typography>
                }
              />
            </NavLink>
          </ListItem>
          <ListItem
            disablePadding
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <NavLink
              to="/calculator"
              onClick={() => {
                toggleMobileMenu();
              }}
            >
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    type="body2"
                    style={{
                      color: pathname === '/calculator' ? '#FFFFFF' : '#9B9FAA',
                      fontSize: '18px',
                      textTransform: 'uppercase',
                      fontWeight: '700',
                      lineHeight: '1.21',
                    }}
                  >
                    Калькулятор
                  </Typography>
                }
              />
            </NavLink>
          </ListItem>
        </List>
      </Paper>
    </Backdrop>
  );
};

export default MobileMenuPage;
