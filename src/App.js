import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WorkspacePage from './pages/WorkspacePage';
import LoginPage from './pages/LoginPage';
import AuthProvider from './AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route path="/auth/login">
          <LoginPage />
        </Route>
        <Route path="/workspace/:id">
          <WorkspacePage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </AuthProvider>
  );
}

export default App;


// "/workspace/a" startWith "/workspace" => true
// "/workspace/a" === "/workspace" => false