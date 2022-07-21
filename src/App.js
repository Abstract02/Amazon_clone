import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path = '/' element = {<div>
            <Header />
            <Home />
          </div>} />
          <Route path = '/checkout' element = {<div>
            <Header />
            <Checkout />
            </div>} />
        <Route path = '/login' element = {<div>
            
            <Login />
            </div>} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;
