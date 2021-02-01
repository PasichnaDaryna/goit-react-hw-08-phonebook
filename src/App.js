import './App.css';

import { Component } from 'react';
// import shortid from 'shortid';
import Container from './components/Container/Container';
import ContactsView from './views/ContactsView';
import HomeView from './views/Homepage';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import AppBar from './components/AppBar';
import { Switch, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Container>
          <AppBar />

          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route path="/register" component={RegisterView} />
            <Route path="/login" component={LoginView} />
            <Route path="/contacts" component={ContactsView} />
          </Switch>
        </Container>
      </ErrorBoundary>
    );
  }
}

export default App;
