import { Routes, Route } from "react-router";
import { Main } from "./pages/Main/Main";
import { Matches } from "./pages/Matches/Matches";
import { Profile } from "./pages/Profile/Profile";

export const App = () => {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/matches" element={<Matches />} />
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

export default App;
