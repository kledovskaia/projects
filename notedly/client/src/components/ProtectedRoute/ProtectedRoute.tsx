import { FC, useContext } from "react"
import { Redirect, Route, useLocation } from "react-router"
import { AuthContext } from "../../context/Auth"

const protectedFromUnAuth = ["/my-notes", "/favorites"]
const protectedFromAuth = ["/sign-up", "/sign-in"]

type Props = {
  component: () => JSX.Element
  path: string
  exact?: boolean
}

export const ProtectedRoute: FC<Props> = ({
  component: Component,
  path,
  exact = false,
}) => {
  const { isLoggedIn } = useContext(AuthContext)
  const location = useLocation()

  return (
    <Route path={path} exact={exact}>
      {!isLoggedIn && protectedFromUnAuth.includes(path) && (
        <Redirect to={{ pathname: "/sign-in", state: { from: location } }} />
      )}
      {isLoggedIn && protectedFromAuth.includes(path) && (
        <Redirect to={{ pathname: "/", state: { from: location } }} />
      )}
      <Component />
    </Route>
  )
}
