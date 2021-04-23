import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Posts from './components/posts/Posts';
import Account from './components/pages/Account';
import SignUp from './components/pages/SignUp';
import LogIn from './components/pages/LogIn';
import LogOut from './components/pages/LogOut';
import NavBar from './components/shared/NavBar';
import Post from './components/posts/Post/Post';
import { getPosts } from './actions/posts';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const auth = useSelector((state) => state.auth );

  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="container">
  
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/logout" component={LogOut} />
            <Route exact path="/posts" component={Posts} />
            <Route path="/posts/:id" component={Post} />
            <Route exact path="/account" component={Account} />
            
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
