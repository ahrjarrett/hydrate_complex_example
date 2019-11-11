import React from "react"
import express from "express"
import cors from "cors"
import serialize from "serialize-javascript"
import { renderToString } from "react-dom/server"
import { StaticRouter, matchPath } from "react-router-dom"
import "regenerator-runtime/runtime"

import { routes } from "../shared/routes"
import { App } from "../shared/App"
import { fetchPopularRepos } from "../shared/api"

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.static("public"))

app.get("*", (req, res, next) => {
  const activeRoute = routes.find(route => matchPath(req.url, route)) || {}
  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve()

  promise
    .then(response => {
      const data = response ? response.items : []
      const context = { data }
      const markup = renderToString(
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      )

      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Hydrating SSR - ahrjarrett</title>
            <script src="/bundle.js" defer></script>
            <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
            </head>
          <body>
            <div id="app">${markup}</div>
          </body>
        </html>
      `)
    })
    .catch(next)
})

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
