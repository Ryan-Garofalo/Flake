import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory} from 'react-router'
import Login from './modules/Login'
import SignUp from './modules/SignUp'
import Template from './modules/Template'
import Dashboard from './modules/views/dashboard'
import ConnectionDashboard from './modules/views/connectionDashboard'
import Activities from './modules/views/activities'
import Flake from './modules/views/flake'
import Squad from './modules/views/Squad'
import Practice from './modules/views/practice'
import Calender from './modules/views/calender'
import Profile from './modules/users/Profile'


render((
  <Router history={browserHistory}>
    <Route path="/" component={Login}/>
    <Route path="/signup" component={SignUp}/>
    <Route path="/:userName" component={Template}>
      <Route path="/:userName/activities" component={Activities}/>
      <Route path="/:userName/dashboard" component={Dashboard}/>
      <Route path="/:userName/flake" component={Flake} />
      <Route path="/:userName/mySquad" component={Squad}/>
      <Route path="/:userName/calender" component={Calender}/>
      <Route path="/:userName/practice" component={Practice}/>
      <Route path="/:userName/profile" component={Profile} />
      <Route path="/connection/sched/:id" component={ConnectionDashboard} />
    </Route>
  </Router>
), document.getElementById('app'))
