import { Route, Switch } from "react-router-dom"
import { Favorites } from "./pages/Favorites"
import { Home } from "./pages/Home"
import { MyNotes } from "./pages/MyNotes"
import "./App.css"

export const App = () => {
  return (
    <Switch>
      <Route path="/my-notes" component={MyNotes} />
      <Route path="/favorites" component={Favorites} />
      <Route path="/" component={Home} />
    </Switch>
  )
}
