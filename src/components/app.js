import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Dashboard from './dashboard';
import SignUp from './sign_up';
import SignIn from './sign_in';
import PostCreate from './post_create';
import PostDetail from './post_detail';
import PrivateRoute from './private_route';


const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/sign-in" component={SignIn} />
          <PrivateRoute path="/new" component={PostCreate} />
          <Route exact path="/post/:id" component={PostDetail} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};


// const Nav = (props) => {
//   return (
//     <nav>
//       <ul>
//         <li><NavLink to="/" exact>Home</NavLink></li>
//         {/* <li><NavLink to="/about">About</NavLink></li>
//         <li><NavLink to="/test/id1">test id1</NavLink></li>
//         <li><NavLink to="/test/id2">test id2</NavLink></li> */}
//       </ul>
//     </nav>
//   );
// };

export default App;
