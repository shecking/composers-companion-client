import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import '../../index.scss'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import HomePage from '../../routes/HomePage'
import ChangePassword from '../ChangePassword/ChangePassword'
import CreateSketch from '../../routes/CreateSketch'
import ViewSketches from '../../routes/ViewSketches'
import ShowSketch from '../../routes/ShowSketch'
import UpdateSketch from '../../routes/UpdateSketch'
import Error404 from '../Error404/Error404'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  msgAlert = ({ heading, message, variant }) => {
    this.setState({ msgAlerts: [...this.state.msgAlerts, { heading, message, variant }] })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
          />
        ))}
        <main className="container">
          <Switch>
            <Route exact path='/' render={() => (
              <HomePage />
            )} />
            <Route path='/sign-up' render={() => (
              <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
            )} />
            <Route path='/sign-in' render={() => (
              <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
            )} />
            <AuthenticatedRoute user={user} exact path='/sign-out' render={() => (
              <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
            )} />
            <AuthenticatedRoute user={user} exact path='/change-password' render={() => (
              <ChangePassword msgAlert={this.msgAlert} user={user}/>
            )} />
            <AuthenticatedRoute user={user} exact path='/create-sketch' render={() => (
              <CreateSketch msgAlert={this.msgAlert} user={user}/>
            )} />
            <AuthenticatedRoute user={user} exact path='/sketches' render={({ match }) => (
              <ViewSketches user={user} match={match}/>
            )} />
            <AuthenticatedRoute user={user} exact path='/sketches/:id' render={({ match }) => (
              <ShowSketch msgAlert={this.msgAlert} user={user} match={match}/>
            )} />
            <AuthenticatedRoute user={user} exact path='/update-sketch/:id' render={({ match }) => (
              <UpdateSketch msgAlert={this.msgAlert} user={user} match={match}/>
            )} />
            <Route component={Error404}
            />
          </Switch>
        </main>
        <Footer user={user} />
      </Fragment>
    )
  }
}

export default App
