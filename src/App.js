
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import AppCars from './pages/AppCars';
import AddCar from './pages/AddCar';
import AppLogin from './pages/AppLogin';
import AuthService from './services/AuthService';
import AppRegister from './pages/AppRegister';
import Car from './pages/Car';
import GuestRoute from './components/shared/GuestRoute';
import PrivateRoute from './components/shared/PrivateRoute';

function App() {
  const isAuthenticated = !!localStorage.getItem("token");

  function handleLogout() {
    AuthService.logout();
  }
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/cars'>Cars</Link>
            </li>

            {isAuthenticated ? (
              <>
                <li>
                  <Link to='/add'>Create a new car</Link>
                </li>
                <button onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <>
                <li>
                  <Link to='/login'>Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        <Switch>
          <PrivateRoute exact path='/cars'>
            <AppCars />
          </PrivateRoute>
          <PrivateRoute exact path='/cars/:id'>
            <Car />
          </PrivateRoute>
          <PrivateRoute exact path='/add'>
            <AddCar />
          </PrivateRoute>
          <Route exact path='/edit/:id'>
            <AddCar />
          </Route>
          <GuestRoute exact path='/login'>
            <AppLogin />
          </GuestRoute>
          <GuestRoute exact path='/register'>
            <AppRegister />
          </GuestRoute>
          <Route exact path={`/`}>
            <Redirect to='/cars' />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
