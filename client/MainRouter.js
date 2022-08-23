import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
const MainRouter = () => {
  return (<div>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/users" component={Users}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/signin" component={Signin}/>
      <Link to="/users">Users</Link>
    </Switch>
  </div>)
}

export default MainRouter