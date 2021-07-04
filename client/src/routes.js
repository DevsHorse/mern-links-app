import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import LinksPage from './pages/LinksPage'
import CreatePage from './pages/CreatePage'
import DetailPage from './pages/DetailPage'
import AuthPage from './pages/AuthPage'

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/links" exac>
          <LinksPage/>
        </Route>
        <Route path="/create" exac>
          <CreatePage/>
        </Route>
        <Route path="/detail/:id">
          <DetailPage/>
        </Route>
        <Redirect to="/create"/>
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/" exac>
        <AuthPage/>
      </Route>
      <Redirect to="/"/>
    </Switch>
  )
}