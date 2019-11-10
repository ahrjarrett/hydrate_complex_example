import React from "react";
import express from "express";
import cors from "cors";
import serialize from "serialize-javascript";
import { renderToString } from "react-dom/server";

import App from "../shared/App";

const app = express();
const PORT = 3001;

app.use(cors());

app.use(express.static("public"));

app.get("*", (req, res, next) => {
  const name = "Lol";
  const markup = renderToString(<App data={name} />);

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Hydrating SSR - ahrjarrett</title>
        <script src="/bundle.js" defer>window.__INITIAL_DATA__ = ${serialize(name)}</script>
        <script>window.__INITIAL_DATA__ = ${serialize(name)}</script>
        </head>
      <body>
        <div id="app">${markup}</div>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
