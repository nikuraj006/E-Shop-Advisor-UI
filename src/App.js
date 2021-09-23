import './App.css';
import Login from './components/login';
import Home from './components/home';
import Profile from './components/profile';
import {Route, BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
    <Route exact path ="/" component={Login}/> 
    <Route exact path ="/home" component={Home}/> 
    <Route exact path ="/profile" component={Profile}/> 
  </Router>
  );
}

export default App;
