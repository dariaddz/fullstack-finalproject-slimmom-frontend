import { useRef } from 'react';
import {
  Paper,
  Backdrop,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

const MobileMenuPage = ({ isMobileMenuOpen, pathname }) => {
  const mobileMenuRef = useRef();

  return (
    <Backdrop
      ref={mobileMenuRef}
      sx={{
        position: 'absolute',
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
            <NavLink to="/diary">
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
            <NavLink to="/calculator">
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
