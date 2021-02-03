import './App.css';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import shortid from 'shortid';
import Container from './components/Container/Container';
// import ContactsView from './views/ContactsView';
// import HomeView from './views/Homepage';
// import RegisterView from './views/RegisterView';
// import LoginView from './views/LoginView';
import AppBar from './components/AppBar';
import { Switch } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { ToastContainer } from 'react-toastify';
import { authOperations, authSelectors } from './redux/auth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import 'react-toastify/dist/ReactToastify.css';

const HomeView = lazy(() => import('./views/Homepage'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));
const UploadView = lazy(() => import('./views/UploadView'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <ErrorBoundary>
      <Container>
        {isFetchingCurrentUser ? (
          <h1>React Skeleton</h1>
        ) : (
          <>
            <AppBar />

            <Switch>
              <Suspense fallback={<p>Loading...</p>}>
                <PublicRoute exact path="/">
                  <HomeView />
                </PublicRoute>
                <PublicRoute exact path="/register" restricted>
                  <RegisterView />
                </PublicRoute>
                <PublicRoute exact path="/login" redirectTo="/todos" restricted>
                  <LoginView />
                </PublicRoute>
                <PrivateRoute
                  path="/contacts"
                  component={ContactsView}
                  redirectTo="/login"
                />
                <PrivateRoute path="/upload" redirectTo="/login">
                  <UploadView />
                </PrivateRoute>
              </Suspense>
            </Switch>
          </>
        )}
        <ToastContainer />
      </Container>
    </ErrorBoundary>
  );
}
