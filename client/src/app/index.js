import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Form from './pages/Form';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './components/PrivateRoute';
import GlobalStyles from './GlobalStyles';
import Footer from './components/Footer';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <header>
        <Navbar />
        <ToastContainer />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/create-post" component={Form} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
