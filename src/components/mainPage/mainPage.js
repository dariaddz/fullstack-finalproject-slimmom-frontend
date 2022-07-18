import { Outlet } from 'react-router-dom';

import Appbar from '../appBar';

import Container from '@mui/material/Container';

import s from './mainPage.module.css';

function MainPage() {
  let location = window.location.pathname;

  return (
    <div>
      <Container disableGutters={true}>
        <Appbar />

        <Outlet />
      </Container>
    </div>
  );
}
export default MainPage;
