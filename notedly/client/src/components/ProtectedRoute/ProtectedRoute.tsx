import { FC, useContext } from "react"
import { Redirect, Route } from "react-router"
import { AuthContext } from "../../context/Auth"

const protectedFromUnAuth = ["/my-notes", "/favorites"]
const protectedFromAuth = ["/sign-up", "/sign-in"]

type Props = {
  path: string
  exact?: boolean
}

export const ProtectedRoute: FC<Props> = ({
  children,
  path,
  exact = false,
}) => {
  const { isLoggedIn } = useContext(AuthContext)

  return (
    <Route path={path} exact={exact}>
      {!isLoggedIn && protectedFromUnAuth.includes(path) && (
        <Redirect to="/sign-in" />
      )}
      {isLoggedIn && protectedFromAuth.includes(path) && <Redirect to="/" />}
      {children}
    </Route>
  )
}
