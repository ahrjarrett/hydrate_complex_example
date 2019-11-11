import React from "react"
import { Route, Switch } from "react-router-dom"

import { Navbar } from "./Navbar"
import { MatchFail } from "./MatchFail"
import { routes } from "../shared/routes"

export function App({ data }) {
  return (
    <div>
      <Navbar />
      <Switch>
        {routes.map(({ path, exact, component: C, ...rest }) => (
          <Route
            key={path}
            path={path}
            exact={exact}
            render={props => <C {...props} {...rest} />}
          />
        ))}
        <Route render={props => <MatchFail {...props} />} />
      </Switch>
    </div>
  )
}
