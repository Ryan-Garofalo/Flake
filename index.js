import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory} from 'react-router'
import Login from './modules/Login'
import SignUp from './modules/SignUp'
import Template from './modules/Template'
import Dashboard from './modules/Dashboard'
import Eventful from './modules/Eventful'
import NewConnection from './modules/connections/New'
import ShowConnection from './modules/connections/Show'
import EditConnection from './modules/connections/Edit'
import NewList from './modules/lists/New'
import ShowList from './modules/lists/Show'
import EditList from './modules/lists/Edit'
import Profile from './modules/users/Profile'

render((
  <Router history={browserHistory}>
    <Route path="/" component={Login}/>
    <Route path="/signup" component={SignUp}/>
    <Route path="/:userName" component={Template}>
      <Route path="/:userName/dashboard" component={Dashboard}/>
      <Route path="/:userName/eventful" component={Eventful}/>
      <Route path="/:userName/connection/new" component={NewConnection} />
      <Route path="/:userName/connection/:id" component={ShowConnection}/>
      <Route path="/:userName/connection/:id/edit" component={EditConnection}/>
      <Route path="/:userName/lists/new" component={NewList} />
      <Route path="/:userName/lists/:id" component={ShowList}/>
      <Route path="/:userName/lists/:id/edit" component={EditList}/>
      <Route path="/:userName/profile" component={Profile} />
    </Route>
  </Router>
), document.getElementById('app'))
