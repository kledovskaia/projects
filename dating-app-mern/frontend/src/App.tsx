import { useContext } from "react";
import { Routes, Route } from "react-router";
import { Header } from "./components/Header/Header";
import { AuthContext } from "./context/Auth";
import { Main } from "./pages/Main/Main";
import { Matches } from "./pages/Matches/Matches";
import { Profile } from "./pages/Profile/Profile";
import { SignIn } from "./pages/SignIn/SignIn";
import { SignUp } from "./pages/SignUp/SignUp";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
};

export default App;
