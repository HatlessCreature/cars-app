import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import AppCars from './pages/AppCars';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/cars'>Cars</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/cars'>
            <AppCars />
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
