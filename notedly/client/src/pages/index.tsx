import { Route, Switch } from "react-router"
import { ProtectedRoute } from "../components/ProtectedRoute/ProtectedRoute"
import { Favorites } from "./Favorites"
import { Home } from "./Home"
import { MyNotes } from "./MyNotes"
import { NotePage } from "./NotePage"
import { SignIn } from "./SignIn"
import { SignUp } from "./SignUp"
import { NewNote } from "./NewNote"
import { EditNote } from "./EditNote"

export const Pages = () => {
  return (
    <Switch>
      <ProtectedRoute path="/sign-up" component={SignUp} />
      <ProtectedRoute path="/sign-in" component={SignIn} />
      <ProtectedRoute path="/favorites" component={Favorites} />
      <ProtectedRoute path="/my-notes" component={MyNotes} />
      <ProtectedRoute path="/new" component={NewNote} />
      <Route path="/note/:id" component={NotePage} />
      <Route path="/edit/:id" component={EditNote} />
      <Route path="/" component={Home} />
    </Switch>
  )
}
