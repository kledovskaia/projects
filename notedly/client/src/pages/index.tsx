import { Route, Switch } from "react-router"
import { Favorites } from "./Favorites"
import { Home } from "./Home"
import { MyNotes } from "./MyNotes"

export const Pages = () => {
  return (
    <Switch>
      <Route path="/my-notes" component={MyNotes} />
      <Route path="/favorites" component={Favorites} />
      <Route path="/" component={Home} />
    </Switch>
  )
}
