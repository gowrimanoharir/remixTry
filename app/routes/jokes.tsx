import { Outlet } from "remix"

export default function JokesRoute() {
  return(<>
  <h1>Jokes</h1>
  <main>
  <Outlet/>
  </main>
  
  </>)
}