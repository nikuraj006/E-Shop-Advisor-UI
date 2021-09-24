import './App.css';
import Login from './components/login';
import Home from './components/home';
import Profile from './components/profile';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import MyOrder from './components/myOrder';
import Category from './components/category';

function App() {
  return (
    <Router>
    <Route exact path ="/" component={Login}/> 
    <Route exact path ="/home" component={Home}/> 
    <Route exact path ="/profile" component={Profile}/>
    <Route exact path ="/myOrder" component={MyOrder}/> 
    <Route exact path="/category/:type" component={Category}/>
  </Router>
  );
}

export default App;
