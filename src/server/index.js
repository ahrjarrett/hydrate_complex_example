import React from "react"
import express from "express"
import cors from "cors"
import serialize from "serialize-javascript"
import { renderToString } from "react-dom/server"
import "regenerator-runtime/runtime"

import { App } from "../shared/App"
import { fetchPopularRepos } from "../shared/api"

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.static("public"))

app.get("*", async (req, res, next) => {
  let data = {}

  try {
    const response = await fetchPopularRepos()
    data = response.items
    console.group("%c Oh my heavens! ", "background: #222; color: #bada55")
    console.log("data ", "==> ", data, "\n\n")
    console.groupEnd()
  } catch (e) {
    console.error(e)
  }

  const markup = renderToString(<App data={data} />)

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Hydrating SSR - ahrjarrett</title>
        <script src="/bundle.js" defer></script>
        <script> window.__INITIAL_DATA__ = ${serialize(data)}</script>
        </head>
      <body>
        <div id="app">${markup}</div>
      </body>
    </html>
  `)
})

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
