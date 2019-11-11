import React, { useEffect, useRef, useState } from "react"
import useReactRouter from "use-react-router"

import { fetchPopularRepos } from "./api"

export function Grid({ staticContext }) {
  const prevLang = useRef(false)
  const [repos, setRepos] = useState(
    __isBrowser__ ? window.__INITIAL_DATA__ : staticContext.data
  )

  if (__isBrowser__) {
    delete window.__INITIAL_DATA__
  }

  const { match } = useReactRouter()
  const lang = match.params.id

  useEffect(() => {
    if (prevLang.current !== lang) {
      fetchPopularRepos(lang)
        .then(newRepos => {
          console.group(
            "%c Oh my heavens! ",
            "background: #222; color: #bada55"
          )
          console.log("newRepos ", "==> ", newRepos, "\n\n")
          console.groupEnd()
          setRepos(newRepos.items)
        })
        .catch(e => console.error(e))
    }
  }, [lang])

  return (
    <ul style={{ display: "flex", flexWrap: "wrap" }}>
      {repos.map(({ name, owner, stargazers_count, html_url }) => (
        <li key={name} style={{ margin: 30 }}>
          <ul>
            <li>
              <a href={html_url}>{name}</a>
            </li>
            <li>@{owner.login}</li>
            <li>{stargazers_count} stars</li>
          </ul>
        </li>
      ))}
    </ul>
  )
}
