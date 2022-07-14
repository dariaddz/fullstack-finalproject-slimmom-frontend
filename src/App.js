import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from './redux/auth';

import './App.css';
// import DailyCaloriesForm from './components/dailyCaloriesForm';
import MainPage from './components/mainPage';
import { Spiner } from './components/spiner';

// import Layout  from './components/Layout';
import { authOperations /*authSelectors*/ } from './redux/auth';
// import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/publicRoute';

const HomePage = lazy(() => import('./pages/homePage'));
const RegistrationPage = lazy(() => import('./pages/registrationPage'));
const LoginPage = lazy(() => import('./pages/loginPage'));
// const CalculatorPage = lazy(() => import('./pages/calculatorPage'));
const DiaryPage = lazy(() => import('./pages/diaryPage'));

function App() {
  //--Eugen
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  //--Eugen
  return (
    <>
      {isFetchingCurrentUser ? (
        <Spiner />
      ) : (
        <Suspense fallback={<Spiner />}>
          <Routes>
            <Route path="/" element={<MainPage />}>
              {/* <Route path="/" element={<PublicRoute />}> */}
              <Route index element={<HomePage />} />

              {/* <Route
            path="/register"
            element={<PublicRoute restricted redirectTo="/" />}
          > */}
              {<Route path="register" element={<RegistrationPage />} />}
              {/* </Route> */}
              {/* <Route
            path="/login"
            element={<PublicRoute restricted redirectTo="/" />}
          > */}

              <Route
                path="login"
                element={
                  <PublicRoute
                    component={<LoginPage />}
                    redirectTo="/"
                    restricted
                  />
                }
              />

              {/* <Route
            path="/calculator"
            element={<PrivateRoute redirectTo="/login" />}
          > */}
              {/* <Route path="/diary" element={<DiaryPage />} /> */}
              {/* </Route> */}
              {/* <Route

            path="*"
            element={<PublicRoute restricted redirectTo="/diary" />}
          >
            <Route path="*" element={<NotFoundPage />} />
          </Route> */}

              {/* </Route>
          </Route> */}

              <Route path="diary" element={<DiaryPage />} />
            </Route>
          </Routes>
        </Suspense>
      )}
    </>
  );
}

export default App;
