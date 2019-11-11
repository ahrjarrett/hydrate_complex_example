import fetch from "isomorphic-fetch"

export function fetchPopularRepos(language = "all") {
  console.log("from fetchPopularRepos: ", language)

  const encodedURI = encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  )

  return fetch(encodedURI)
    .then(res => res.json())
    .then(json => json)
    .catch(e => console.error(e))
}
