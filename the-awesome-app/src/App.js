
import Hello from './components/Hello';
import Counter from './components/Counter';
import ListProducts from './components/ListProducts';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Gadgets from './components/Gadgets';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { AppTheme } from './context/AppTheme';
import { useContext } from 'react';
import ThemeSwitcher from './context/ThemeSwicther';
import UseCallbackDemo from './components/UseCallbacks';

function App() {

  const theme = useContext(AppTheme);

  return (

    <Router basename="/">
      <div className="container-fluid">
        {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> */}
        <nav className={`navbar navbar-expand-lg ${theme.state.mode === 'dark' ? "navbar-dark bg-dark": "navbar-light bg-light"}`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">React</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link"  to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  to="/counter">Counter</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  to="/gadgets">Gadgets</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  to="/callbacks">UseCallback</Link>
              </li>
              <li className="nav-item">
                <ThemeSwitcher/>
              </li>
            </ul>
          </div>
        </nav>

        <section>
         
              <Route path="/home" component={Hello}/>
              <Route path="/counter" component={Counter}/>
              <Route path="/products" component={ListProducts}/>
              <ProtectedRoute path="/gadgets" component={Gadgets}/>
              <Route path="/login" component={Login}/>
              <Route path="/callbacks" component={UseCallbackDemo}/>
          
        </section>
      </div>
    </Router>
  );
}

export default App;
