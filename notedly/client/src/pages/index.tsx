import { Route, Switch } from "react-router"
import { ProtectedRoute } from "../components/ProtectedRoute/ProtectedRoute"
import { Favorites } from "./Favorites"
import { Home } from "./Home"
import { MyNotes } from "./MyNotes"
import { NotePage } from "./NotePage"
import { SignIn } from "./SignIn"
import { SignUp } from "./SignUp"

export const Pages = () => {
  return (
    <Switch>
      <ProtectedRoute path="/sign-up">
        <SignUp />
      </ProtectedRoute>
      <ProtectedRoute path="/sign-in">
        <SignIn />
      </ProtectedRoute>
      <ProtectedRoute path="/favorites">
        <Favorites />
      </ProtectedRoute>
      <ProtectedRoute path="/my-notes">
        <MyNotes />
      </ProtectedRoute>
      <Route path="/note/:id" component={NotePage} />
      <Route path="/" component={Home} />
    </Switch>
  )
}
