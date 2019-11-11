import { Home } from "./Home"
import { Grid } from "./Grid"
import { fetchPopularRepos } from "./api"

console.group("%c Oh my heavens! ", "background: #222; color: #bada55")
console.log("Home ", "==> ", Home, "\n\n")
console.groupEnd()

export const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/popular/:id",
    component: Grid,
    fetchInitialData: (path = "") => fetchPopularRepos(path.split("/").pop())
  }
]
