import React from "react";
import express from "express";
import cors from "cors";
import { renderToString } from "react-dom/server";

import App from "../shared/App";

const app = express();
const PORT = 3001;

app.use(cors());

app.use(express.static("public"));

app.get("*", (req, res, next) => {
  const markup = renderToString(<App />);

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Hydrating SSR - ahrjarrett</title>
        <script src="/bundle.js" defer></script>
      </head>

      <body>
        <div id="app">
          ${markup}
        </div>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
