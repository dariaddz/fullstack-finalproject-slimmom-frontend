import { Outlet } from 'react-router-dom';

import Appbar from '../appBar';

import Container from '@mui/material/Container';

function MainPage() {
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
