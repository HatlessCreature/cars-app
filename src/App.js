
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import AppCars from './pages/AppCars';
import AddCar from './pages/AddCar';
import AppLogin from './pages/AppLogin';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/cars'>Cars</Link>
            </li>
            <li>
              <Link to='/add'>Create a new car</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/cars'>
            <AppCars />
          </Route>
          <Route exact path='/add'>
            <AddCar />
          </Route>
          <Route exact path='/edit/:id'>
            <AddCar />
          </Route>
          <Route exact path='/login'>
            <AppLogin />
          </Route>
          <Route exact path={`/`}>
            <Redirect to='/cars' />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
