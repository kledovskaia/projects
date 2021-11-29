import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router";
import { Header } from "./components/Header/Header";
import { UnauthenticatedCTA } from "./components/UnauthenticatedCTA/UnauthenticatedCTA";
import { AuthContext } from "./context/Auth";
import { Main } from "./pages/Main/Main";
import { Matches } from "./pages/Matches/Matches";
import { Profile } from "./pages/Profile/Profile";
import { SignIn } from "./pages/SignIn/SignIn";
import { SignUp } from "./pages/SignUp/SignUp";

const protectedFromUnauthenticated = {
  "/profile": Profile,
  "/matches": Matches,
};
const protectedFromAuthenticated = {
  "/sign-in": SignIn,
  "/sign-up": SignUp,
};

export const App = () => {
  const { isAuthenticated, data } = useContext(AuthContext);

  return (
    <>
      <Header />
      {isAuthenticated !== null && (
        <Routes>
          {Object.entries({
            ...protectedFromUnauthenticated,
            ...protectedFromAuthenticated,
          }).map(([path, Component]) => {
            let Element = Component;
            if (
              (path in protectedFromAuthenticated && !!isAuthenticated) ||
              (path in protectedFromUnauthenticated && !isAuthenticated)
            ) {
              Element = () => <Navigate to="/" />;
            }
            return <Route key={path} path={path} element={<Element />} />;
          })}
          <Route
            path="/"
            element={
              isAuthenticated ? data && <Main /> : <UnauthenticatedCTA />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </>
  );
};

export default App;
