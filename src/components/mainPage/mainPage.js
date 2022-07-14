import { Outlet } from 'react-router-dom';
// import  Appbar  from '../appbar';
import Container from '@mui/material/Container';

import s from './mainPage.module.css';

function MainPage() {
  return (
    <>
<div className={s.container}>
        <div className={s.blur}>
<Container disableGutters={true}>
      
      {/* <Appbar /> */}
      <Outlet />
      
    </Container>
      </div>
      </div>
    </>
  );
}
export default MainPage;
